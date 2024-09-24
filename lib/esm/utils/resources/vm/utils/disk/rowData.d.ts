import { V1Disk } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { DiskRawData, DiskRowDataLayout } from '@kubevirt-utils/resources/vm/utils/disk/constants';
/**
 *  A function for getting disks row data for a VM
 * @param {DiskRawData[]} disks - disks to get row data from
 * @param {V1Disk} bootDisk - the current boot disk of the vm
 * @returns returns DiskRowDataLayout[]
 */
export declare const getDiskRowDataLayout: (disks: DiskRawData[], bootDisk: V1Disk) => DiskRowDataLayout[];
