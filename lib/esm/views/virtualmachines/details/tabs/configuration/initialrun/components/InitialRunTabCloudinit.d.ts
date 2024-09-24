import { FC } from 'react';
import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type InitialRunTabCloudInitProps = {
    canUpdateVM: boolean;
    onSubmit: (updatedVM: V1VirtualMachine) => Promise<V1VirtualMachine>;
    vm: V1VirtualMachine;
    vmi?: V1VirtualMachineInstance;
};
declare const InitialRunTabCloudinit: FC<InitialRunTabCloudInitProps>;
export default InitialRunTabCloudinit;
