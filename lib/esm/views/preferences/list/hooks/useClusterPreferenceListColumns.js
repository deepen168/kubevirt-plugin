import { useCallback, useMemo } from 'react';
import { VirtualMachineClusterPreferenceModelRef } from '@kubevirt-ui/kubevirt-api/console';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useKubevirtUserSettingsTableColumns from '@kubevirt-utils/hooks/useKubevirtUserSettings/useKubevirtUserSettingsTableColumns';
import { columnSorting } from '@kubevirt-utils/utils/utils';
import { sortable } from '@patternfly/react-table';
var useClusterPreferenceListColumns = function (pagination, data) {
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
            id: 'vendor',
            title: t('Vendor'),
        },
        {
            id: '',
            props: { className: 'dropdown-kebab-pf pf-v5-c-table__action' },
            title: '',
        },
    ]; }, [sorting, t]);
    var _a = useKubevirtUserSettingsTableColumns({
        columnManagementID: VirtualMachineClusterPreferenceModelRef,
        columns: columns,
    }), activeColumns = _a[0], loadedColumns = _a[2];
    return [columns, activeColumns, loadedColumns];
};
export default useClusterPreferenceListColumns;
//# sourceMappingURL=useClusterPreferenceListColumns.js.map