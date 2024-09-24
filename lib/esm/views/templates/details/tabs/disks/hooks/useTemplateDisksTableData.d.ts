import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { DiskRowDataLayout } from '@kubevirt-utils/resources/vm/utils/disk/constants';
declare type UseDisksTableDisks = (vm: V1Template) => [DiskRowDataLayout[], boolean, any];
/**
 * A Hook for getting disks data for a VM
 * @param vm - virtual machine to get disks from
 * @returns disks data and loading state
 */
declare const useTemplateDisksTableData: UseDisksTableDisks;
export default useTemplateDisksTableData;
