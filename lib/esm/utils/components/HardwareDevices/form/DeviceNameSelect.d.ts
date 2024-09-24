import { FC } from 'react';
import { V1PermittedHostDevices } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type DeviceNameSelectProps = {
    deviceName: string;
    index: number;
    permittedHostDevices: V1PermittedHostDevices;
    setDeviceName: (resourceName: string) => void;
};
declare const DeviceNameSelect: FC<DeviceNameSelectProps>;
export default DeviceNameSelect;
