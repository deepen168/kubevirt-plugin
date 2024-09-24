import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useKubevirtUserSettingsTableColumns from '@kubevirt-utils/hooks/useKubevirtUserSettings/useKubevirtUserSettingsTableColumns';
import useDiagnosticSort from './useDiagnosticSort';
var useDiagnosticDataVolumeStatusTableColumns = function () {
    var t = useKubevirtTranslation().t;
    var _a = useDiagnosticSort(), getSorting = _a.getSorting, sort = _a.sort;
    var columns = [
        {
            cell: { sort: function (columnIndex) { return getSorting('name', columnIndex); } },
            id: 'name',
            title: t('Name'),
        },
        {
            cell: { sort: function (columnIndex) { return getSorting('phase', columnIndex); } },
            id: 'phase',
            title: t('Phase'),
        },
        {
            cell: { sort: function (columnIndex) { return getSorting('progress', columnIndex); } },
            id: 'progress',
            title: t('Progress'),
        },
    ];
    var activeColumns = useKubevirtUserSettingsTableColumns({
        columnManagementID: 'diagnostic-tab-data-volume',
        columns: columns,
    })[0];
    return { activeColumns: activeColumns, columns: columns, sorting: sort };
};
export default useDiagnosticDataVolumeStatusTableColumns;
//# sourceMappingURL=useDiagnosticDataVolumeStatusTableColumns.js.map