import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useKubevirtUserSettingsTableColumns from '@kubevirt-utils/hooks/useKubevirtUserSettings/useKubevirtUserSettingsTableColumns';
import useDiagnosticSort from './useDiagnosticSort';
var useDiagnosticConditionsTableColumns = function () {
    var t = useKubevirtTranslation().t;
    var _a = useDiagnosticSort(), getSorting = _a.getSorting, sort = _a.sort;
    var columns = [
        {
            cell: { sort: function (columnIndex) { return getSorting('type', columnIndex); } },
            id: 'type',
            title: t('Type'),
        },
        {
            cell: { sort: function (columnIndex) { return getSorting('status', columnIndex); } },
            id: 'status',
            title: t('Status'),
        },
        {
            cell: { sort: function (columnIndex) { return getSorting('reason', columnIndex); } },
            id: 'reason',
            title: t('Reason'),
        },
        {
            cell: { sort: function (columnIndex) { return getSorting('message', columnIndex); } },
            id: 'message',
            title: t('Message'),
        },
    ];
    var _b = useKubevirtUserSettingsTableColumns({
        columnManagementID: 'diagnostic-tab-status',
        columns: columns,
    }), activeColumns = _b[0], loadedColumns = _b[2];
    return [columns, activeColumns, sort, loadedColumns];
};
export default useDiagnosticConditionsTableColumns;
//# sourceMappingURL=useDiagnosticConditionsTableColumns.js.map