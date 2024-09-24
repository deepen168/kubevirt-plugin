import { V1VirtualMachineInstance, V1VirtualMachineInstanceGuestAgentInfo } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type UseGuestOS = (vmi?: V1VirtualMachineInstance) => [V1VirtualMachineInstanceGuestAgentInfo, boolean, Error];
export declare const useGuestOS: UseGuestOS;
export {};
