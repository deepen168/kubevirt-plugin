import { FC } from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type TolerationsProps = {
    vmi: V1VirtualMachineInstance;
};
declare const CPUMemory: FC<TolerationsProps>;
export default CPUMemory;
