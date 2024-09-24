import { useCallback, useMemo } from 'react';
import { DataSourceModelRef } from '@kubevirt-ui/kubevirt-api/console';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useKubevirtUserSettingsTableColumns from '@kubevirt-utils/hooks/useKubevirtUserSettings/useKubevirtUserSettingsTableColumns';
import { columnSorting } from '@kubevirt-utils/utils/utils';
import { sortable } from '@patternfly/react-table';
import { getPreferenceReadableOS, getSourcePreferenceLabelValue } from '../../utils/utils';
var useBootableVolumesColumns = function (pagination, data, preferences) {
    var t = useKubevirtTranslation().t;
    var endIndex = pagination.endIndex, startIndex = pagination.startIndex;
    var sorting = useCallback(function (direction, path) { return columnSorting(data, direction, pagination, path); }, [data, pagination]);
    var columns = useMemo(function () { return [
        {
            id: 'name',
            props: { className: 'pf-m-width-20' },
            sort: function (_, direction) { return sorting(direction, 'metadata.name'); },
            title: t('Name'),
            transforms: [sortable],
        },
        {
            id: 'namespace',
            props: { className: 'pf-m-width-20' },
            sort: function (_, direction) { return sorting(direction, 'metadata.namespace'); },
            title: t('Namespace'),
            transforms: [sortable],
        },
        {
            id: 'os',
            props: { className: 'pf-m-width-15' },
            sort: function (sources, direction) {
                var _a;
                return (_a = sources
                    .sort(function (a, b) {
                    var aUpdated = getPreferenceReadableOS(a, preferences);
                    var bUpdated = getPreferenceReadableOS(b, preferences);
                    if (aUpdated && bUpdated) {
                        return direction === 'asc'
                            ? aUpdated.localeCompare(bUpdated)
                            : bUpdated.localeCompare(aUpdated);
                    }
                })) === null || _a === void 0 ? void 0 : _a.slice(startIndex, endIndex);
            },
            title: t('Operating system'),
            transforms: [sortable],
        },
        {
            id: 'description',
            props: { className: 'pf-m-width-15' },
            sort: function (_, direction) { return sorting(direction, 'metadata.annotations.description'); },
            title: t('Description'),
            transforms: [sortable],
        },
        {
            id: 'preference',
            props: { className: 'pf-m-width-15' },
            sort: function (sources, direction) {
                var _a;
                return (_a = sources
                    .sort(function (a, b) {
                    var aUpdated = getSourcePreferenceLabelValue(a);
                    var bUpdated = getSourcePreferenceLabelValue(b);
                    if (aUpdated && bUpdated) {
                        return direction === 'asc'
                            ? aUpdated.localeCompare(bUpdated)
                            : bUpdated.localeCompare(aUpdated);
                    }
                })) === null || _a === void 0 ? void 0 : _a.slice(startIndex, endIndex);
            },
            title: t('Preference'),
            transforms: [sortable],
        },
        {
            id: '',
            props: { className: 'dropdown-kebab-pf pf-v5-c-table__action' },
            title: '',
        },
    ]; }, [t, sorting, startIndex, endIndex, preferences]);
    var _a = useKubevirtUserSettingsTableColumns({
        columnManagementID: DataSourceModelRef,
        columns: columns,
    }), activeColumns = _a[0], loaded = _a[2];
    return [columns, activeColumns, loaded];
};
export default useBootableVolumesColumns;
//# sourceMappingURL=useBootableVolumesColumns.js.map