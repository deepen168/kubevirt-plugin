import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useKubevirtUserSettingsTableColumns from '@kubevirt-utils/hooks/useKubevirtUserSettings/useKubevirtUserSettingsTableColumns';
import useDiagnosticSort from './useDiagnosticSort';
var useDiagnosticVolumeStatusTableColumns = function () {
    var t = useKubevirtTranslation().t;
    var _a = useDiagnosticSort(), getSorting = _a.getSorting, sort = _a.sort;
    var columns = [
        {
            cell: { sort: function (columnIndex) { return getSorting('name', columnIndex); } },
            id: 'name',
            title: t('Name'),
        },
        {
            cell: { sort: function (columnIndex) { return getSorting('enabled', columnIndex); } },
            id: 'enabled',
            title: t('Enabled'),
        },
        {
            cell: { sort: function (columnIndex) { return getSorting('reason', columnIndex); } },
            id: 'reason',
            title: t('Reason'),
        },
    ];
    var activeColumns = useKubevirtUserSettingsTableColumns({
        columnManagementID: 'diagnostic-tab-volume',
        columns: columns,
    })[0];
    return { activeColumns: activeColumns, columns: columns, sorting: sort };
};
export default useDiagnosticVolumeStatusTableColumns;
//# sourceMappingURL=useDiagnosticVolumeStatusTableColumns.js.map