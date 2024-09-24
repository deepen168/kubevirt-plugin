var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useMemo } from 'react';
import { isRunning } from 'src/views/virtualmachines/utils';
import { getRunningVMMissingDisksFromVMI, getRunningVMMissingVolumesFromVMI, } from '@kubevirt-utils/components/DiskModal/utils/helpers';
import { getName } from '@kubevirt-utils/resources/shared';
import { getBootDisk, getDataVolumeTemplates, getDisks, getInstanceTypeMatcher, getVolumes, } from '../../utils';
import { getDiskRowDataLayout } from '../../utils/disk/rowData';
import useDisksSources from './useDisksSources';
/**
 * A Hook for getting disks data for a VM
 * @param vm - virtual machine to get disks from
 * @param vmi - virtual machine instance
 * @returns disks data and loading state
 */
var useDisksTableData = function (vm, vmi) {
    var isVMRunning = isRunning(vm);
    var vmDisks = useMemo(function () {
        return !isVMRunning
            ? getDisks(vm)
            : __spreadArray(__spreadArray([], (getDisks(vm) || []), true), getRunningVMMissingDisksFromVMI(getDisks(vm) || [], vmi), true);
    }, [vm, vmi, isVMRunning]);
    var vmVolumes = useMemo(function () {
        return !isVMRunning
            ? getVolumes(vm)
            : __spreadArray(__spreadArray([], (getVolumes(vm) || []), true), getRunningVMMissingVolumesFromVMI(getVolumes(vm) || [], vmi), true);
    }, [vm, vmi, isVMRunning]);
    var _a = useDisksSources(vm), loaded = _a.loaded, loadingError = _a.loadingError, pvcs = _a.pvcs;
    var disks = useMemo(function () {
        var isInstanceTypeVM = Boolean(getInstanceTypeMatcher(vm));
        var diskDevices = (vmVolumes || []).map(function (volume) {
            var _a, _b;
            var disk = vmDisks === null || vmDisks === void 0 ? void 0 : vmDisks.find(function (_a) {
                var name = _a.name;
                return name === (volume === null || volume === void 0 ? void 0 : volume.name);
            });
            if (!disk && isInstanceTypeVM)
                disk = { name: volume === null || volume === void 0 ? void 0 : volume.name };
            var dataVolumeTemplate = ((_a = volume === null || volume === void 0 ? void 0 : volume.dataVolume) === null || _a === void 0 ? void 0 : _a.name)
                ? (_b = getDataVolumeTemplates(vm)) === null || _b === void 0 ? void 0 : _b.find(function (dv) { return getName(dv) === volume.dataVolume.name; })
                : null;
            var pvc = pvcs === null || pvcs === void 0 ? void 0 : pvcs.find(function (_a) {
                var _b, _c;
                var metadata = _a.metadata;
                return (metadata === null || metadata === void 0 ? void 0 : metadata.name) === ((_b = volume === null || volume === void 0 ? void 0 : volume.persistentVolumeClaim) === null || _b === void 0 ? void 0 : _b.claimName) ||
                    (metadata === null || metadata === void 0 ? void 0 : metadata.name) === ((_c = volume === null || volume === void 0 ? void 0 : volume.dataVolume) === null || _c === void 0 ? void 0 : _c.name);
            });
            return { dataVolumeTemplate: dataVolumeTemplate, disk: disk, pvc: pvc, volume: volume };
        });
        return getDiskRowDataLayout(diskDevices, getBootDisk(vm));
    }, [vm, vmVolumes, vmDisks, pvcs]);
    return [disks || [], loaded, loadingError, isVMRunning ? vmi : null];
};
export default useDisksTableData;
//# sourceMappingURL=useDisksTableData.js.map