import * as React from 'react';
import { V1VirtualMachineInstanceGuestAgentInfo } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type TimezoneProps = {
    guestAgentData: V1VirtualMachineInstanceGuestAgentInfo;
};
declare const Timezone: React.FC<TimezoneProps>;
export default Timezone;
