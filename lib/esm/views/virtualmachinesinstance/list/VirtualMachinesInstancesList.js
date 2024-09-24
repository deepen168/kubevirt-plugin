import * as React from 'react';
import { DEFAULT_NAMESPACE } from '@kubevirt-utils/constants/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ListPageBody, ListPageFilter, ListPageHeader, useK8sWatchResource, useListPageFilter, VirtualizedTable, } from '@openshift-console/dynamic-plugin-sdk';
import VirtualMachineInstanceEmptyState from './components/VirtualMachineInstanceEmptyState/VirtualMachineInstanceEmptyState';
import useVirtualMachinesInstancesColumns from './hooks/useVirtualMachinesInstancesColumns';
import { filters } from './utils';
import VirtualMachinesInstancesRow from './VirtualMachinesInstancesRow';
var VirtualMachinesInstancesList = function (_a) {
    var kind = _a.kind, namespace = _a.namespace;
    var t = useKubevirtTranslation().t;
    var catalogURL = "/k8s/ns/".concat(namespace || DEFAULT_NAMESPACE, "/catalog");
    var _b = useK8sWatchResource({
        isList: true,
        kind: kind,
        namespace: namespace,
    }), vmis = _b[0], loaded = _b[1], loadError = _b[2];
    var _c = useListPageFilter(vmis, filters), data = _c[0], filteredData = _c[1], onFilterChange = _c[2];
    var columns = useVirtualMachinesInstancesColumns();
    return (React.createElement(React.Fragment, null,
        React.createElement(ListPageHeader, { title: t('VirtualMachineInstances') }),
        React.createElement(ListPageBody, null,
            React.createElement(ListPageFilter, { data: data, loaded: loaded, onFilterChange: onFilterChange, rowFilters: filters }),
            React.createElement(VirtualizedTable, { columns: columns, data: filteredData, EmptyMsg: function () { return React.createElement(VirtualMachineInstanceEmptyState, { catalogURL: catalogURL }); }, loaded: loaded, loadError: loadError, Row: VirtualMachinesInstancesRow, rowData: { kind: kind }, unfilteredData: data }))));
};
export default VirtualMachinesInstancesList;
//# sourceMappingURL=VirtualMachinesInstancesList.js.map