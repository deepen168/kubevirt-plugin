import { FC } from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type VirtualMachinesInstancePageYAMLTabProps = {
    obj: V1VirtualMachineInstance;
};
declare const VirtualMachinesInstancePageYAMLTab: FC<VirtualMachinesInstancePageYAMLTabProps>;
export default VirtualMachinesInstancePageYAMLTab;
