import { FC } from 'react';
import { V1VirtualMachine, V1VirtualMachineInstanceGuestAgentInfo } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type VirtualMachinesOverviewTabFilesystemProps = {
    guestAgentData: V1VirtualMachineInstanceGuestAgentInfo;
    guestAgentDataLoaded: boolean;
    vm: V1VirtualMachine;
};
declare const VirtualMachinesOverviewTabFilesystem: FC<VirtualMachinesOverviewTabFilesystemProps>;
export default VirtualMachinesOverviewTabFilesystem;
