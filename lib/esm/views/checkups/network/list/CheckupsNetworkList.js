var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import ListPageFilter from '@kubevirt-utils/components/ListPageFilter/ListPageFilter';
import useNADsData from '@kubevirt-utils/components/NetworkInterfaceModal/components/hooks/useNADsData';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import usePagination from '@kubevirt-utils/hooks/usePagination/usePagination';
import { paginationDefaultValues } from '@kubevirt-utils/hooks/usePagination/utils/constants';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { ListPageBody, useActiveNamespace, VirtualizedTable, } from '@openshift-console/dynamic-plugin-sdk';
import { Pagination } from '@patternfly/react-core';
import { getJobByName } from '../../utils/utils';
import useCheckupsNetworkData from '../hooks/useCheckupsNetworkData';
import useCheckupsNetworkFilters from '../hooks/useCheckupsNetworkFilters';
import useCheckupsNetworkCheckupsListColumns from '../hooks/useCheckupsNetworkListColumns';
import useCheckupsNetworkPermissions from '../hooks/useCheckupsNetworkPermissions';
import CheckupsNetworkListEmptyState from './CheckupsNetworkListEmptyState';
import CheckupsNetworkListRow from './CheckupsNetworkListRow';
import '@kubevirt-utils/styles/list-managment-group.scss';
var CheckupsNetworkList = function () {
    var t = useKubevirtTranslation().t;
    var _a = useCheckupsNetworkCheckupsListColumns(), columns = _a[0], activeColumns = _a[1], loadedColumns = _a[2];
    var namespace = useActiveNamespace()[0];
    var nads = useNADsData(namespace).nads;
    var _b = useCheckupsNetworkPermissions(), isPermitted = _b.isPermitted, loadingPermissions = _b.loading;
    var _c = useCheckupsNetworkData(), configMaps = _c.configMaps, error = _c.error, jobs = _c.jobs, loading = _c.loading;
    var _d = usePagination(), onPaginationChange = _d.onPaginationChange, pagination = _d.pagination;
    var _f = useCheckupsNetworkFilters(configMaps), unfilterData = _f[0], dataFilters = _f[1], onFilterChange = _f[2], filters = _f[3];
    var nadsInNamespace = !isEmpty(nads.filter(function (nad) { return nad.metadata.namespace === namespace; }));
    if (isEmpty(configMaps) && loading && !loadingPermissions && loadedColumns) {
        return (React.createElement(CheckupsNetworkListEmptyState, { isPermitted: isPermitted, nadsInNamespace: nadsInNamespace }));
    }
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
                    id: 'checkups-network',
                    selectedColumns: new Set(activeColumns === null || activeColumns === void 0 ? void 0 : activeColumns.map(function (col) { return col === null || col === void 0 ? void 0 : col.id; })),
                    type: t('Checkups'),
                }, onFilterChange: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    onFilterChange.apply(void 0, args);
                    onPaginationChange(__assign(__assign({}, pagination), { endIndex: pagination === null || pagination === void 0 ? void 0 : pagination.perPage, page: 1, startIndex: 0 }));
                }, data: unfilterData, loaded: loading && !loadingPermissions && loadedColumns, rowFilters: filters }),
            !isEmpty(dataFilters) && loading && !loadingPermissions && (React.createElement(Pagination, { onPerPageSelect: function (_e, perPage, page, startIndex, endIndex) {
                    return onPaginationChange({ endIndex: endIndex, page: page, perPage: perPage, startIndex: startIndex });
                }, onSetPage: function (_e, page, perPage, startIndex, endIndex) {
                    return onPaginationChange({ endIndex: endIndex, page: page, perPage: perPage, startIndex: startIndex });
                }, className: "list-managment-group__pagination", isLastFullPageShown: true, itemCount: dataFilters === null || dataFilters === void 0 ? void 0 : dataFilters.length, page: pagination === null || pagination === void 0 ? void 0 : pagination.page, perPage: pagination === null || pagination === void 0 ? void 0 : pagination.perPage, perPageOptions: paginationDefaultValues }))),
        React.createElement(VirtualizedTable, { EmptyMsg: function () { return (React.createElement("div", { className: "pf-u-text-align-center" }, t('No network latency checkups found'))); }, rowData: {
                getJobByName: function (configMapName) {
                    return getJobByName(jobs, configMapName);
                },
            }, columns: activeColumns, data: dataFilters, loaded: loading && !loadingPermissions && loadedColumns, loadError: error, Row: CheckupsNetworkListRow, unfilteredData: unfilterData })));
};
export default CheckupsNetworkList;
//# sourceMappingURL=CheckupsNetworkList.js.map