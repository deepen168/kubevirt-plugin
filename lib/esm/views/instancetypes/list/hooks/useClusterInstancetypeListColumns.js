import { useCallback, useMemo } from 'react';
import { VirtualMachineClusterInstancetypeModelRef } from '@kubevirt-ui/kubevirt-api/console';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useKubevirtUserSettingsTableColumns from '@kubevirt-utils/hooks/useKubevirtUserSettings/useKubevirtUserSettingsTableColumns';
import { columnSorting } from '@kubevirt-utils/utils/utils';
import { sortable } from '@patternfly/react-table';
var useClusterInstancetypeListColumns = function (pagination, data) {
    var t = useKubevirtTranslation().t;
    var sorting = useCallback(function (direction, path) { return columnSorting(data, direction, pagination, path); }, [data, pagination]);
    var columns = useMemo(function () { return [
        {
            id: 'name',
            sort: function (_, direction) { return sorting(direction, 'metadata.name'); },
            title: t('Name'),
            transforms: [sortable],
        },
        {
            id: 'cpu',
            sort: function (_, direction) { return sorting(direction, 'spec.cpu.guest'); },
            title: t('CPU'),
            transforms: [sortable],
        },
        {
            id: 'memory',
            sort: function (_, direction) { return sorting(direction, 'spec.memory.guest'); },
            title: t('Memory'),
            transforms: [sortable],
        },
        {
            id: 'vendor',
            title: t('Vendor'),
        },
        {
            id: '',
            props: { className: 'dropdown-kebab-pf pf-v5-c-table__action' },
            title: '',
        },
    ]; }, [t, sorting]);
    var _a = useKubevirtUserSettingsTableColumns({
        columnManagementID: VirtualMachineClusterInstancetypeModelRef,
        columns: columns,
    }), activeColumns = _a[0], loadedColumns = _a[2];
    return [columns, activeColumns, loadedColumns];
};
export default useClusterInstancetypeListColumns;
//# sourceMappingURL=useClusterInstancetypeListColumns.js.map