import { FC } from 'react';
import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type SchedulingSectionProps = {
    onSubmit?: (updatedVM: V1VirtualMachine) => Promise<V1VirtualMachine>;
    vm: V1VirtualMachine;
    vmi?: V1VirtualMachineInstance;
};
declare const SchedulingSection: FC<SchedulingSectionProps>;
export default SchedulingSection;
