import React from 'react';
import { modelToGroupVersionKind, ServiceModel } from '@kubevirt-ui/kubevirt-api/console';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { useVMIAndPodsForVM } from '@kubevirt-utils/resources/vm';
import { getServicesForVmi } from '@kubevirt-utils/resources/vmi';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { ServicesList } from '@openshift-console/dynamic-plugin-sdk-internal';
import { Card, CardBody, CardTitle, Divider } from '@patternfly/react-core';
var VirtualMachinesOverviewTabService = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var _j = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(ServiceModel),
        isList: true,
        namespace: (_b = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
    }), services = _j[0], loaded = _j[1];
    var vmi = useVMIAndPodsForVM((_c = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _c === void 0 ? void 0 : _c.name, (_d = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _d === void 0 ? void 0 : _d.namespace).vmi;
    var data = getServicesForVmi(services, ((_e = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _e === void 0 ? void 0 : _e.labels) || ((_h = (_g = (_f = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _f === void 0 ? void 0 : _f.template) === null || _g === void 0 ? void 0 : _g.metadata) === null || _h === void 0 ? void 0 : _h.labels));
    return (React.createElement(Card, null,
        React.createElement(CardTitle, { className: "text-muted" }, t('Services ({{services}})', { services: data === null || data === void 0 ? void 0 : data.length })),
        React.createElement(Divider, null),
        React.createElement(CardBody, { isFilled: true },
            React.createElement(ServicesList, { data: data || [], loaded: loaded }))));
};
export default VirtualMachinesOverviewTabService;
//# sourceMappingURL=VirtualMachinesOverviewTabService.js.map