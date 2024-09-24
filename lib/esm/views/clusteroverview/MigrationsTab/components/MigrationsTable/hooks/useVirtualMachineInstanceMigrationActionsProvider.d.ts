import { V1VirtualMachineInstanceMigration } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { Action } from '@openshift-console/dynamic-plugin-sdk';
declare type UseVirtualMachineInstanceMigrationActionsProvider = (vmim: V1VirtualMachineInstanceMigration) => [Action[], boolean, any];
declare const useVirtualMachineInstanceMigrationActionsProvider: UseVirtualMachineInstanceMigrationActionsProvider;
export default useVirtualMachineInstanceMigrationActionsProvider;
