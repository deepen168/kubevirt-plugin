import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { sortable } from '@patternfly/react-table';
var useAffinityColumns = function () {
    var t = useKubevirtTranslation().t;
    var columns = React.useMemo(function () { return [
        {
            id: 'type',
            sort: 'type',
            title: t('Type'),
            transforms: [sortable],
        },
        {
            id: 'condition',
            sort: 'condition',
            title: t('Condition'),
            transforms: [sortable],
        },
        {
            id: 'weight',
            sort: 'weight',
            title: t('Weight'),
            transforms: [sortable],
        },
        {
            id: 'terms',
            title: t('Terms'),
        },
        {
            id: '',
            props: { className: 'dropdown-kebab-pf pf-v5-c-table__action' },
            title: '',
        },
    ]; }, [t]);
    return columns;
};
export default useAffinityColumns;
//# sourceMappingURL=useAffinityColumns.js.map