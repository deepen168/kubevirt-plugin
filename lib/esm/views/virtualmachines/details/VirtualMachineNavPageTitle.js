import React from 'react';
import { useLocation } from 'react-router-dom-v5-compat';
import { VirtualMachineInstanceModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import SidebarEditorSwitch from '@kubevirt-utils/components/SidebarEditor/SidebarEditorSwitch';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useSingleNodeCluster from '@kubevirt-utils/hooks/useSingleNodeCluster';
import useVirtualMachineInstanceMigration from '@kubevirt-utils/resources/vmi/hooks/useVirtualMachineInstanceMigration';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { Label, Split, SplitItem } from '@patternfly/react-core';
import VirtualMachineActions from '@virtualmachines/actions/components/VirtualMachineActions/VirtualMachineActions';
import VMActionsIconBar from '@virtualmachines/actions/components/VMActionsIconBar/VMActionsIconBar';
import useVirtualMachineActionsProvider from '@virtualmachines/actions/hooks/useVirtualMachineActionsProvider';
import VirtualMachinePendingChangesAlert from '@virtualmachines/details/VirtualMachinePendingChangesAlert/VirtualMachinePendingChangesAlert';
import VMNotMigratableLabel from '@virtualmachines/list/components/VMNotMigratableLabel/VMNotMigratableLabel';
import VirtualMachineBreadcrumb from '../list/components/VirtualMachineBreadcrumb/VirtualMachineBreadcrumb';
import { getVMStatusIcon } from '../utils';
import { vmTabsWithYAML } from './utils/constants';
var VirtualMachineNavPageTitle = function (_a) {
    var _b, _c, _d, _e;
    var name = _a.name, vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var location = useLocation();
    var vmi = useK8sWatchResource({
        groupVersionKind: VirtualMachineInstanceModelGroupVersionKind,
        isList: false,
        name: (_b = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _b === void 0 ? void 0 : _b.name,
        namespace: (_c = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _c === void 0 ? void 0 : _c.namespace,
    })[0];
    var vmim = useVirtualMachineInstanceMigration(vm);
    var isSingleNodeCluster = useSingleNodeCluster()[0];
    var actions = useVirtualMachineActionsProvider(vm, vmim, isSingleNodeCluster)[0];
    var StatusIcon = getVMStatusIcon((_d = vm === null || vm === void 0 ? void 0 : vm.status) === null || _d === void 0 ? void 0 : _d.printableStatus);
    var isSidebarEditorDisplayed = vmTabsWithYAML.find(function (tab) {
        return location.pathname.includes("/".concat(name, "/").concat(tab));
    });
    return (React.createElement("div", { className: "co-m-nav-title co-m-nav-title--detail" },
        React.createElement(VirtualMachineBreadcrumb, null),
        React.createElement("span", { className: "co-m-pane__heading" },
            React.createElement("h1", { className: "co-resource-item__resource-name" },
                React.createElement(Split, { hasGutter: true },
                    React.createElement(SplitItem, null,
                        React.createElement("span", { className: "co-m-resource-icon co-m-resource-icon--lg" }, t('VM')),
                        name,
                        ' ',
                        !isEmpty(vm) && (React.createElement(Label, { className: "vm-resource-label", icon: React.createElement(StatusIcon, null), isCompact: true }, (_e = vm === null || vm === void 0 ? void 0 : vm.status) === null || _e === void 0 ? void 0 : _e.printableStatus))),
                    React.createElement(VMNotMigratableLabel, { vm: vm }))),
            React.createElement(Split, { hasGutter: true },
                isSidebarEditorDisplayed && (React.createElement(SplitItem, { className: "VirtualMachineNavPageTitle__SidebarEditorSwitch" },
                    React.createElement(SidebarEditorSwitch, null))),
                isEmpty(vm) ? (React.createElement(Loading, null)) : (React.createElement(React.Fragment, null,
                    React.createElement(VMActionsIconBar, { vm: vm }),
                    React.createElement(SplitItem, null,
                        React.createElement(VirtualMachineActions, { actions: actions })))))),
        React.createElement(VirtualMachinePendingChangesAlert, { vm: vm, vmi: vmi })));
};
export default VirtualMachineNavPageTitle;
//# sourceMappingURL=VirtualMachineNavPageTitle.js.map