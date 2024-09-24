import { V1beta1VirtualMachineClusterPreference } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { Selector } from '@openshift-console/dynamic-plugin-sdk';
declare type UseClusterPreferences = (fieldSelector?: string, selector?: Selector) => [preferences: V1beta1VirtualMachineClusterPreference[], loaded: boolean, loadError: Error];
declare const useClusterPreferences: UseClusterPreferences;
export default useClusterPreferences;
