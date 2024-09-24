import React, { useMemo } from 'react';
import { getAutoAttachPodInterface } from '@kubevirt-utils/resources/vm';
import { getNetworkInterfaceRowData } from '@kubevirt-utils/resources/vm/utils/network/rowData';
import { getInterfacesAndNetworks } from '@kubevirt-utils/resources/vm/utils/network/utils';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { ListPageFilter, useListPageFilter, VirtualizedTable, } from '@openshift-console/dynamic-plugin-sdk';
import useNetworkColumns from '../../hooks/useNetworkColumns';
import useNetworkRowFilters from '../../hooks/useNetworkRowFilters';
import { isPendingHotPlugNIC, isPendingRemoval } from '../../utils/utils';
import AutoAttachedNetworkEmptyState from './AutoAttachedNetworkEmptyState';
import NetworkInterfaceRow from './NetworkInterfaceRow';
var NetworkInterfaceList = function (_a) {
    var vm = _a.vm, vmi = _a.vmi;
    var filters = useNetworkRowFilters();
    var networkInterfacesData = useMemo(function () {
        var _a = getInterfacesAndNetworks(vm, vmi), interfaces = _a.interfaces, networks = _a.networks;
        return getNetworkInterfaceRowData(networks, interfaces);
    }, [vm, vmi]);
    var _b = useListPageFilter(networkInterfacesData, filters), data = _b[0], filteredData = _b[1], onFilterChange = _b[2];
    var columns = useNetworkColumns(filteredData);
    var autoattachPodInterface = getAutoAttachPodInterface(vm) !== false;
    var isPending = function (network) {
        return isPendingHotPlugNIC(vm, vmi, network === null || network === void 0 ? void 0 : network.name) || isPendingRemoval(vm, vmi, network === null || network === void 0 ? void 0 : network.name);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(ListPageFilter, { data: data, loaded: true, onFilterChange: onFilterChange, rowFilters: filters }),
        React.createElement(VirtualizedTable, { columns: columns, data: filteredData, EmptyMsg: function () { return React.createElement(AutoAttachedNetworkEmptyState, { isAutoAttached: autoattachPodInterface }); }, loaded: !isEmpty(vm), loadError: false, Row: NetworkInterfaceRow, rowData: { isPending: isPending, vm: vm }, unfilteredData: data })));
};
export default NetworkInterfaceList;
//# sourceMappingURL=NetworkInterfaceList.js.map