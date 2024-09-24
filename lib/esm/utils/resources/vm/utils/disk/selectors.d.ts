import { V1Disk } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { DiskType } from './constants';
/**
 * returns a drive type from a disk
 * @param {V1Disk} disk disk
 * @returns drive type
 */
export declare const getDiskDrive: (disk: V1Disk) => DiskType;
/**
 * returns a printable drive type from a disk
 * @param {V1Disk} disk disk
 * @returns drive type
 */
export declare const getPrintableDiskDrive: (disk: V1Disk) => string;
/**
 * returns a drive interface from a disk
 * @param {V1Disk} disk disk
 * @returns drive interface
 */
export declare const getDiskInterface: (disk: V1Disk) => string;
/**
 * returns a printable drive interface from a disk
 * @param {V1Disk} disk disk
 * @returns drive interface
 */
export declare const getPrintableDiskInterface: (disk: V1Disk) => string;
