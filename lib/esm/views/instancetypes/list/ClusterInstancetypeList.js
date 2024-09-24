import React from 'react';
import useClusterInstanceTypes from '@catalog/CreateFromInstanceTypes/state/hooks/useClusterInstanceTypes';
import { VirtualMachineClusterInstancetypeModelRef } from '@kubevirt-ui/kubevirt-api/console';
import ListPageFilter from '@kubevirt-utils/components/ListPageFilter/ListPageFilter';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import usePagination from '@kubevirt-utils/hooks/usePagination/usePagination';
import { paginationDefaultValues } from '@kubevirt-utils/hooks/usePagination/utils/constants';
import { ListPageBody, useListPageFilter, VirtualizedTable, } from '@openshift-console/dynamic-plugin-sdk';
import { Pagination } from '@patternfly/react-core';
import ClusterInstancetypeRow from './components/ClusterInstancetypeRow';
import useClusterInstancetypeListColumns from './hooks/useClusterInstancetypeListColumns';
import '@kubevirt-utils/styles/list-managment-group.scss';
var ClusterInstancetypeList = function (_a) {
    var fieldSelector = _a.fieldSelector, hideColumnManagement = _a.hideColumnManagement, hideNameLabelFilters = _a.hideNameLabelFilters, hideTextFilter = _a.hideTextFilter, nameFilter = _a.nameFilter, selector = _a.selector;
    var t = useKubevirtTranslation().t;
    var _b = useClusterInstanceTypes(fieldSelector, selector), instanceTypes = _b[0], loaded = _b[1], loadError = _b[2];
    var _c = usePagination(), onPaginationChange = _c.onPaginationChange, pagination = _c.pagination;
    var _d = useListPageFilter(instanceTypes, null, {
        name: { selected: [nameFilter] },
    }), unfilteredData = _d[0], data = _d[1], onFilterChange = _d[2];
    var _f = useClusterInstancetypeListColumns(pagination, data), columns = _f[0], activeColumns = _f[1], loadedColumns = _f[2];
    return (React.createElement(ListPageBody, null,
        React.createElement("div", { className: "list-managment-group" },
            React.createElement(ListPageFilter, { columnLayout: {
                    columns: columns === null || columns === void 0 ? void 0 : columns.map(function (_a) {
                        var additional = _a.additional, id = _a.id, title = _a.title;
                        return ({
                            additional: additional,
                            id: id,
                            title: title,
                        });
                    }),
                    id: VirtualMachineClusterInstancetypeModelRef,
                    selectedColumns: new Set(activeColumns === null || activeColumns === void 0 ? void 0 : activeColumns.map(function (col) { return col === null || col === void 0 ? void 0 : col.id; })),
                    type: '',
                }, onFilterChange: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    onFilterChange.apply(void 0, args);
                    onPaginationChange({
                        endIndex: pagination === null || pagination === void 0 ? void 0 : pagination.perPage,
                        page: 1,
                        perPage: pagination === null || pagination === void 0 ? void 0 : pagination.perPage,
                        startIndex: 0,
                    });
                }, data: unfilteredData, hideColumnManagement: hideColumnManagement, hideLabelFilter: hideTextFilter, hideNameLabelFilters: hideNameLabelFilters, loaded: loaded && loadedColumns }),
            React.createElement(Pagination, { onPerPageSelect: function (_e, perPage, page, startIndex, endIndex) {
                    return onPaginationChange({ endIndex: endIndex, page: page, perPage: perPage, startIndex: startIndex });
                }, onSetPage: function (_e, page, perPage, startIndex, endIndex) {
                    return onPaginationChange({ endIndex: endIndex, page: page, perPage: perPage, startIndex: startIndex });
                }, className: "list-managment-group__pagination", isLastFullPageShown: true, itemCount: data === null || data === void 0 ? void 0 : data.length, page: pagination === null || pagination === void 0 ? void 0 : pagination.page, perPage: pagination === null || pagination === void 0 ? void 0 : pagination.perPage, perPageOptions: paginationDefaultValues })),
        React.createElement(VirtualizedTable, { EmptyMsg: function () { return (React.createElement("div", { className: "pf-u-text-align-center", id: "no-instancetype-msg" }, t('No VirtualMachineClusterInstanceType found'))); }, columns: activeColumns, data: data, loaded: loaded && loadedColumns, loadError: loadError, Row: ClusterInstancetypeRow, unfilteredData: unfilteredData })));
};
export default ClusterInstancetypeList;
//# sourceMappingURL=ClusterInstancetypeList.js.map