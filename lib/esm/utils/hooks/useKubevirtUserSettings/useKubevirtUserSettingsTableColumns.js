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
import { isEmpty } from '@kubevirt-utils/utils/utils';
import useKubevirtUserSettings from './useKubevirtUserSettings';
var useKubevirtUserSettingsTableColumns = function (_a) {
    var columnManagementID = _a.columnManagementID, columns = _a.columns;
    var _b = useKubevirtUserSettings('columns'), userColumns = _b[0], setUserColumns = _b[1], loadedColumns = _b[2], error = _b[3];
    var setActiveColumns = function (columnIds) {
        var _a;
        setUserColumns === null || setUserColumns === void 0 ? void 0 : setUserColumns(__assign(__assign({}, userColumns), (_a = {}, _a[columnManagementID] = columnIds, _a)));
    };
    var activeColumns = columns === null || columns === void 0 ? void 0 : columns.filter(function (col) { var _a; return (_a = userColumns === null || userColumns === void 0 ? void 0 : userColumns[columnManagementID]) === null || _a === void 0 ? void 0 : _a.includes(col === null || col === void 0 ? void 0 : col.id); });
    return [
        !isEmpty(activeColumns) ? activeColumns : columns,
        setActiveColumns,
        loadedColumns,
        error,
    ];
};
export default useKubevirtUserSettingsTableColumns;
//# sourceMappingURL=useKubevirtUserSettingsTableColumns.js.map