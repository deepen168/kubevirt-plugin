import * as React from 'react';
import { V1VirtualMachineInstanceGuestAgentInfo } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type HostnameProps = {
    guestAgentData: V1VirtualMachineInstanceGuestAgentInfo;
};
declare const Hostname: React.FC<HostnameProps>;
export default Hostname;
