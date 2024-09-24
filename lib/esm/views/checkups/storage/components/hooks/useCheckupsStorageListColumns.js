var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { ALL_NAMESPACES_SESSION_KEY } from '@kubevirt-utils/hooks/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useKubevirtUserSettingsTableColumns from '@kubevirt-utils/hooks/useKubevirtUserSettings/useKubevirtUserSettingsTableColumns';
import { useActiveNamespace } from '@openshift-console/dynamic-plugin-sdk';
import { sortable } from '@patternfly/react-table';
import { columnsSorting, STATUS_COMPILATION_TIME_STAMP, STATUS_FAILURE_REASON, STATUS_START_TIME_STAMP, STATUS_SUCCEEDED, } from './../../../utils/utils';
var useCheckupsStorageListColumns = function () {
    var namespace = useActiveNamespace()[0];
    var t = useKubevirtTranslation().t;
    var columns = __spreadArray(__spreadArray([
        {
            id: 'name',
            sort: 'metadata.name',
            title: t('Name'),
            transforms: [sortable],
        }
    ], (namespace === ALL_NAMESPACES_SESSION_KEY
        ? [
            {
                id: 'namespace',
                sort: 'metadata.namespace',
                title: t('Namespace'),
                transforms: [sortable],
            },
        ]
        : []), true), [
        {
            id: 'status',
            sort: function (data, sortDirection) {
                return columnsSorting(data, sortDirection, STATUS_SUCCEEDED);
            },
            title: t('Status'),
            transforms: [sortable],
        },
        {
            id: 'failure',
            sort: function (data, sortDirection) {
                return columnsSorting(data, sortDirection, STATUS_FAILURE_REASON);
            },
            title: t('Failure reason'),
            transforms: [sortable],
        },
        {
            id: 'start-time',
            sort: function (data, sortDirection) {
                return columnsSorting(data, sortDirection, STATUS_START_TIME_STAMP);
            },
            title: t('Start time'),
            transforms: [sortable],
        },
        {
            id: 'complete-time',
            sort: function (data, sortDirection) {
                return columnsSorting(data, sortDirection, STATUS_COMPILATION_TIME_STAMP);
            },
            title: t('Completion time'),
            transforms: [sortable],
        },
        {
            id: '',
            props: { className: 'dropdown-kebab-pf pf-v5-c-table__action' },
            title: '',
        },
    ], false);
    var _a = useKubevirtUserSettingsTableColumns({
        columnManagementID: 'checkups-storage',
        columns: columns,
    }), activeColumns = _a[0], loadedColumns = _a[2];
    return [columns, activeColumns, loadedColumns];
};
export default useCheckupsStorageListColumns;
//# sourceMappingURL=useCheckupsStorageListColumns.js.map