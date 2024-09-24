import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type VirtualMachinesOverviewTabServiceProps = {
    vm: V1VirtualMachine;
};
declare const VirtualMachinesOverviewTabService: FC<VirtualMachinesOverviewTabServiceProps>;
export default VirtualMachinesOverviewTabService;
