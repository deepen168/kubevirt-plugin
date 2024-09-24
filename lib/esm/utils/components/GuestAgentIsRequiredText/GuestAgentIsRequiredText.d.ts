import React from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type GuestAgentIsRequiredTextProps = {
    vmi: V1VirtualMachineInstance;
};
declare const GuestAgentIsRequiredText: React.FC<GuestAgentIsRequiredTextProps>;
export default GuestAgentIsRequiredText;
