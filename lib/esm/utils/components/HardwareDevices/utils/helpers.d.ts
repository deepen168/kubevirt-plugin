import { V1GPU, V1HostDevice } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { HARDWARE_DEVICE_TYPE, HardwareDeviceModalRow } from './constants';
export declare const getInitialDevices: (initialDevices: V1GPU[] | V1HostDevice[], type: HARDWARE_DEVICE_TYPE) => HardwareDeviceModalRow[];
