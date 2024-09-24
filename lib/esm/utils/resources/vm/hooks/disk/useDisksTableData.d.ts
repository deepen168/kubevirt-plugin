import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { DiskRowDataLayout } from '@kubevirt-utils/resources/vm/utils/disk/constants';
declare type UseDisksTableDisks = (vm: V1VirtualMachine, vmi: V1VirtualMachineInstance) => [DiskRowDataLayout[], boolean, any, V1VirtualMachineInstance];
/**
 * A Hook for getting disks data for a VM
 * @param vm - virtual machine to get disks from
 * @param vmi - virtual machine instance
 * @returns disks data and loading state
 */
declare const useDisksTableData: UseDisksTableDisks;
export default useDisksTableData;
