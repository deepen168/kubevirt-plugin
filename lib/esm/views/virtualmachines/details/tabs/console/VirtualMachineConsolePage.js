import React from 'react';
import { VirtualMachineInstanceModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import Consoles from '@kubevirt-utils/components/Consoles/Consoles';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { Bullseye, EmptyState, EmptyStateBody, PageSection, PageSectionVariants, } from '@patternfly/react-core';
import { printableVMStatus } from '../../../utils';
import VirtualMachineConsolePageTitle from './components/VirtualMachineConsolePageTitle';
var VirtualMachineConsolePage = function (_a) {
    var _b, _c, _d;
    var vm = _a.obj;
    var t = useKubevirtTranslation().t;
    var _e = useK8sWatchResource({
        groupVersionKind: VirtualMachineInstanceModelGroupVersionKind,
        isList: false,
        name: (_b = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _b === void 0 ? void 0 : _b.name,
        namespace: (_c = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _c === void 0 ? void 0 : _c.namespace,
    }), vmi = _e[0], vmiLoaded = _e[1];
    if (!vmi || ((_d = vm === null || vm === void 0 ? void 0 : vm.status) === null || _d === void 0 ? void 0 : _d.printableStatus) === printableVMStatus.Stopped) {
        return (React.createElement(React.Fragment, null,
            React.createElement(VirtualMachineConsolePageTitle, null),
            React.createElement(EmptyState, null,
                React.createElement(EmptyStateBody, null, t('This VirtualMachine is down. Please start it to access its console.')))));
    }
    if (!vmiLoaded) {
        return (React.createElement(React.Fragment, null,
            React.createElement(VirtualMachineConsolePageTitle, null),
            React.createElement(Bullseye, null,
                React.createElement(Loading, null))));
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(VirtualMachineConsolePageTitle, null),
        React.createElement(PageSection, { variant: PageSectionVariants.light },
            React.createElement(Consoles, { vmi: vmi }))));
};
export default VirtualMachineConsolePage;
//# sourceMappingURL=VirtualMachineConsolePage.js.map