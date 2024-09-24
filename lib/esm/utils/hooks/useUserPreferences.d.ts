import { V1beta1VirtualMachinePreference } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { Selector } from '@openshift-console/dynamic-plugin-sdk';
declare const useUserPreferences: (namespace: string, fieldSelector?: string, selector?: Selector) => import("@openshift-console/dynamic-plugin-sdk").WatchK8sResult<V1beta1VirtualMachinePreference[]>;
export default useUserPreferences;
