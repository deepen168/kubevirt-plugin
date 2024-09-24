import { V1VirtualMachine, V1VirtualMachineInstanceMigration } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { Action } from '@openshift-console/dynamic-plugin-sdk';
declare type UseVirtualMachineActionsProvider = (vm: V1VirtualMachine, vmim?: V1VirtualMachineInstanceMigration, isSingleNodeCluster?: boolean) => [Action[], boolean, any];
declare const useVirtualMachineActionsProvider: UseVirtualMachineActionsProvider;
export default useVirtualMachineActionsProvider;
