import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { sortable } from '@patternfly/react-table';
var useDisksTableColumns = function () {
    var t = useKubevirtTranslation().t;
    var columns = [
        {
            id: 'name',
            sort: 'name',
            title: t('Name'),
            transforms: [sortable],
        },
        {
            id: 'source',
            sort: 'source',
            title: t('Source'),
            transforms: [sortable],
        },
        {
            id: 'size',
            sort: 'size',
            title: t('Size'),
            transforms: [sortable],
        },
        {
            id: 'drive',
            sort: 'drive',
            title: t('Drive'),
            transforms: [sortable],
        },
        {
            id: 'interface',
            sort: 'interface',
            title: t('Interface'),
            transforms: [sortable],
        },
        {
            id: 'storageClass',
            sort: 'storageClass',
            title: t('Storage Class'),
            transforms: [sortable],
        },
    ];
    return columns;
};
export default useDisksTableColumns;
//# sourceMappingURL=useDisksTableColumns.js.map