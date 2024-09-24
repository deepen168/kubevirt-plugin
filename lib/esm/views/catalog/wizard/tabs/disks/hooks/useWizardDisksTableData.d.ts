import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { DiskRowDataLayout } from '@kubevirt-utils/resources/vm/utils/disk/constants';
declare type UseDisksTableDisks = (vm: V1VirtualMachine) => [DiskRowDataLayout[], boolean, any];
/**
 * A Hook for getting disks data for a VM
 * @param vm - virtual machine to get disks from
 * @returns disks data and loading state
 */
declare const useWizardDisksTableData: UseDisksTableDisks;
export default useWizardDisksTableData;
