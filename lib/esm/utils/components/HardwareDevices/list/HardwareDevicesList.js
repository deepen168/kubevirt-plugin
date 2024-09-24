import * as React from 'react';
import { VirtualizedTable } from '@openshift-console/dynamic-plugin-sdk';
import useHardwareDevicesColumns from './hooks/useHardwareDevicesColumns';
import HardwareDeviceRow from './HardwareDeviceRow';
var HardwareDevicesList = function (_a) {
    var devices = _a.devices, handleRemoveDevice = _a.handleRemoveDevice;
    var columns = useHardwareDevicesColumns();
    return (React.createElement(VirtualizedTable, { columns: columns, data: devices || [], loaded: true, loadError: false, Row: HardwareDeviceRow, rowData: { handleRemoveDevice: handleRemoveDevice }, unfilteredData: devices || [] }));
};
export default HardwareDevicesList;
//# sourceMappingURL=HardwareDevicesList.js.map