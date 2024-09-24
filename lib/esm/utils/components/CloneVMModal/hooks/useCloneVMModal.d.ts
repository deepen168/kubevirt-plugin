import { V1alpha1VirtualMachineClone } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type UseCloneVMModal = (cloneRequestName: string, cloneRequestNamespace: string) => V1alpha1VirtualMachineClone;
declare const useCloneVMModal: UseCloneVMModal;
export default useCloneVMModal;
