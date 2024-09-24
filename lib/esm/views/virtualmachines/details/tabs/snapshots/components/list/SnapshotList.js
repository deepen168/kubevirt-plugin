import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ListPageFilter, useListPageFilter, VirtualizedTable, } from '@openshift-console/dynamic-plugin-sdk';
import { EmptyState, EmptyStateBody, EmptyStateHeader, EmptyStateIcon, EmptyStateVariant, } from '@patternfly/react-core';
import { SearchIcon } from '@patternfly/react-icons';
import useSnapshotColumns from '../../hooks/useSnapshotColumns';
import { filters } from '../../utils/filters';
import SnapshotRow from './SnapshotRow';
var SnapshotsList = function (_a) {
    var error = _a.error, isVMRunning = _a.isVMRunning, loaded = _a.loaded, restoresMap = _a.restoresMap, snapshots = _a.snapshots;
    var columns = useSnapshotColumns();
    var t = useKubevirtTranslation().t;
    var _b = useListPageFilter(snapshots, filters), data = _b[0], filteredData = _b[1], onFilterChange = _b[2];
    return (React.createElement(React.Fragment, null,
        React.createElement(ListPageFilter, { data: data, loaded: loaded, onFilterChange: onFilterChange, rowFilters: filters }),
        React.createElement(VirtualizedTable, { NoDataEmptyMsg: function () { return (React.createElement(React.Fragment, null,
                React.createElement(EmptyState, { variant: EmptyStateVariant.xs },
                    React.createElement(EmptyStateHeader, { icon: React.createElement(EmptyStateIcon, { className: "snapshots-list__empty-state-icon", icon: SearchIcon }) }),
                    React.createElement(EmptyStateBody, null, t('No snapshots found'))))); }, columns: columns, data: filteredData, loaded: loaded, loadError: error, Row: SnapshotRow, rowData: { isVMRunning: isVMRunning, restores: restoresMap }, unfilteredData: data })));
};
export default SnapshotsList;
//# sourceMappingURL=SnapshotList.js.map