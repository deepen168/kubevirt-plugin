import * as React from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type VirtualMachinesPageStatusProps = {
    vm: V1VirtualMachine;
};
declare const VirtualMachineStatus: React.FC<VirtualMachinesPageStatusProps>;
export default VirtualMachineStatus;
