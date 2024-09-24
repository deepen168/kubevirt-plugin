import { V1beta1VirtualMachineInstancetype } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { Selector } from '@openshift-console/dynamic-plugin-sdk';
declare type UseVirtualMachineInstanceTypes = (fieldSelector?: string, selector?: Selector, fetchAllProjects?: boolean) => [instanceTypes: V1beta1VirtualMachineInstancetype[], loaded: boolean, loadError: Error];
declare const useVirtualMachineInstanceTypes: UseVirtualMachineInstanceTypes;
export default useVirtualMachineInstanceTypes;
