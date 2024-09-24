import * as React from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type VirtualMachinesInsanceActionsProps = {
    vmi: V1VirtualMachineInstance;
};
declare const VirtualMachineInstanceActions: React.FC<VirtualMachinesInsanceActionsProps>;
export default VirtualMachineInstanceActions;
