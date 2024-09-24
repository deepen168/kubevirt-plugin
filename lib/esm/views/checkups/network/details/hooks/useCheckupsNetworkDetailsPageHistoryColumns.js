import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { sortable } from '@patternfly/react-table';
var useCheckupsNetworkDetailsPageHistoryColumns = function () {
    var t = useKubevirtTranslation().t;
    var columns = [
        {
            id: 'job',
            sort: 'metadata.name',
            title: t('Job'),
            transforms: [sortable],
        },
        {
            id: 'status',
            sort: 'status.succeeded',
            title: t('Status'),
            transforms: [sortable],
        },
        {
            id: 'complete-time',
            sort: 'status.completionTime',
            title: t('Complete time'),
            transforms: [sortable],
        },
    ];
    return columns;
};
export default useCheckupsNetworkDetailsPageHistoryColumns;
//# sourceMappingURL=useCheckupsNetworkDetailsPageHistoryColumns.js.map