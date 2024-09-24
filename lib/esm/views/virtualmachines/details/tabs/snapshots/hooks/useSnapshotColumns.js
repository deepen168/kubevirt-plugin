import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { sortable } from '@patternfly/react-table';
var useSnapshotColumns = function () {
    var t = useKubevirtTranslation().t;
    var columns = [
        {
            id: 'name',
            sort: 'metadata.name',
            title: t('Name'),
            transforms: [sortable],
        },
        {
            id: 'created',
            sort: 'metadata.creationTimestamp',
            title: t('Created'),
            transforms: [sortable],
        },
        {
            id: 'status',
            sort: 'status.readyToUse',
            title: t('Status'),
            transforms: [sortable],
        },
        {
            id: 'last-restored',
            title: t('Last restored'),
        },
        {
            id: 'indications',
            title: t('Indications'),
        },
        {
            id: '',
            props: { className: 'dropdown-kebab-pf pf-v5-c-table__action' },
            title: '',
        },
    ];
    return columns;
};
export default useSnapshotColumns;
//# sourceMappingURL=useSnapshotColumns.js.map