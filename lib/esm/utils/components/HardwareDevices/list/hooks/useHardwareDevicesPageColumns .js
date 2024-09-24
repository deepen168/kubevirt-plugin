import { useMemo } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var useHardwareDevicesPageColumns = function () {
    var t = useKubevirtTranslation().t;
    var columns = useMemo(function () { return [
        {
            id: 'resourceName',
            props: { className: 'pf-m-width-20' },
            title: t('Device name'),
        },
        {
            id: 'selector',
            props: { className: 'pf-m-width-20' },
            title: t('Selector'),
        },
    ]; }, [t]);
    return columns;
};
export default useHardwareDevicesPageColumns;
//# sourceMappingURL=useHardwareDevicesPageColumns%20.js.map