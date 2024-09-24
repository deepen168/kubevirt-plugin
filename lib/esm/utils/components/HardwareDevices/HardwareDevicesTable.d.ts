import * as React from 'react';
import { V1GPU, V1HostDevice } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './hardware-devices-table.scss';
declare type HardwareDevicesTableProps = {
    devices: V1GPU[] | V1HostDevice[];
};
declare const HardwareDevicesTable: React.FC<HardwareDevicesTableProps>;
export default HardwareDevicesTable;
