import { InterfaceTypes } from '@kubevirt-utils/components/DiskModal/utils/types';
import { diskTypes, diskTypesLabels } from './constants';
/**
 * returns a drive type from a disk
 * @param {V1Disk} disk disk
 * @returns drive type
 */
export var getDiskDrive = function (disk) {
    var drive = Object.keys(diskTypesLabels).find(function (driveType) { return disk === null || disk === void 0 ? void 0 : disk[driveType]; });
    return drive !== null && drive !== void 0 ? drive : diskTypes.disk;
};
/**
 * returns a printable drive type from a disk
 * @param {V1Disk} disk disk
 * @returns drive type
 */
export var getPrintableDiskDrive = function (disk) { return diskTypesLabels[getDiskDrive(disk)]; };
/**
 * returns a drive interface from a disk
 * @param {V1Disk} disk disk
 * @returns drive interface
 */
export var getDiskInterface = function (disk) { var _a; return (_a = disk === null || disk === void 0 ? void 0 : disk[getDiskDrive(disk)]) === null || _a === void 0 ? void 0 : _a.bus; };
/**
 * returns a printable drive interface from a disk
 * @param {V1Disk} disk disk
 * @returns drive interface
 */
export var getPrintableDiskInterface = function (disk) {
    var diskInterface = getDiskInterface(disk);
    if (diskInterface === InterfaceTypes.SCSI || diskInterface === InterfaceTypes.SATA) {
        return diskInterface.toUpperCase();
    }
    return diskInterface !== null && diskInterface !== void 0 ? diskInterface : '';
};
//# sourceMappingURL=selectors.js.map