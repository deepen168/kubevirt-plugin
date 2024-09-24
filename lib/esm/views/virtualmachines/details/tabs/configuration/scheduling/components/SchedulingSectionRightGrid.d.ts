import { FC } from 'react';
import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type SchedulingSectionRightGridProps = {
    canUpdateVM: boolean;
    onUpdateVM?: (updatedVM: V1VirtualMachine) => Promise<V1VirtualMachine>;
    vm: V1VirtualMachine;
    vmi?: V1VirtualMachineInstance;
};
declare const SchedulingSectionRightGrid: FC<SchedulingSectionRightGridProps>;
export default SchedulingSectionRightGrid;
