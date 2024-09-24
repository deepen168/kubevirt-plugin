import { V1Disk, V1Interface } from '@kubevirt-ui/kubevirt-api/kubevirt';
/**
 * @date 3/20/2022 - 11:34:56 AM
 *
 * @export
 * @typedef {BootableDeviceType}
 */
export declare type BootableDeviceType = {
    type: string;
    typeLabel: string;
    value: V1Disk | V1Interface;
};
/**
 * @date 3/20/2022 - 11:34:56 AM
 *
 * @export
 * @enum {number}
 */
export declare enum DeviceType {
    DISK = "DISK",
    NIC = "NIC"
}
/**
 * Transform disk and nics into BootableDeviceType[]
 * @date 3/20/2022 - 11:34:56 AM
 *
 * @param {V1Disk[]} [disks=[]] - disks
 * @param {V1Interface[]} [nics=[]] - nics
 * @returns {BootableDeviceType[]}
 */
export declare const transformDevices: (disks?: V1Disk[], nics?: V1Interface[]) => BootableDeviceType[];
