import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { VirtualizedTable } from '@openshift-console/dynamic-plugin-sdk';
import MutedTextSpan from '../MutedTextSpan/MutedTextSpan';
import useHardwareDevicesPageColumns from './list/hooks/useHardwareDevicesPageColumns ';
import HardwareDevicesPageRow from './HardwareDevicesPageRow';
var HardwareDevicesPageTable = function (_a) {
    var devices = _a.devices, error = _a.error, loaded = _a.loaded;
    var t = useKubevirtTranslation().t;
    var columns = useHardwareDevicesPageColumns();
    return (React.createElement(VirtualizedTable, { columns: columns, data: devices, EmptyMsg: function () { return React.createElement(MutedTextSpan, { text: t('Not available') }); }, loaded: loaded, loadError: error, Row: HardwareDevicesPageRow, unfilteredData: devices }));
};
export default HardwareDevicesPageTable;
//# sourceMappingURL=HardwareDevicesPageTable.js.map