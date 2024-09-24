import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type VirtualMachineNavPageTitleProps = {
    name: string;
    vm: V1VirtualMachine;
};
declare const VirtualMachineNavPageTitle: FC<VirtualMachineNavPageTitleProps>;
export default VirtualMachineNavPageTitle;
