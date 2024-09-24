var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { ALL_PROJECTS } from '@kubevirt-utils/hooks/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useKubevirtUserSettingsTableColumns from '@kubevirt-utils/hooks/useKubevirtUserSettings/useKubevirtUserSettingsTableColumns';
var useBootVolumeColumns = function (volumeListNamespace, isModal) {
    var t = useKubevirtTranslation().t;
    var columns = __spreadArray(__spreadArray([
        {
            id: 'favorites',
            title: '',
        },
        {
            id: 'name',
            title: t('Volume name'),
        }
    ], (volumeListNamespace === ALL_PROJECTS
        ? [
            {
                id: 'namespace',
                title: t('Namespace'),
            },
        ]
        : []), true), [
        {
            id: 'operating-system',
            title: t('Operating system'),
        },
        {
            id: 'storage-class',
            title: t('Storage class'),
        },
        {
            id: 'size',
            title: t('Size'),
        },
        {
            id: 'description',
            title: t('Description'),
        },
    ], false);
    var _a = useKubevirtUserSettingsTableColumns({
        columnManagementID: 'BootableVolumeCatalog',
        columns: columns,
    }), activeColumns = _a[0], loadedColumns = _a[2];
    var columnLayout = {
        columns: columns === null || columns === void 0 ? void 0 : columns.map(function (_a) {
            var additional = _a.additional, id = _a.id, title = _a.title;
            return ({
                additional: additional,
                id: id,
                title: title,
            });
        }),
        id: 'BootableVolumeCatalog',
        selectedColumns: new Set(activeColumns === null || activeColumns === void 0 ? void 0 : activeColumns.map(function (col) { return col === null || col === void 0 ? void 0 : col.id; })),
        showNamespaceOverride: true,
        type: t('Bootable volumes'),
    };
    return { activeColumns: activeColumns, columnLayout: isModal ? null : columnLayout, columns: columns, loadedColumns: loadedColumns };
};
export default useBootVolumeColumns;
//# sourceMappingURL=useBootVolumeColumns.js.map