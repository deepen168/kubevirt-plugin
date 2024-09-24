import { FC } from 'react';
import { V1VirtualMachineInstance, V1VirtualMachineInstanceGuestAgentInfo } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type VirtualMachinesOverviewTabActiveUserProps = {
    guestAgentData: V1VirtualMachineInstanceGuestAgentInfo;
    guestAgentDataLoaded: boolean;
    guestAgentDataLoadError: Error;
    vmi: V1VirtualMachineInstance;
};
declare const VirtualMachinesOverviewTabActiveUser: FC<VirtualMachinesOverviewTabActiveUserProps>;
export default VirtualMachinesOverviewTabActiveUser;
