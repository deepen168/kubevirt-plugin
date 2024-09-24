import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { sortable } from '@patternfly/react-table';
var useConditionsTableColumns = function () {
    var t = useKubevirtTranslation().t;
    var columns = [
        {
            id: 'type',
            sort: 'type',
            title: t('Type'),
            transforms: [sortable],
        },
        {
            id: 'status',
            sort: 'status',
            title: t('Status'),
            transforms: [sortable],
        },
        {
            id: 'updated',
            sort: 'lastTransitionTime',
            title: t('Updated'),
            transforms: [sortable],
        },
        {
            id: 'reason',
            sort: 'interface',
            title: t('Reason'),
            transforms: [sortable],
        },
        {
            id: 'message',
            title: t('Message'),
        },
    ];
    return columns;
};
export default useConditionsTableColumns;
//# sourceMappingURL=useConditionsTableColumns.js.map