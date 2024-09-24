var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useCallback, useMemo } from 'react';
import { VirtualMachinePreferenceModelRef } from '@kubevirt-ui/kubevirt-api/console';
import { ALL_NAMESPACES_SESSION_KEY } from '@kubevirt-utils/hooks/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useKubevirtUserSettingsTableColumns from '@kubevirt-utils/hooks/useKubevirtUserSettings/useKubevirtUserSettingsTableColumns';
import { columnSorting } from '@kubevirt-utils/utils/utils';
import { useActiveNamespace } from '@openshift-console/dynamic-plugin-sdk';
import { sortable } from '@patternfly/react-table';
var useUserPreferenceListColumns = function (pagination, data) {
    var t = useKubevirtTranslation().t;
    var activeNamespace = useActiveNamespace()[0];
    var sorting = useCallback(function (direction, path) { return columnSorting(data, direction, pagination, path); }, [data, pagination]);
    var columns = useMemo(function () { return __spreadArray(__spreadArray([
        {
            id: 'name',
            sort: function (_, direction) { return sorting(direction, 'metadata.name'); },
            title: t('Name'),
            transforms: [sortable],
        }
    ], (activeNamespace === ALL_NAMESPACES_SESSION_KEY
        ? [
            {
                id: 'namespace',
                sort: function (_, direction) { return sorting(direction, 'metadata.namespace'); },
                title: t('Namespace'),
                transforms: [sortable],
            },
        ]
        : []), true), [
        {
            id: 'vendor',
            title: t('Vendor'),
        },
        {
            id: '',
            props: { className: 'dropdown-kebab-pf pf-v5-c-table__action' },
            title: '',
        },
    ], false); }, [activeNamespace, sorting, t]);
    var _a = useKubevirtUserSettingsTableColumns({
        columnManagementID: VirtualMachinePreferenceModelRef,
        columns: columns,
    }), activeColumns = _a[0], loadedColumns = _a[2];
    return [columns, activeColumns, loadedColumns];
};
export default useUserPreferenceListColumns;
//# sourceMappingURL=useUserPreferenceListColumns.js.map