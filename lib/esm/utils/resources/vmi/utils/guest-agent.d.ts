import { V1VirtualMachineInstance, V1VirtualMachineInstanceGuestAgentInfo } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const isGuestAgentConnected: (vmi: V1VirtualMachineInstance) => boolean;
export declare const getOsNameFromGuestAgent: (guestAgentData: V1VirtualMachineInstanceGuestAgentInfo) => string;
