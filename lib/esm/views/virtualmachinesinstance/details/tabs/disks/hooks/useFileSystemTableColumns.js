import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { sortable } from '@patternfly/react-table';
var useFileSystemTableColumns = function () {
    var t = useKubevirtTranslation().t;
    var columns = [
        {
            id: 'diskName',
            sort: 'diskName',
            title: t('Name'),
            transforms: [sortable],
        },
        {
            id: 'fileSystemType',
            sort: 'fileSystemType',
            title: t('File system type'),
            transforms: [sortable],
        },
        {
            id: 'mountPoint',
            sort: 'mountPoint',
            title: t('Mount point'),
            transforms: [sortable],
        },
        {
            id: 'totalBytes',
            sort: 'totalBytes',
            title: t('Total bytes'),
            transforms: [sortable],
        },
        {
            id: 'usedBytes',
            sort: 'usedBytes',
            title: t('Used bytes'),
            transforms: [sortable],
        },
    ];
    return columns;
};
export default useFileSystemTableColumns;
//# sourceMappingURL=useFileSystemTableColumns.js.map