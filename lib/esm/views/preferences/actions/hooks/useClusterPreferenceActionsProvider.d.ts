import { V1beta1VirtualMachineClusterPreference } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { Action } from '@openshift-console/dynamic-plugin-sdk';
declare type UseClusterPreferenceActionsProviderValues = [Action[], boolean];
declare type UseClusterPreferenceActionsProvider = (preference: V1beta1VirtualMachineClusterPreference) => UseClusterPreferenceActionsProviderValues;
declare const useClusterPreferenceActionsProvider: UseClusterPreferenceActionsProvider;
export default useClusterPreferenceActionsProvider;
