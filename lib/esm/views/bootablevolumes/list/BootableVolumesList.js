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
import React, { useState } from 'react';
import { useParams } from 'react-router-dom-v5-compat';
import useClusterPreferences from '@catalog/CreateFromInstanceTypes/state/hooks/useClusterPreferences';
import ListPageFilter from '@kubevirt-utils/components/ListPageFilter/ListPageFilter';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { paginationDefaultValues, paginationInitialState, } from '@kubevirt-utils/hooks/usePagination/utils/constants';
import { DataSourceModelRef } from '@kubevirt-utils/models';
import useBootableVolumes from '@kubevirt-utils/resources/bootableresources/hooks/useBootableVolumes';
import useHideDeprecatedBootableVolumes from '@kubevirt-utils/resources/bootableresources/hooks/useHideDeprecatedBootableVolumes';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { ListPageBody, ListPageHeader, useListPageFilter, VirtualizedTable, } from '@openshift-console/dynamic-plugin-sdk';
import { Pagination, Stack, StackItem } from '@patternfly/react-core';
import BootableVolumeAddButton from './components/BootableVolumeAddButton';
import BootableVolumesEmptyState from './components/BootableVolumesEmptyState';
import BootableVolumesRow from './components/BootableVolumesRow';
import useBootableVolumesColumns from './hooks/useBootableVolumesColumns';
import useBootableVolumesFilters from './hooks/useBootableVolumesFilters';
import '@kubevirt-utils/styles/list-managment-group.scss';
var BootableVolumesList = function () {
    var namespace = useParams().ns;
    var t = useKubevirtTranslation().t;
    var _a = useBootableVolumes(namespace), bootableVolumes = _a.bootableVolumes, dataImportCrons = _a.dataImportCrons, error = _a.error, loaded = _a.loaded;
    var preferences = useClusterPreferences()[0];
    var rowFilters = useBootableVolumesFilters();
    var _b = useListPageFilter(bootableVolumes, rowFilters), data = _b[0], filteredData = _b[1], onFilterChange = _b[2];
    var _c = useState(paginationInitialState), pagination = _c[0], setPagination = _c[1];
    var _d = useBootableVolumesColumns(pagination, filteredData, preferences), columns = _d[0], activeColumns = _d[1], loadedColumns = _d[2];
    useHideDeprecatedBootableVolumes(onFilterChange);
    var onPageChange = function (_a) {
        var endIndex = _a.endIndex, page = _a.page, perPage = _a.perPage, startIndex = _a.startIndex;
        setPagination(function () { return ({
            endIndex: endIndex,
            page: page,
            perPage: perPage,
            startIndex: startIndex,
        }); });
    };
    if (loaded && isEmpty(bootableVolumes)) {
        return React.createElement(BootableVolumesEmptyState, { namespace: namespace });
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(ListPageHeader, { title: t('Bootable volumes') },
            React.createElement(BootableVolumeAddButton, { namespace: namespace })),
        React.createElement(ListPageBody, null,
            React.createElement(Stack, { hasGutter: true },
                React.createElement(StackItem, null, t('View and manage available bootable volumes.')),
                React.createElement(StackItem, { className: "list-managment-group" },
                    React.createElement(ListPageFilter, { columnLayout: {
                            columns: columns === null || columns === void 0 ? void 0 : columns.map(function (_a) {
                                var additional = _a.additional, id = _a.id, title = _a.title;
                                return ({
                                    additional: additional,
                                    id: id,
                                    title: title,
                                });
                            }),
                            id: DataSourceModelRef,
                            selectedColumns: new Set(activeColumns === null || activeColumns === void 0 ? void 0 : activeColumns.map(function (col) { return col === null || col === void 0 ? void 0 : col.id; })),
                            type: t('DataSource'),
                        }, onFilterChange: function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            onFilterChange.apply(void 0, args);
                            setPagination(function (prevPagination) { return (__assign(__assign({}, prevPagination), { endIndex: prevPagination === null || prevPagination === void 0 ? void 0 : prevPagination.perPage, page: 1, startIndex: 0 })); });
                        }, data: data, loaded: loaded && loadedColumns, rowFilters: rowFilters }),
                    !isEmpty(filteredData) && (React.createElement(Pagination, { onPerPageSelect: function (_e, perPage, page, startIndex, endIndex) {
                            return onPageChange({ endIndex: endIndex, page: page, perPage: perPage, startIndex: startIndex });
                        }, onSetPage: function (_e, page, perPage, startIndex, endIndex) {
                            return onPageChange({ endIndex: endIndex, page: page, perPage: perPage, startIndex: startIndex });
                        }, className: "list-managment-group__pagination", isLastFullPageShown: true, itemCount: filteredData === null || filteredData === void 0 ? void 0 : filteredData.length, page: pagination === null || pagination === void 0 ? void 0 : pagination.page, perPage: pagination === null || pagination === void 0 ? void 0 : pagination.perPage, perPageOptions: paginationDefaultValues }))),
                React.createElement(VirtualizedTable, { EmptyMsg: function () { return (React.createElement("div", { className: "pf-u-text-align-center", id: "no-bootable-volumes-msg" }, t('No bootable volumes found'))); }, rowData: {
                        dataImportCrons: dataImportCrons,
                        preferences: preferences,
                    }, columns: activeColumns, data: filteredData, loaded: loaded && loadedColumns, loadError: error, Row: BootableVolumesRow, unfilteredData: data })))));
};
export default BootableVolumesList;
//# sourceMappingURL=BootableVolumesList.js.map