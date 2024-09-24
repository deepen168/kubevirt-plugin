import React from 'react';
import { ListPageBody, VirtualizedTable } from '@openshift-console/dynamic-plugin-sdk';
import useVirtualMachineInstanceNetworkTab from './hooks/useVirtualMachineInstanceNetworkTab';
import useVirtualMachineInstanceNetworkTabColumns from './hooks/useVirtualMachineInstanceNetworkTabColumns';
import VirtualMachineInstancePageNetworkTabRow from './VirtualMachineInstancePageNetworkTabRow';
import './virtual-machines-insance-page-network-tab.scss';
var VirtualMachinesInstancePageNetworkTab = function (_a) {
    var vmi = _a.obj;
    var columns = useVirtualMachineInstanceNetworkTabColumns();
    var data = useVirtualMachineInstanceNetworkTab(vmi)[0];
    return (React.createElement("div", { className: "VirtualMachinesInstancePageNetworkTab" },
        React.createElement(ListPageBody, null,
            React.createElement(VirtualizedTable, { columns: columns, data: data, loaded: !!vmi, loadError: null, Row: VirtualMachineInstancePageNetworkTabRow, unfilteredData: data }))));
};
export default VirtualMachinesInstancePageNetworkTab;
//# sourceMappingURL=VirtualMachinesInstancePageNetworkTab.js.map