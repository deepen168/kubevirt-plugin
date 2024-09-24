import { V1beta1VirtualMachineInstancetype } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { Action } from '@openshift-console/dynamic-plugin-sdk';
declare type UseUserInstancetypeActionsProviderValues = [Action[], boolean];
declare type UseUserInstancetypeActionsProvider = (instanceType: V1beta1VirtualMachineInstancetype) => UseUserInstancetypeActionsProviderValues;
declare const useUserInstancetypeActionsProvider: UseUserInstancetypeActionsProvider;
export default useUserInstancetypeActionsProvider;
