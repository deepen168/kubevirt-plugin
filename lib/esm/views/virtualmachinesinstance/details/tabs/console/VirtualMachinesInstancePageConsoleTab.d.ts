import { FC } from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type VirtualMachinesInstancePageConsoleTabProps = {
    obj: V1VirtualMachineInstance;
};
declare const VirtualMachinesInstancePageConsoleTab: FC<VirtualMachinesInstancePageConsoleTabProps>;
export default VirtualMachinesInstancePageConsoleTab;
