import { FC } from 'react';
import { V1VirtualMachine, V1VirtualMachineInstance, V1VirtualMachineInstanceGuestAgentInfo } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './virtual-machines-overview-tab-details.scss';
declare type VirtualMachinesOverviewTabDetailsProps = {
    error: Error;
    guestAgentData: V1VirtualMachineInstanceGuestAgentInfo;
    guestAgentDataLoaded: boolean;
    instanceTypeExpandedSpec: V1VirtualMachine;
    loaded: boolean;
    vm: V1VirtualMachine;
    vmi: V1VirtualMachineInstance;
};
declare const VirtualMachinesOverviewTabDetails: FC<VirtualMachinesOverviewTabDetailsProps>;
export default VirtualMachinesOverviewTabDetails;
