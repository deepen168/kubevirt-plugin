import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom-v5-compat';
import { VirtualMachineModelRef } from '@kubevirt-ui/kubevirt-api/console';
import FormPFSelect from '@kubevirt-utils/components/FormPFSelect/FormPFSelect';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getName, getNamespace } from '@kubevirt-utils/resources/shared';
import { SelectOption, Title } from '@patternfly/react-core';
import { ALL_NETWORKS } from '../utils/constants';
import useQuery from './hook/useQuery';
import NetworkChartsByNIC from './NetworkChartsByNIC';
import '../virtual-machine-metrics-tab.scss';
var NetworkCharts = function (_a) {
    var vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var navigate = useNavigate();
    var interfacesNames = useMemo(function () {
        var _a, _b, _c, _d;
        var interfaces = (_d = (_c = (_b = (_a = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _a === void 0 ? void 0 : _a.domain) === null || _b === void 0 ? void 0 : _b.devices) === null || _c === void 0 ? void 0 : _c.interfaces) === null || _d === void 0 ? void 0 : _d.map(function (nic) { return nic === null || nic === void 0 ? void 0 : nic.name; });
        interfaces === null || interfaces === void 0 ? void 0 : interfaces.unshift(ALL_NETWORKS);
        return interfaces;
    }, [vmi]);
    var query = useQuery();
    var _b = useState((query === null || query === void 0 ? void 0 : query.get('network')) || ALL_NETWORKS), selectedNetwork = _b[0], setSelectedNetwork = _b[1];
    return (React.createElement("div", null,
        React.createElement(Title, { className: "networkcharts-by-nic--title", headingLevel: "h4" }, t('Network interface:')),
        ' ',
        React.createElement(FormPFSelect, { onSelect: function (_, network) { return setSelectedNetwork(network); }, selected: selectedNetwork, toggleProps: { className: 'network ul.pf-c-dropdown__menu' } }, interfacesNames === null || interfacesNames === void 0 ? void 0 : interfacesNames.map(function (nic) { return (React.createElement(SelectOption, { onClick: function () {
                navigate("/k8s/ns/".concat(getNamespace(vmi), "/").concat(VirtualMachineModelRef, "/").concat(getName(vmi), "/metrics?network=").concat(nic));
            }, key: nic, value: nic }, nic)); })),
        React.createElement(NetworkChartsByNIC, { nic: selectedNetwork, vmi: vmi })));
};
export default NetworkCharts;
//# sourceMappingURL=NetworkCharts.js.map