import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { Action } from '@openshift-console/dynamic-plugin-sdk';
declare type UseVirtualMachineInstanceActionsProvider = (vmi: V1VirtualMachineInstance) => [Action[], boolean, any];
declare const useVirtualMachineInstanceActionsProvider: UseVirtualMachineInstanceActionsProvider;
export default useVirtualMachineInstanceActionsProvider;
