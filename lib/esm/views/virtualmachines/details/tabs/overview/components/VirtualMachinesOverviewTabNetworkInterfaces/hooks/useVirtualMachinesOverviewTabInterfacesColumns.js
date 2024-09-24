import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var useVirtualMachinesOverviewTabInterfacesColumns = function () {
    var t = useKubevirtTranslation().t;
    var columns = [
        {
            id: 'name',
            title: t('Name'),
        },
        {
            id: 'ip',
            title: t('IP address'),
        },
    ];
    return columns;
};
export default useVirtualMachinesOverviewTabInterfacesColumns;
//# sourceMappingURL=useVirtualMachinesOverviewTabInterfacesColumns.js.map