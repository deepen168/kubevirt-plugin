import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { DiskPresentation } from './../utils/virtualMachinesInstancePageDisksTabUtils';
declare type UseDisksTableDisks = (vmi: V1VirtualMachineInstance) => [DiskPresentation[], boolean, any];
declare const useDisksTableDisks: UseDisksTableDisks;
export default useDisksTableDisks;
