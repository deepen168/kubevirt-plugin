import * as React from 'react';
import { V1GPU, V1HostDevice } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type HardwareDevicesListProps = {
    devices: V1GPU[] | V1HostDevice[];
    handleRemoveDevice: (device: V1GPU | V1HostDevice) => void;
};
declare const HardwareDevicesList: React.FC<HardwareDevicesListProps>;
export default HardwareDevicesList;
