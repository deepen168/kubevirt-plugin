var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import produce from 'immer';
import { PersistentVolumeClaimModel } from '@kubevirt-utils/models';
import { getName } from '@kubevirt-utils/resources/shared';
import { getBootDisk, getDataVolumeTemplates, getDisks, getVolumes, } from '@kubevirt-utils/resources/vm';
import { generatePrettyName, isEmpty } from '@kubevirt-utils/utils/utils';
import { k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
import { isRunning } from '@virtualmachines/utils';
import { getDataVolumeTemplateSize } from '../components/utils/selectors';
import { DEFAULT_DISK_SIZE } from './constants';
import { getEmptyVMDataVolumeResource, hotplugPromise, produceVMDisks } from './helpers';
var applyDiskAsBootable = function (vm, diskName) {
    return produce(vm, function (draftVM) {
        var disks = getDisks(draftVM);
        disks.forEach(function (disk, index) {
            if (disk.name === diskName) {
                disk.bootOrder = 1;
                return;
            }
            disk.bootOrder = index + 2;
        });
    });
};
var removeDiskAsBootable = function (vm, diskName) {
    return produce(vm, function (draftVM) {
        var disks = getDisks(draftVM);
        var disk = disks.find(function (d) { return d.name === diskName; });
        if (disk)
            delete disk.bootOrder;
        var nextBootDisk = disks.find(function (d) { return d.name !== diskName; });
        if (nextBootDisk) {
            nextBootDisk.bootOrder = 1;
        }
    });
};
export var reorderBootDisk = function (vm, diskName, isBootDisk, initialBootDisk) {
    if (isBootDisk === initialBootDisk)
        return vm;
    return isBootDisk ? applyDiskAsBootable(vm, diskName) : removeDiskAsBootable(vm, diskName);
};
export var uploadDataVolume = function (vm, uploadData, data) { return __awaiter(void 0, void 0, void 0, function () {
    var dataVolume;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                dataVolume = getEmptyVMDataVolumeResource(vm);
                dataVolume.metadata.name = generatePrettyName('upload');
                dataVolume.spec.source = { upload: {} };
                dataVolume.spec.storage.resources.requests.storage =
                    getDataVolumeTemplateSize(data) || DEFAULT_DISK_SIZE;
                return [4 /*yield*/, uploadData({
                        dataVolume: dataVolume,
                        file: (_a = data === null || data === void 0 ? void 0 : data.uploadFile) === null || _a === void 0 ? void 0 : _a.file,
                    })];
            case 1:
                _b.sent();
                delete data.dataVolumeTemplate.spec.source.upload;
                return [2 /*return*/, dataVolume];
        }
    });
}); };
export var editDisk = function (data, diskName, vm) {
    var _a, _b, _c;
    var volumes = getVolumes(vm);
    var diskindex = (_a = getDisks(vm)) === null || _a === void 0 ? void 0 : _a.findIndex(function (disk) { return disk.name === diskName; });
    var volumeindex = (_b = getVolumes(vm)) === null || _b === void 0 ? void 0 : _b.findIndex(function (volume) { return volume.name === diskName; });
    var dataVolumeTemplateindex = (_c = getDataVolumeTemplates(vm)) === null || _c === void 0 ? void 0 : _c.findIndex(function (dv) { var _a, _b; return getName(dv) === ((_b = (_a = volumes[volumeindex]) === null || _a === void 0 ? void 0 : _a.dataVolume) === null || _b === void 0 ? void 0 : _b.name); });
    return produceVMDisks(vm, function (draftVM) {
        draftVM.spec.template.spec.domain.devices.disks.splice(diskindex, 1, data.disk);
        draftVM.spec.template.spec.volumes.splice(volumeindex, 1, data.volume);
        if (dataVolumeTemplateindex >= 0)
            draftVM.spec.dataVolumeTemplates.splice(dataVolumeTemplateindex, 1, data.dataVolumeTemplate);
    });
};
export var addDisk = function (data, vm) {
    return produceVMDisks(vm, function (draftVM) {
        draftVM.spec.template.spec.domain.devices.disks.push(data.disk);
        draftVM.spec.template.spec.volumes.push(data.volume);
        if (data.dataVolumeTemplate)
            draftVM.spec.dataVolumeTemplates.push(data.dataVolumeTemplate);
    });
};
export var submit = function (_a) {
    var data = _a.data, editDiskName = _a.editDiskName, onSubmit = _a.onSubmit, pvc = _a.pvc, vm = _a.vm;
    return __awaiter(void 0, void 0, void 0, function () {
        var isVMRunning, isEditDisk, isInitialBootDisk, vmWithDisk, newVM;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    isVMRunning = isRunning(vm);
                    isEditDisk = !isEmpty(editDiskName);
                    isInitialBootDisk = ((_b = getBootDisk(vm)) === null || _b === void 0 ? void 0 : _b.name) === editDiskName;
                    vmWithDisk = isEditDisk ? editDisk(data, editDiskName, vm) : addDisk(data, vm);
                    newVM = reorderBootDisk(vmWithDisk, data.disk.name, data.isBootSource, isInitialBootDisk);
                    if (!(data.expandPVCSize && pvc)) return [3 /*break*/, 2];
                    return [4 /*yield*/, k8sPatch({
                            data: [
                                {
                                    op: 'replace',
                                    path: '/spec/resources/requests',
                                    value: { storage: data.expandPVCSize },
                                },
                            ],
                            model: PersistentVolumeClaimModel,
                            resource: pvc,
                        })];
                case 1:
                    _c.sent();
                    _c.label = 2;
                case 2: return [2 /*return*/, !isVMRunning ? onSubmit(newVM) : hotplugPromise(newVM, data)];
            }
        });
    });
};
//# sourceMappingURL=submit.js.map