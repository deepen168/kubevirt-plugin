import { FC } from 'react';
import { IoK8sApiCoreV1Node } from '@kubevirt-ui/kubevirt-api/kubernetes/models';
import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type SchedulingSectionLeftGridProps = {
    canUpdateVM: boolean;
    nodes: IoK8sApiCoreV1Node[];
    nodesLoaded: boolean;
    onUpdateVM?: (updatedVM: V1VirtualMachine) => Promise<V1VirtualMachine>;
    vm: V1VirtualMachine;
    vmi?: V1VirtualMachineInstance;
};
declare const SchedulingSectionLeftGrid: FC<SchedulingSectionLeftGridProps>;
export default SchedulingSectionLeftGrid;
