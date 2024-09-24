import * as React from 'react';
import { getAutoAttachPodInterface, getInterfaces, getNetworks, } from '@kubevirt-utils/resources/vm';
import { getNetworkInterfaceRowData } from '@kubevirt-utils/resources/vm/utils/network/rowData';
import { ListPageFilter, useListPageFilter, VirtualizedTable, } from '@openshift-console/dynamic-plugin-sdk';
import useNetworkColumns from '../../hooks/useNetworkColumns';
import useNetworkRowFilters from '../../hooks/useNetworkRowFilters';
import NetworkInterfaceRow from './NetworkInterfaceRow';
var NetworkInterfaceList = function (_a) {
    var onUpdateVM = _a.onUpdateVM, vm = _a.vm;
    var networks = getNetworks(vm);
    var interfaces = getInterfaces(vm);
    var filters = useNetworkRowFilters();
    var networkInterfacesData = getNetworkInterfaceRowData(networks, interfaces, getAutoAttachPodInterface(vm));
    var _b = useListPageFilter(networkInterfacesData, filters), data = _b[0], filteredData = _b[1], onFilterChange = _b[2];
    var columns = useNetworkColumns(filteredData);
    return (React.createElement(React.Fragment, null,
        React.createElement(ListPageFilter, { data: data, loaded: true, onFilterChange: onFilterChange, rowFilters: filters }),
        React.createElement(VirtualizedTable, { columns: columns, data: filteredData, loaded: true, loadError: false, Row: NetworkInterfaceRow, rowData: { onUpdateVM: onUpdateVM }, unfilteredData: data })));
};
export default NetworkInterfaceList;
//# sourceMappingURL=NetworkInterfaceList.js.map