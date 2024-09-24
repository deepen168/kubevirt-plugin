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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useMemo, useState } from 'react';
import { VirtualMachineInstanceMigrationModelGroupVersionKind, VirtualMachineInstanceModelGroupVersionKind, VirtualMachineModelGroupVersionKind, VirtualMachineModelRef, } from '@kubevirt-ui/kubevirt-api/console';
import ListPageFilter from '@kubevirt-utils/components/ListPageFilter/ListPageFilter';
import { DEFAULT_NAMESPACE } from '@kubevirt-utils/constants/constants';
import { KUBEVIRT_APISERVER_PROXY } from '@kubevirt-utils/hooks/useFeatures/constants';
import { useFeatures } from '@kubevirt-utils/hooks/useFeatures/useFeatures';
import useKubevirtDataPodHealth from '@kubevirt-utils/hooks/useKubevirtDataPod/hooks/useKubevirtDataPodHealth';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useKubevirtWatchResource from '@kubevirt-utils/hooks/useKubevirtWatchResource';
import { paginationDefaultValues, paginationInitialState, } from '@kubevirt-utils/hooks/usePagination/utils/constants';
import useSingleNodeCluster from '@kubevirt-utils/hooks/useSingleNodeCluster';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { ListPageBody, ListPageHeader, useListPageFilter, VirtualizedTable, } from '@openshift-console/dynamic-plugin-sdk';
import { Pagination } from '@patternfly/react-core';
import useQuery from '@virtualmachines/details/tabs/metrics/NetworkCharts/hook/useQuery';
import { OBJECTS_FETCHING_LIMIT } from '@virtualmachines/utils';
import { useVMListFilters } from '../utils';
import VirtualMachineEmptyState from './components/VirtualMachineEmptyState/VirtualMachineEmptyState';
import VirtualMachineRow from './components/VirtualMachineRow/VirtualMachineRow';
import VirtualMachinesCreateButton from './components/VirtualMachinesCreateButton/VirtualMachinesCreateButton';
import useSelectedFilters from './hooks/useSelectedFilters';
import useVirtualMachineColumns from './hooks/useVirtualMachineColumns';
import '@kubevirt-utils/styles/list-managment-group.scss';
import './VirtualMachinesList.scss';
var VirtualMachinesList = function (_a) {
    var kind = _a.kind, namespace = _a.namespace;
    var t = useKubevirtTranslation().t;
    var catalogURL = "/k8s/ns/".concat(namespace || DEFAULT_NAMESPACE, "/catalog");
    var _b = useFeatures(KUBEVIRT_APISERVER_PROXY), featureEnabled = _b.featureEnabled, loadingFeatureProxy = _b.loading;
    var isProxyPodAlive = useKubevirtDataPodHealth();
    var query = useQuery();
    var _c = useKubevirtWatchResource({
        groupVersionKind: VirtualMachineModelGroupVersionKind,
        isList: true,
        limit: OBJECTS_FETCHING_LIMIT,
        namespace: namespace,
        namespaced: true,
    }, {
        labels: 'metadata.labels',
        name: 'metadata.name',
        'rowFilter-instanceType': 'spec.instancetype.name',
        'rowFilter-live-migratable': 'status.conditions',
        'rowFilter-os': 'spec.template.metadata.annotations.vm\\.kubevirt\\.io/os',
        'rowFilter-status': 'status.printableStatus',
        'rowFilter-template': 'metadata.labels.vm\\.kubevirt\\.io/template',
    }), vms = _c[0], vmLoaded = _c[1], loadError = _c[2];
    var _d = useKubevirtWatchResource({
        groupVersionKind: VirtualMachineInstanceModelGroupVersionKind,
        isList: true,
        limit: OBJECTS_FETCHING_LIMIT,
        namespace: namespace,
        namespaced: true,
    }, {
        ip: 'status.interfaces',
        'rowFilter-node': 'status.nodeName',
    }), vmis = _d[0], vmiLoaded = _d[1];
    var _f = useSingleNodeCluster(), isSingleNodeCluster = _f[0], isSingleNodeLoaded = _f[1];
    var _g = useKubevirtWatchResource({
        groupVersionKind: VirtualMachineInstanceMigrationModelGroupVersionKind,
        isList: true,
        limit: OBJECTS_FETCHING_LIMIT,
        namespace: namespace,
        namespaced: true,
    }), vmims = _g[0], vmimsLoaded = _g[1];
    var _h = useVMListFilters(vmis, vms, vmims), filters = _h.filters, searchFilters = _h.searchFilters, vmiMapper = _h.vmiMapper, vmimMapper = _h.vmimMapper;
    var _j = useState(paginationInitialState), pagination = _j[0], setPagination = _j[1];
    var _k = useListPageFilter(vms, __spreadArray(__spreadArray([], filters, true), searchFilters, true)), unfilterData = _k[0], dataFilters = _k[1], onFilterChange = _k[2];
    var selectedFilters = useSelectedFilters(filters, searchFilters);
    var _l = useMemo(function () {
        if (!featureEnabled || isProxyPodAlive === false)
            return [unfilterData, dataFilters];
        var matchedVMS = vms === null || vms === void 0 ? void 0 : vms.filter(function (_a) {
            var _b, _c;
            var _d = _a.metadata, name = _d.name, ns = _d.namespace, _f = _a.status, _g = _f === void 0 ? {} : _f, _h = _g.printableStatus, printableStatus = _h === void 0 ? '' : _h;
            return (((_c = (_b = vmiMapper === null || vmiMapper === void 0 ? void 0 : vmiMapper.mapper) === null || _b === void 0 ? void 0 : _b[ns]) === null || _c === void 0 ? void 0 : _c[name]) ||
                (!query.has('rowFilter-node') && !query.has('ip') && printableStatus !== 'Running'));
        });
        return [matchedVMS, matchedVMS];
    }, [featureEnabled, isProxyPodAlive, unfilterData, dataFilters, vms, vmiMapper === null || vmiMapper === void 0 ? void 0 : vmiMapper.mapper, query]), unfilteredData = _l[0], data = _l[1];
    var onPageChange = function (_a) {
        var endIndex = _a.endIndex, page = _a.page, perPage = _a.perPage, startIndex = _a.startIndex;
        setPagination(function () { return ({
            endIndex: endIndex,
            page: page,
            perPage: perPage,
            startIndex: startIndex,
        }); });
    };
    var _m = useVirtualMachineColumns(namespace, pagination, data), columns = _m[0], activeColumns = _m[1], loadedColumns = _m[2];
    var loaded = vmLoaded &&
        vmiLoaded &&
        vmimsLoaded &&
        isSingleNodeLoaded &&
        !loadingFeatureProxy &&
        loadedColumns;
    var vmsFilteredWithProxy = isProxyPodAlive && selectedFilters.length > 0;
    var noVMs = isEmpty(unfilteredData) && !vmsFilteredWithProxy;
    if (loaded && noVMs) {
        return React.createElement(VirtualMachineEmptyState, { catalogURL: catalogURL, namespace: namespace });
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(ListPageHeader, { title: t('VirtualMachines') },
            React.createElement(VirtualMachinesCreateButton, { namespace: namespace })),
        React.createElement(ListPageBody, null,
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
                        id: VirtualMachineModelRef,
                        selectedColumns: new Set(activeColumns === null || activeColumns === void 0 ? void 0 : activeColumns.map(function (col) { return col === null || col === void 0 ? void 0 : col.id; })),
                        type: t('VirtualMachine'),
                    }, onFilterChange: function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        onFilterChange.apply(void 0, args);
                        setPagination(function (prevPagination) { return (__assign(__assign({}, prevPagination), { endIndex: prevPagination === null || prevPagination === void 0 ? void 0 : prevPagination.perPage, page: 1, startIndex: 0 })); });
                    }, data: unfilteredData, loaded: loaded, rowFilters: filters, searchFilters: searchFilters }),
                !isEmpty(dataFilters) && (React.createElement(Pagination, { onPerPageSelect: function (_e, perPage, page, startIndex, endIndex) {
                        return onPageChange({ endIndex: endIndex, page: page, perPage: perPage, startIndex: startIndex });
                    }, onSetPage: function (_e, page, perPage, startIndex, endIndex) {
                        return onPageChange({ endIndex: endIndex, page: page, perPage: perPage, startIndex: startIndex });
                    }, className: "list-managment-group__pagination", isLastFullPageShown: true, itemCount: data === null || data === void 0 ? void 0 : data.length, page: pagination === null || pagination === void 0 ? void 0 : pagination.page, perPage: pagination === null || pagination === void 0 ? void 0 : pagination.perPage, perPageOptions: paginationDefaultValues }))),
            React.createElement(VirtualizedTable, { EmptyMsg: function () { return (React.createElement("div", { className: "pf-u-text-align-center" }, t('No VirtualMachines found'))); }, rowData: {
                    getVmi: function (ns, name) { var _a, _b; return (_b = (_a = vmiMapper === null || vmiMapper === void 0 ? void 0 : vmiMapper.mapper) === null || _a === void 0 ? void 0 : _a[ns]) === null || _b === void 0 ? void 0 : _b[name]; },
                    getVmim: function (ns, name) { var _a; return (_a = vmimMapper === null || vmimMapper === void 0 ? void 0 : vmimMapper[ns]) === null || _a === void 0 ? void 0 : _a[name]; },
                    isSingleNodeCluster: isSingleNodeCluster,
                    kind: kind,
                }, columns: activeColumns, data: data, loaded: loaded, loadError: loadError, Row: VirtualMachineRow, unfilteredData: unfilteredData }))));
};
export default VirtualMachinesList;
//# sourceMappingURL=VirtualMachinesList.js.map