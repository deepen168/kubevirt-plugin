import * as React from 'react';
import { V1Devices } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type HardwareDevices = {
    devices: V1Devices;
};
declare const HardwareDevices: React.FC<HardwareDevices>;
export default HardwareDevices;
