import { FC } from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type VirtualMachinesInstancePageEventsTabProps = {
    obj: V1VirtualMachineInstance;
};
declare const VirtualMachinesInstancePageEventsTab: FC<VirtualMachinesInstancePageEventsTabProps>;
export default VirtualMachinesInstancePageEventsTab;
