import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var useHardwareDevicesColumns = function () {
    var t = useKubevirtTranslation().t;
    var columns = React.useMemo(function () { return [
        {
            id: 'name',
            props: { className: 'pf-m-width-20' },
            title: t('Name'),
        },
        {
            id: 'deviceName',
            props: { className: 'pf-m-width-30' },
            title: t('Device name'),
        },
        {
            id: '',
            props: { className: 'dropdown-kebab-pf pf-v5-c-table__action' },
            title: '',
        },
    ]; }, [t]);
    return columns;
};
export default useHardwareDevicesColumns;
//# sourceMappingURL=useHardwareDevicesColumns.js.map