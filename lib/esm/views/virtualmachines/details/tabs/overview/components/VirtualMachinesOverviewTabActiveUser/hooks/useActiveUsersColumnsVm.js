import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { sortable } from '@patternfly/react-table';
var useActiveUsersColumnsVm = function () {
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
    return columns;
};
export default useActiveUsersColumnsVm;
//# sourceMappingURL=useActiveUsersColumnsVm.js.map