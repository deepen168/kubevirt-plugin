import { useMemo } from 'react';
import { MigrationPolicyModelRef } from '@kubevirt-ui/kubevirt-api/console';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useKubevirtUserSettingsTableColumns from '@kubevirt-utils/hooks/useKubevirtUserSettings/useKubevirtUserSettingsTableColumns';
import { sortable } from '@patternfly/react-table';
var useMigrationPoliciesListColumns = function () {
    var t = useKubevirtTranslation().t;
    var columns = useMemo(function () { return [
        {
            id: 'name',
            props: { className: 'pf-m-width-15' },
            sort: 'metadata.name',
            title: t('Name'),
            transforms: [sortable],
        },
        {
            id: 'bandwidth',
            props: { className: 'pf-m-width-10' },
            sort: 'spec.bandwidthPerMigration',
            title: t('Bandwidth'),
            transforms: [sortable],
        },
        {
            id: 'auto-converge',
            props: { className: 'pf-m-width-10' },
            sort: 'spec.allowAutoConverge',
            title: t('Auto converge'),
            transforms: [sortable],
        },
        {
            id: 'post-copy',
            props: { className: 'pf-m-width-10' },
            sort: 'spec.allowPostCopy',
            title: t('Post copy'),
            transforms: [sortable],
        },
        {
            id: 'completion-timeout',
            props: { className: 'pf-m-width-10' },
            sort: 'spec.completionTimeoutPerGiB',
            title: t('Completion timeout'),
            transforms: [sortable],
        },
        {
            additional: true,
            id: 'project-labels',
            title: t('Project labels'),
        },
        {
            additional: true,
            id: 'vm-labels',
            title: t('VirtualMachineInstance labels'),
        },
        {
            id: '',
            props: { className: 'dropdown-kebab-pf pf-v5-c-table__action' },
            title: '',
        },
    ]; }, [t]);
    var _a = useKubevirtUserSettingsTableColumns({
        columnManagementID: MigrationPolicyModelRef,
        columns: columns,
    }), activeColumns = _a[0], loadedColumns = _a[2];
    return [columns, activeColumns, loadedColumns];
};
export default useMigrationPoliciesListColumns;
//# sourceMappingURL=useMigrationPoliciesListColumns.js.map