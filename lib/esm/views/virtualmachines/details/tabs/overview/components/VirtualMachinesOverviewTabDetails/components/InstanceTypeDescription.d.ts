import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type InstanceTypeDescriptionProps = {
    vm: V1VirtualMachine;
};
declare const InstanceTypeDescription: FC<InstanceTypeDescriptionProps>;
export default InstanceTypeDescription;
