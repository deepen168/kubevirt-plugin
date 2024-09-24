import { CONTAINER_EPHERMAL, DYNAMIC, OTHER, } from '@kubevirt-utils/components/DiskModal/components/utils/constants';
import { VolumeTypes } from '@kubevirt-utils/components/DiskModal/utils/types';
import { getPrintableDiskDrive, getPrintableDiskInterface, } from '@kubevirt-utils/resources/vm/utils/disk/selectors';
import { convertToBaseValue, humanizeBinaryBytes } from '@kubevirt-utils/utils/humanize.js';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { NO_DATA_DASH } from '../constants';
/**
 *  A function for getting disks row data for a VM
 * @param {DiskRawData[]} disks - disks to get row data from
 * @param {V1Disk} bootDisk - the current boot disk of the vm
 * @returns returns DiskRowDataLayout[]
 */
export var getDiskRowDataLayout = function (disks, bootDisk) {
    return disks === null || disks === void 0 ? void 0 : disks.map(function (device) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
        // eslint-disable-next-line require-jsdoc
        var volumeSource = Object.keys(device === null || device === void 0 ? void 0 : device.volume).find(function (key) { return key !== 'name'; });
        var diskRowDataObject = {
            drive: isEmpty(device === null || device === void 0 ? void 0 : device.disk) ? NO_DATA_DASH : getPrintableDiskDrive(device === null || device === void 0 ? void 0 : device.disk),
            interface: isEmpty(device === null || device === void 0 ? void 0 : device.disk) ? NO_DATA_DASH : getPrintableDiskInterface(device === null || device === void 0 ? void 0 : device.disk),
            isBootDisk: ((_a = device === null || device === void 0 ? void 0 : device.disk) === null || _a === void 0 ? void 0 : _a.name) === (bootDisk === null || bootDisk === void 0 ? void 0 : bootDisk.name),
            isEnvDisk: !!((_b = device === null || device === void 0 ? void 0 : device.volume) === null || _b === void 0 ? void 0 : _b.configMap) || !!((_c = device === null || device === void 0 ? void 0 : device.volume) === null || _c === void 0 ? void 0 : _c.secret) || !!((_d = device === null || device === void 0 ? void 0 : device.volume) === null || _d === void 0 ? void 0 : _d.serviceAccount),
            metadata: { name: (_e = device === null || device === void 0 ? void 0 : device.volume) === null || _e === void 0 ? void 0 : _e.name },
            name: (_f = device === null || device === void 0 ? void 0 : device.volume) === null || _f === void 0 ? void 0 : _f.name,
            namespace: (_h = (_g = device === null || device === void 0 ? void 0 : device.pvc) === null || _g === void 0 ? void 0 : _g.metadata) === null || _h === void 0 ? void 0 : _h.namespace,
            size: NO_DATA_DASH,
            source: OTHER,
            storageClass: ((_l = (_k = (_j = device === null || device === void 0 ? void 0 : device.dataVolumeTemplate) === null || _j === void 0 ? void 0 : _j.spec) === null || _k === void 0 ? void 0 : _k.storage) === null || _l === void 0 ? void 0 : _l.storageClassName) || NO_DATA_DASH,
        };
        var pvcSize = (_q = (_p = (_o = (_m = device === null || device === void 0 ? void 0 : device.pvc) === null || _m === void 0 ? void 0 : _m.spec) === null || _o === void 0 ? void 0 : _o.resources) === null || _p === void 0 ? void 0 : _p.requests) === null || _q === void 0 ? void 0 : _q.storage;
        var dataVolumeCustomSize = (_v = (_u = (_t = (_s = (_r = device === null || device === void 0 ? void 0 : device.dataVolumeTemplate) === null || _r === void 0 ? void 0 : _r.spec) === null || _s === void 0 ? void 0 : _s.storage) === null || _t === void 0 ? void 0 : _t.resources) === null || _u === void 0 ? void 0 : _u.requests) === null || _v === void 0 ? void 0 : _v.storage;
        var size = humanizeBinaryBytes(convertToBaseValue(dataVolumeCustomSize || pvcSize));
        diskRowDataObject.size = size.value === 0 ? NO_DATA_DASH : size.string;
        if (device === null || device === void 0 ? void 0 : device.pvc) {
            diskRowDataObject.source = (_x = (_w = device === null || device === void 0 ? void 0 : device.pvc) === null || _w === void 0 ? void 0 : _w.metadata) === null || _x === void 0 ? void 0 : _x.name;
            diskRowDataObject.sourceStatus = (_z = (_y = device === null || device === void 0 ? void 0 : device.pvc) === null || _y === void 0 ? void 0 : _y.status) === null || _z === void 0 ? void 0 : _z.phase;
            diskRowDataObject.storageClass = (_1 = (_0 = device === null || device === void 0 ? void 0 : device.pvc) === null || _0 === void 0 ? void 0 : _0.spec) === null || _1 === void 0 ? void 0 : _1.storageClassName;
        }
        if (volumeSource === VolumeTypes.CONTAINER_DISK) {
            diskRowDataObject.source = CONTAINER_EPHERMAL;
            diskRowDataObject.size = DYNAMIC;
        }
        return diskRowDataObject;
    });
};
//# sourceMappingURL=rowData.js.map