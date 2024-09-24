var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { NodeModel, VirtualMachineInstanceMigrationModelRef, } from '@kubevirt-ui/kubevirt-api/console';
import { ALL_NAMESPACES_SESSION_KEY } from '@kubevirt-utils/hooks/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useKubevirtUserSettingsTableColumns from '@kubevirt-utils/hooks/useKubevirtUserSettings/useKubevirtUserSettingsTableColumns';
import { useAccessReview, useActiveNamespace, } from '@openshift-console/dynamic-plugin-sdk';
import { sortable } from '@patternfly/react-table';
var useVirtualMachineInstanceMigrationsColumns = function () {
    var t = useKubevirtTranslation().t;
    var activeNamespace = useActiveNamespace()[0];
    var canGetNode = useAccessReview({
        resource: NodeModel.plural,
        verb: 'get',
    })[0];
    var columns = __spreadArray(__spreadArray([
        {
            id: 'vm-name',
            sort: 'vmim.spec.vmiName',
            title: t('VirtualMachine name'),
            transforms: [sortable],
        }
    ], (activeNamespace === ALL_NAMESPACES_SESSION_KEY
        ? [
            {
                id: 'namespace',
                props: { className: 'pf-m-width-10' },
                title: t('Namespace'),
                transforms: [sortable],
            },
        ]
        : []), true), [
        {
            id: 'status',
            sort: 'vmim.status.phase',
            title: t('Status'),
            transforms: [sortable],
        },
        {
            id: 'source',
            sort: 'vmiObj.status.migrationState.sourceNode',
            title: t('Source'),
            transforms: [sortable],
        },
        {
            id: 'target',
            sort: 'vmiObj.status.migrationState.targetNode',
            title: t('Target'),
            transforms: [sortable],
        },
        {
            id: 'migration-policy',
            sort: 'vmiObj.status.migrationState.migrationPolicyName',
            title: t('MigrationPolicy'),
            transforms: [sortable],
        },
        {
            id: 'vmim-name',
            sort: 'vmim.metadata.name',
            title: t('VirtualMachineInstanceMigration name'),
            transforms: [sortable],
        },
        {
            additional: true,
            id: 'created',
            sort: 'vmim.metadata.creationTimestamp',
            title: t('Created'),
            transforms: [sortable],
        },
        {
            id: '',
            props: { className: 'dropdown-kebab-pf pf-v5-c-table__action' },
            title: '',
        },
    ], false);
    var activeColumns = useKubevirtUserSettingsTableColumns({
        columnManagementID: VirtualMachineInstanceMigrationModelRef,
        columns: canGetNode
            ? columns
            : columns.filter(function (column) { return column.id !== 'source' && column.id !== 'target'; }),
    })[0];
    return [columns, activeColumns];
};
export default useVirtualMachineInstanceMigrationsColumns;
//# sourceMappingURL=useVirtualMachineInstanceMigrationsColumns.js.map