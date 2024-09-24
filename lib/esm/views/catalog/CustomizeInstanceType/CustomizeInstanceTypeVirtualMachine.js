import React from 'react';
import { useInstanceTypeVMStore } from '@catalog/CreateFromInstanceTypes/state/useInstanceTypeVMStore';
import HorizontalNavbar from '@kubevirt-utils/components/HorizontalNavbar/HorizontalNavbar';
import { Stack, StackItem } from '@patternfly/react-core';
import CustomizeITVMFooter from './components/CustomizeITVMFooter';
import CustomizeITVMHeader from './components/CustomizeITVMHeader';
import { pages } from './utils/constants';
var CustomizeInstanceTypeVirtualMachine = function () {
    var vm = useInstanceTypeVMStore().vm;
    return (React.createElement(Stack, { hasGutter: true },
        React.createElement(CustomizeITVMHeader, null),
        React.createElement(StackItem, { isFilled: true },
            React.createElement(HorizontalNavbar, { pages: pages, vm: vm })),
        React.createElement(CustomizeITVMFooter, null)));
};
export default CustomizeInstanceTypeVirtualMachine;
//# sourceMappingURL=CustomizeInstanceTypeVirtualMachine.js.map