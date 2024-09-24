import * as React from 'react';
import { V1VirtualMachineInstance, V1VirtualMachineInstanceGuestAgentInfo } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type OperatingSystemProps = {
    guestAgentData: V1VirtualMachineInstanceGuestAgentInfo;
    loadedGuestAgent: boolean;
    vmi: V1VirtualMachineInstance;
};
declare const OperatingSystem: React.FC<OperatingSystemProps>;
export default OperatingSystem;
