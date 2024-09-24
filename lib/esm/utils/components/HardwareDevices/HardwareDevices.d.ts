import { FC } from 'react';
import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type HardwareDevicesProps = {
    canEdit?: boolean;
    hideEdit?: boolean;
    onSubmit?: (vm: V1VirtualMachine) => Promise<V1VirtualMachine | void>;
    vm: V1VirtualMachine;
    vmi?: V1VirtualMachineInstance;
};
declare const HardwareDevices: FC<HardwareDevicesProps>;
export default HardwareDevices;
