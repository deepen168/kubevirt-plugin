import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type HardwareDevicesHeadlessModeProps = {
    onSubmit: (vm: V1VirtualMachine) => Promise<V1VirtualMachine | void>;
    vm: V1VirtualMachine;
};
declare const HardwareDevicesHeadlessMode: FC<HardwareDevicesHeadlessModeProps>;
export default HardwareDevicesHeadlessMode;
