import React from 'react';
import DiskListTitle from '@kubevirt-utils/components/DiskListTitle/DiskListTitle';
import { ListPageBody, ListPageFilter, useListPageFilter, VirtualizedTable, } from '@openshift-console/dynamic-plugin-sdk';
import useDisksTableColumns from '../../hooks/useDisksTableColumns';
import useDisksTableDisks from '../../hooks/useDisksTableDisks';
import { filters } from '../../utils/virtualMachinesInstancePageDisksTabUtils';
import DisksTableRow from './DisksTableRow';
var DisksTable = function (_a) {
    var vmi = _a.vmi;
    var columns = useDisksTableColumns();
    var _b = useDisksTableDisks(vmi), disks = _b[0], loaded = _b[1], loadingError = _b[2];
    var _c = useListPageFilter(disks, filters), data = _c[0], filteredData = _c[1], onFilterChange = _c[2];
    return (React.createElement(ListPageBody, null,
        React.createElement(DiskListTitle, null),
        React.createElement(ListPageFilter, { data: data, hideLabelFilter: true, loaded: loaded, onFilterChange: onFilterChange, rowFilters: filters }),
        React.createElement(VirtualizedTable, { columns: columns, data: filteredData, loaded: loaded, loadError: loadingError, Row: DisksTableRow, unfilteredData: disks })));
};
export default DisksTable;
//# sourceMappingURL=DisksTable.js.map