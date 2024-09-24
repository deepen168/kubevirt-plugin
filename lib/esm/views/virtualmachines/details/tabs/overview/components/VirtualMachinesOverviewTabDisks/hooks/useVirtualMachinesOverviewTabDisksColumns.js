import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var useVirtualMachinesOverviewTabDisksColumns = function () {
    var t = useKubevirtTranslation().t;
    var columns = [
        {
            id: 'name',
            title: t('Name'),
        },
        {
            id: 'drive',
            title: t('Drive'),
        },
        {
            id: 'size',
            title: t('Size'),
        },
        {
            id: 'interface',
            title: t('Interface'),
        },
    ];
    return columns;
};
export default useVirtualMachinesOverviewTabDisksColumns;
//# sourceMappingURL=useVirtualMachinesOverviewTabDisksColumns.js.map