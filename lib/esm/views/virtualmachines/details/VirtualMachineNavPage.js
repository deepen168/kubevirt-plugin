import React from 'react';
import HorizontalNavbar from '@kubevirt-utils/components/HorizontalNavbar/HorizontalNavbar';
import { SidebarEditorProvider } from '@kubevirt-utils/components/SidebarEditor/SidebarEditorContext';
import useInstanceTypeExpandSpec from '@kubevirt-utils/resources/vm/hooks/useInstanceTypeExpandSpec';
import { isInstanceTypeVM } from '@kubevirt-utils/resources/vm/utils/instanceTypes';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { useVirtualMachineTabs } from './hooks/useVirtualMachineTabs';
import VirtualMachineNavPageTitle from './VirtualMachineNavPageTitle';
import './virtual-machine-page.scss';
var VirtualMachineNavPage = function (_a) {
    var kind = _a.kind, name = _a.name, namespace = _a.namespace;
    var vm = useK8sWatchResource({
        kind: kind,
        name: name,
        namespace: namespace,
    })[0];
    var instanceTypeExpandedSpec = useInstanceTypeExpandSpec(vm)[0];
    var pages = useVirtualMachineTabs();
    return (React.createElement(SidebarEditorProvider, null,
        React.createElement(VirtualMachineNavPageTitle, { name: name, vm: isInstanceTypeVM(vm) ? instanceTypeExpandedSpec : vm }),
        React.createElement("div", { className: "VirtualMachineNavPage--tabs__main" },
            React.createElement(HorizontalNavbar, { instanceTypeExpandedSpec: instanceTypeExpandedSpec, pages: pages, vm: vm }))));
};
export default VirtualMachineNavPage;
//# sourceMappingURL=VirtualMachineNavPage.js.map