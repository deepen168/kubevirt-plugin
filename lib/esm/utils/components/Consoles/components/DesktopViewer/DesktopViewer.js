import React, { useMemo, useState } from 'react';
import { modelToGroupVersionKind, PodModel, ServiceModel } from '@kubevirt-ui/kubevirt-api/console';
import FormPFSelect from '@kubevirt-utils/components/FormPFSelect/FormPFSelect';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getNamespace } from '@kubevirt-utils/resources/shared';
import { getVMIPod } from '@kubevirt-utils/resources/vmi';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { Form, FormGroup, SelectList, SelectOption } from '@patternfly/react-core';
import MultusNetwork from './Components/MultusNetwork';
import RDPConnector from './Components/RDPConnector';
import { MULTUS, POD } from './utils/constants';
import { getDefaultNetwork, getRdpAddressPort, getVmRdpNetworks } from './utils/utils';
var DesktopViewer = function (_a) {
    var vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var networks = getVmRdpNetworks(vm, vmi);
    var _b = useState(getDefaultNetwork(networks)), selectedNetwork = _b[0], setSelectedNetwork = _b[1];
    var _c = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(PodModel),
        isList: true,
        namespace: getNamespace(vm),
    }), pods = _c[0], podsLoaded = _c[1];
    var vmPod = useMemo(function () { return getVMIPod(vmi, pods); }, [vmi, pods]);
    var _d = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(ServiceModel),
        isList: true,
        namespace: getNamespace(vm),
    }), services = _d[0], servicesLoaded = _d[1];
    var rdpServiceAddressPort = getRdpAddressPort(vmi, services, vmPod);
    var networkType = selectedNetwork === null || selectedNetwork === void 0 ? void 0 : selectedNetwork.type;
    var networkItems = networks === null || networks === void 0 ? void 0 : networks.map(function (network) {
        return (React.createElement(SelectOption, { onClick: function () {
                setSelectedNetwork(network);
            }, key: network === null || network === void 0 ? void 0 : network.name, value: network === null || network === void 0 ? void 0 : network.name }, network === null || network === void 0 ? void 0 : network.name));
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(Form, { className: "kv-vm-consoles__rdp-actions", isHorizontal: true },
            React.createElement(FormGroup, { fieldId: "network-dropdown", label: t('Network interface') },
                React.createElement(FormPFSelect, { id: "network-dropdown", placeholder: t('--- Select network interface ---'), selected: selectedNetwork === null || selectedNetwork === void 0 ? void 0 : selectedNetwork.name, toggleProps: { id: 'pf-c-console__actions-desktop-toggle-id' } },
                    React.createElement(SelectList, null, networkItems)))),
        networkType === POD && (React.createElement(RDPConnector, { isLoading: !podsLoaded || !servicesLoaded, rdpServiceAddressPort: rdpServiceAddressPort, vm: vm, vmi: vmi })),
        networkType === MULTUS && React.createElement(MultusNetwork, { selectedNetwork: selectedNetwork, vmi: vmi })));
};
export default DesktopViewer;
//# sourceMappingURL=DesktopViewer.js.map