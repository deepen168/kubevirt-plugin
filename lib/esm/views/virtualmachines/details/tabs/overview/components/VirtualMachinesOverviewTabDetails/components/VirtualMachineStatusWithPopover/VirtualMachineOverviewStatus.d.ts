import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type VirtualMachineOverviewStatusProps = {
    vm: V1VirtualMachine;
};
declare const VirtualMachineOverviewStatus: FC<VirtualMachineOverviewStatusProps>;
export default VirtualMachineOverviewStatus;
