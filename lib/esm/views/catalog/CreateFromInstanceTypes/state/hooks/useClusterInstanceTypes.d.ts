import { V1beta1VirtualMachineClusterInstancetype } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { Selector } from '@openshift-console/dynamic-plugin-sdk';
declare type UseClusterInstanceTypes = (fieldSelector?: string, selector?: Selector) => [instanceTypes: V1beta1VirtualMachineClusterInstancetype[], loaded: boolean, loadError: Error];
declare const useClusterInstanceTypes: UseClusterInstanceTypes;
export default useClusterInstanceTypes;
