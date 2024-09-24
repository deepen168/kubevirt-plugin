import { FC } from 'react';
import { HardwareDevicePageRow } from './utils/constants';
declare type HardwareDevicesPageTableProps = {
    devices: HardwareDevicePageRow[];
    error: Error;
    loaded: boolean;
};
declare const HardwareDevicesPageTable: FC<HardwareDevicesPageTableProps>;
export default HardwareDevicesPageTable;
