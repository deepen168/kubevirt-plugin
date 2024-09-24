import * as React from 'react';
import { HARDWARE_DEVICE_TYPE } from '../utils/constants';
declare type HardwareDevicesModalProps = {
    type: HARDWARE_DEVICE_TYPE.GPUS | HARDWARE_DEVICE_TYPE.HOST_DEVICES;
};
declare const HardwareDeviceModalDescription: React.FC<HardwareDevicesModalProps>;
export default HardwareDeviceModalDescription;
