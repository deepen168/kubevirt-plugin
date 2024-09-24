import { FC } from 'react';
import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type VirtualMachinePendingChangesAlertProps = {
    vm: V1VirtualMachine;
    vmi: V1VirtualMachineInstance;
};
declare const VirtualMachinePendingChangesAlert: FC<VirtualMachinePendingChangesAlertProps>;
export default VirtualMachinePendingChangesAlert;
