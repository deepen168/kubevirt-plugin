var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { VirtualMachineInstanceMigrationModelGroupVersionKind, VirtualMachineInstanceModelGroupVersionKind, } from '@kubevirt-ui/kubevirt-api/console';
import { ALL_NAMESPACES_SESSION_KEY } from '@kubevirt-utils/hooks/constants';
import useMigrationPolicies from '@kubevirt-utils/hooks/useMigrationPolicies';
import { useK8sWatchResource, useListPageFilter, } from '@openshift-console/dynamic-plugin-sdk';
import { useActiveNamespace } from '@openshift-console/dynamic-plugin-sdk';
import useHCMigrations from '../components/MigrationsLimitionsPopover/hooks/useHCMigrations';
import { getSourceNodeFilter, getStatusFilter, getTargetNodeFilter, } from '../components/MigrationsTable/utils/filters';
import { getMigrationsTableData, } from '../components/MigrationsTable/utils/utils';
var useMigrationCardDataAndFilters = function (duration) {
    var migrationsDefaultConfigurations = useHCMigrations();
    var activeNamespace = useActiveNamespace()[0];
    var namespace = activeNamespace !== ALL_NAMESPACES_SESSION_KEY ? activeNamespace : null;
    var _a = useK8sWatchResource({
        groupVersionKind: VirtualMachineInstanceMigrationModelGroupVersionKind,
        isList: true,
        namespace: namespace,
    }), vmims = _a[0], vmimsLoaded = _a[1], vmimsErrors = _a[2];
    var _b = useK8sWatchResource({
        groupVersionKind: VirtualMachineInstanceModelGroupVersionKind,
        isList: true,
        namespace: namespace,
    }), vmis = _b[0], vmisLoaded = _b[1], vmisErrors = _b[2];
    var mps = useMigrationPolicies()[0];
    var migrationsData = getMigrationsTableData(vmims, vmis, mps, migrationsDefaultConfigurations, duration);
    var filters = __spreadArray(__spreadArray(__spreadArray([], getStatusFilter(), true), getSourceNodeFilter(vmis), true), getTargetNodeFilter(vmis), true);
    var _c = useListPageFilter(migrationsData, filters), unfilteredData = _c[0], data = _c[1], onFilterChange = _c[2];
    return {
        filters: filters,
        loaded: vmimsLoaded && vmisLoaded,
        loadErrors: vmimsErrors || vmisErrors,
        migrationsTableFilteredData: data,
        migrationsTableUnfilteredData: unfilteredData,
        onFilterChange: onFilterChange,
        vmims: vmims,
    };
};
export default useMigrationCardDataAndFilters;
//# sourceMappingURL=useMigrationCardData.js.map