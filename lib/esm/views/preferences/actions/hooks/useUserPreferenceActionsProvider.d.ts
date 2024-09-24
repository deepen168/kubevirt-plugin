import { V1beta1VirtualMachinePreference } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { Action } from '@openshift-console/dynamic-plugin-sdk';
declare type UseUserPreferenceActionsProvider = (preference: V1beta1VirtualMachinePreference) => Action[];
declare const useUserPreferenceActionsProvider: UseUserPreferenceActionsProvider;
export default useUserPreferenceActionsProvider;
