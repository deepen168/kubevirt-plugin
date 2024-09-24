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
import { useNavigate } from 'react-router-dom-v5-compat';
import { DataSourceModelRef } from '@kubevirt-ui/kubevirt-api/console';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import { DEFAULT_NAMESPACE } from '@kubevirt-utils/constants/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ListPageBody, ListPageCreateDropdown, ListPageFilter, ListPageHeader, useK8sWatchResource, useListPageFilter, VirtualizedTable, } from '@openshift-console/dynamic-plugin-sdk';
import { CreateDataSourceModal } from './CreateDataSourceModal/CreateDataSourceModal';
import { useDataSourcesColumns } from './hooks/useDataSourcesColumns';
import { getDataImportCronFilter } from './DataSourcesListFilters';
import { DataSourcesListRow } from './DataSourcesListRow';
import './DataSourcesList.scss';
var DataSourcesList = function (_a) {
    var kind = _a.kind, namespace = _a.namespace;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var navigate = useNavigate();
    var _b = useK8sWatchResource({
        isList: true,
        kind: kind,
        namespace: namespace,
        namespaced: true,
    }), dataSources = _b[0], loaded = _b[1], loadError = _b[2];
    var _c = useDataSourcesColumns(namespace), columns = _c[0], activeColumns = _c[1];
    var filters = getDataImportCronFilter();
    var _d = useListPageFilter(dataSources, filters), unfilteredData = _d[0], data = _d[1], onFilterChange = _d[2];
    var createItems = {
        form: t('With form'),
        yaml: t('With YAML'),
    };
    var onCreate = function (type) {
        return type === 'form'
            ? createModal(function (props) { return React.createElement(CreateDataSourceModal, __assign({ namespace: namespace }, props)); })
            : navigate("/k8s/ns/".concat(namespace || DEFAULT_NAMESPACE, "/").concat(DataSourceModelRef, "/~new"));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(ListPageHeader, { title: t('DataSources') },
            React.createElement(ListPageCreateDropdown, { createAccessReview: { groupVersionKind: DataSourceModelRef, namespace: namespace }, items: createItems, onClick: onCreate }, t('Create DataSource'))),
        React.createElement(ListPageBody, null,
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
                }, data: unfilteredData, loaded: loaded, onFilterChange: onFilterChange, rowFilters: filters }),
            React.createElement(VirtualizedTable, { columns: activeColumns, data: data, loaded: loaded, loadError: loadError, Row: DataSourcesListRow, unfilteredData: unfilteredData }))));
};
export default DataSourcesList;
//# sourceMappingURL=DataSourcesList.js.map