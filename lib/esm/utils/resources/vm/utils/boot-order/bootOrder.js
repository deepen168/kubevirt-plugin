var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { getPrintableDiskDrive } from '@kubevirt-utils/resources/vm/utils/disk/selectors';
/**
 * @date 3/20/2022 - 11:34:56 AM
 *
 * @export
 * @enum {number}
 */
export var DeviceType;
(function (DeviceType) {
    DeviceType["DISK"] = "DISK";
    DeviceType["NIC"] = "NIC";
})(DeviceType || (DeviceType = {}));
/**
 * Transform disk and nics into BootableDeviceType[]
 * @date 3/20/2022 - 11:34:56 AM
 *
 * @param {V1Disk[]} [disks=[]] - disks
 * @param {V1Interface[]} [nics=[]] - nics
 * @returns {BootableDeviceType[]}
 */
export var transformDevices = function (disks, nics) {
    if (disks === void 0) { disks = []; }
    if (nics === void 0) { nics = []; }
    var transformedDisks = disks === null || disks === void 0 ? void 0 : disks.map(function (disk) { return ({
        type: DeviceType.DISK,
        typeLabel: getPrintableDiskDrive(disk),
        value: disk,
    }); });
    var transformedNics = nics === null || nics === void 0 ? void 0 : nics.map(function (nic) { return ({
        type: DeviceType.NIC,
        typeLabel: DeviceType.NIC,
        value: nic,
    }); });
    return __spreadArray(__spreadArray([], transformedDisks, true), transformedNics, true);
};
//# sourceMappingURL=bootOrder.js.map