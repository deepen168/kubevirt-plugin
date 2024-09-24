import { FC } from 'react';
import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './CPUMemory.scss';
declare type CPUMemoryProps = {
    fetchVMI?: boolean;
    vm: V1VirtualMachine;
    vmi?: V1VirtualMachineInstance;
};
declare const CPUMemory: FC<CPUMemoryProps>;
export default CPUMemory;
