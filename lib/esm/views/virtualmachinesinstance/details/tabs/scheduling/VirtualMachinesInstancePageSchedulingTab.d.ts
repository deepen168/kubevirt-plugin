import { FC } from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type VirtualMachinesInstancePageSchedulingTabProps = {
    obj: V1VirtualMachineInstance;
};
declare const VirtualMachinesInstancePageSchedulingTab: FC<VirtualMachinesInstancePageSchedulingTabProps>;
export default VirtualMachinesInstancePageSchedulingTab;
