import React from 'react';
import { VirtualMachinePreferenceModelRef } from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachinePreferenceModel';
import ListPageFilter from '@kubevirt-utils/components/ListPageFilter/ListPageFilter';
import { ALL_NAMESPACES_SESSION_KEY } from '@kubevirt-utils/hooks/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import usePagination from '@kubevirt-utils/hooks/usePagination/usePagination';
import { paginationDefaultValues } from '@kubevirt-utils/hooks/usePagination/utils/constants';
import useUserPreferences from '@kubevirt-utils/hooks/useUserPreferences';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { ListPageBody, useListPageFilter, VirtualizedTable, } from '@openshift-console/dynamic-plugin-sdk';
import { Pagination } from '@patternfly/react-core';
import UserPreferenceRow from './components/UserPreferenceRow';
import UserPreferencesEmptyState from './components/UserPreferencesEmptyState';
import useUserPreferenceListColumns from './hooks/useUserPreferenceListColumns';
var UserPreferenceList = function (_a) {
    var fieldSelector = _a.fieldSelector, hideColumnManagement = _a.hideColumnManagement, hideNameLabelFilters = _a.hideNameLabelFilters, hideTextFilter = _a.hideTextFilter, nameFilter = _a.nameFilter, namespace = _a.namespace, selector = _a.selector;
    var t = useKubevirtTranslation().t;
    var activeNamespace = namespace !== null && namespace !== void 0 ? namespace : ALL_NAMESPACES_SESSION_KEY;
    var _b = useUserPreferences(activeNamespace, fieldSelector, selector), preferences = _b[0], loaded = _b[1], loadError = _b[2];
    var _c = usePagination(), onPaginationChange = _c.onPaginationChange, pagination = _c.pagination;
    var _d = useListPageFilter(preferences, null, {
        name: { selected: [nameFilter] },
    }), unfilteredData = _d[0], data = _d[1], onFilterChange = _d[2];
    var _f = useUserPreferenceListColumns(pagination, data), columns = _f[0], activeColumns = _f[1], loadedColumns = _f[2];
    if (loaded && isEmpty(unfilteredData)) {
        return React.createElement(UserPreferencesEmptyState, { namespace: activeNamespace });
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
                    id: VirtualMachinePreferenceModelRef,
                    selectedColumns: new Set(activeColumns === null || activeColumns === void 0 ? void 0 : activeColumns.map(function (col) { return col === null || col === void 0 ? void 0 : col.id; })),
                    type: t('preferences'),
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
            !isEmpty(data) && (React.createElement(Pagination, { onPerPageSelect: function (_e, perPage, page, startIndex, endIndex) {
                    return onPaginationChange({ endIndex: endIndex, page: page, perPage: perPage, startIndex: startIndex });
                }, onSetPage: function (_e, page, perPage, startIndex, endIndex) {
                    return onPaginationChange({ endIndex: endIndex, page: page, perPage: perPage, startIndex: startIndex });
                }, className: "list-managment-group__pagination", isLastFullPageShown: true, itemCount: data === null || data === void 0 ? void 0 : data.length, page: pagination === null || pagination === void 0 ? void 0 : pagination.page, perPage: pagination === null || pagination === void 0 ? void 0 : pagination.perPage, perPageOptions: paginationDefaultValues }))),
        React.createElement(VirtualizedTable, { EmptyMsg: function () { return (React.createElement("div", { className: "pf-u-text-align-center", id: "no-preference-msg" }, t('No preferences found'))); }, columns: activeColumns, data: data, loaded: loaded && loadedColumns, loadError: loadError, Row: UserPreferenceRow, unfilteredData: unfilteredData })));
};
export default UserPreferenceList;
//# sourceMappingURL=UserPreferenceList.js.map