import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { useActiveColumns, } from '@openshift-console/dynamic-plugin-sdk';
import { sortable } from '@patternfly/react-table';
var useActiveUsersColumns = function () {
    var t = useKubevirtTranslation().t;
    var columns = [
        {
            id: 'userName',
            sort: 'metadata.name',
            title: t('User Name'),
            transforms: [sortable],
        },
        {
            id: 'domain',
            sort: 'domain',
            title: t('Domain'),
            transforms: [sortable],
        },
        {
            id: 'loginTime',
            sort: 'loginTime',
            title: t('Time of login'),
            transforms: [sortable],
        },
        {
            id: 'elapsedTime',
            title: t('Elapsed time since login'),
        },
    ];
    var activeColumns = useActiveColumns({
        columnManagementID: '',
        columns: columns,
        showNamespaceOverride: false,
    })[0];
    return activeColumns;
};
export default useActiveUsersColumns;
//# sourceMappingURL=useActiveUsersColumns.js.map