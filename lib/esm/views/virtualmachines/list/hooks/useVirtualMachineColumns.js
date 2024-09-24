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
import { NodeModel, VirtualMachineModelRef } from '@kubevirt-ui/kubevirt-api/console';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useKubevirtUserSettingsTableColumns from '@kubevirt-utils/hooks/useKubevirtUserSettings/useKubevirtUserSettingsTableColumns';
import { columnSorting } from '@kubevirt-utils/utils/utils';
import { useAccessReview, } from '@openshift-console/dynamic-plugin-sdk';
import { sortable } from '@patternfly/react-table';
var useVirtualMachineColumns = function (namespace, pagination, data) {
    var t = useKubevirtTranslation().t;
    var canGetNode = useAccessReview({
        namespace: namespace,
        resource: NodeModel.plural,
        verb: 'get',
    })[0];
    var sorting = useCallback(function (direction, path) { return columnSorting(data, direction, pagination, path); }, [data, pagination]);
    var columns = useMemo(function () { return __spreadArray(__spreadArray(__spreadArray(__spreadArray([
        {
            id: 'name',
            props: { className: 'pf-m-width-15' },
            sort: function (_, direction) { return sorting(direction, 'metadata.name'); },
            title: t('Name'),
            transforms: [sortable],
        }
    ], (!namespace
        ? [
            {
                id: 'namespace',
                props: { className: 'pf-m-width-10' },
                sort: function (_, direction) { return sorting(direction, 'metadata.namespace'); },
                title: t('Namespace'),
                transforms: [sortable],
            },
        ]
        : []), true), [
        {
            id: 'status',
            props: { className: 'pf-m-width-15' },
            sort: function (_, direction) { return sorting(direction, 'status.printableStatus'); },
            title: t('Status'),
            transforms: [sortable],
        },
        {
            id: 'conditions',
            props: { className: 'pf-m-width-20' },
            title: t('Conditions'),
        }
    ], false), (canGetNode
        ? [
            {
                id: 'node',
                props: { className: 'pf-m-width-15' },
                title: t('Node'),
            },
        ]
        : []), true), [
        {
            additional: true,
            id: 'created',
            props: { className: 'pf-m-width-15' },
            sort: function (_, direction) { return sorting(direction, 'metadata.creationTimestamp'); },
            title: t('Created'),
            transforms: [sortable],
        },
        {
            id: 'ip-address',
            props: { className: 'pf-m-width-10' },
            title: t('IP address'),
        },
        {
            id: '',
            props: { className: 'dropdown-kebab-pf pf-v5-c-table__action' },
            title: '',
        },
    ], false); }, [canGetNode, namespace, sorting, t]);
    var _a = useKubevirtUserSettingsTableColumns({
        columnManagementID: VirtualMachineModelRef,
        columns: canGetNode ? columns : columns.filter(function (column) { return column.id !== 'node'; }),
    }), activeColumns = _a[0], loaded = _a[2];
    return [columns, activeColumns, loaded];
};
export default useVirtualMachineColumns;
//# sourceMappingURL=useVirtualMachineColumns.js.map