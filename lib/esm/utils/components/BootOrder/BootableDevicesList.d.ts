import * as React from 'react';
import { BootableDeviceType } from '../../resources/vm/utils/boot-order/bootOrder';
declare type BootableDevicesListProps = {
    devices: BootableDeviceType[];
};
declare const BootableDevicesList: React.FC<BootableDevicesListProps>;
export default BootableDevicesList;
