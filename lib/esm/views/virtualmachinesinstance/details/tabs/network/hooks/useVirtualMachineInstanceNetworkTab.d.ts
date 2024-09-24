import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { NetworkPresentation } from './../utils/virtualMachineInstancePageNetworkTabUtils';
declare type UseVirtualMachineInstanceNetworkTab = (vmi: V1VirtualMachineInstance) => [NetworkPresentation[]];
export declare const useVirtualMachineInstanceNetworkTab: UseVirtualMachineInstanceNetworkTab;
export default useVirtualMachineInstanceNetworkTab;
