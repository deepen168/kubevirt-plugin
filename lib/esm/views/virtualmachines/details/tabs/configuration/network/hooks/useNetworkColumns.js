import { useCallback, useMemo } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { sortNICs } from '@kubevirt-utils/resources/vm/utils/network/utils';
import { sortable } from '@patternfly/react-table';
var useNetworkColumns = function (data) {
    var t = useKubevirtTranslation().t;
    var sorting = useCallback(function (direction) { return sortNICs(data, direction); }, [data]);
    var columns = useMemo(function () { return [
        {
            id: 'name',
            sort: 'network.name',
            title: t('Name'),
            transforms: [sortable],
        },
        {
            id: 'model',
            sort: 'iface.model',
            title: t('Model'),
            transforms: [sortable],
        },
        {
            id: 'network',
            sort: 'network.pod' || 'network.multus.networkName',
            title: t('Network'),
            transforms: [sortable],
        },
        {
            id: 'type',
            sort: function (_, direction) { return sorting(direction); },
            title: t('Type'),
            transforms: [sortable],
        },
        {
            id: 'macAddress',
            sort: 'iface.macAddress',
            title: t('MAC address'),
            transforms: [sortable],
        },
        {
            id: '',
            props: { className: 'dropdown-kebab-pf pf-v5-c-table__action' },
            title: '',
        },
    ]; }, [sorting, t]);
    return columns;
};
export default useNetworkColumns;
//# sourceMappingURL=useNetworkColumns.js.map