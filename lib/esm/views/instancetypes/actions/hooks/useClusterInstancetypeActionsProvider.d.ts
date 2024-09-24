import { V1beta1VirtualMachineClusterInstancetype } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { Action } from '@openshift-console/dynamic-plugin-sdk';
declare type UseClusterInstancetypeActionsProviderValues = [Action[], boolean];
declare type UseClusterInstancetypeActionsProvider = (instanceType: V1beta1VirtualMachineClusterInstancetype) => UseClusterInstancetypeActionsProviderValues;
declare const useClusterInstancetypeActionsProvider: UseClusterInstancetypeActionsProvider;
export default useClusterInstancetypeActionsProvider;
