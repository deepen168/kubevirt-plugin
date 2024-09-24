import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var useHardwareDevicesColumns = function () {
    var t = useKubevirtTranslation().t;
    var columns = [
        {
            id: 'resourceName',
            title: t('Name'),
        },
        {
            id: 'hardwareName',
            title: t('Device name'),
        },
    ];
    return columns;
};
export default useHardwareDevicesColumns;
//# sourceMappingURL=useHardwareDevicesColumns.js.map