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
import { NAME_INPUT_FIELD } from '@catalog/templatescatalog/utils/consts';
import DataVolumeModel from '@kubevirt-ui/kubevirt-api/console/models/DataVolumeModel';
import { DEFAULT_CDROM_DISK_SIZE, DEFAULT_DISK_SIZE, } from '@kubevirt-utils/components/DiskModal/utils/constants';
import { ROOTDISK } from '@kubevirt-utils/constants/constants';
import { getTemplateParameterValue, getTemplateVirtualMachineObject, } from '@kubevirt-utils/resources/template';
import { getVolumes } from '@kubevirt-utils/resources/vm';
import { ensurePath, isEmpty, removeDockerPrefix } from '@kubevirt-utils/utils/utils';
import { INSTALLATION_CDROM_NAME } from './StorageSection/constants';
export var hasValidSource = function (template) {
    var vm = getTemplateVirtualMachineObject(template);
    var hasValidDVSources = hasVMValidDVSources(vm);
    var hasValidVolumeSources = hasVMValidVolumeSources(vm);
    return hasValidDVSources && hasValidVolumeSources;
};
var hasVMValidDVSources = function (vm) {
    var _a;
    if (!((_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.dataVolumeTemplates) && !getVolumes(vm).find(function (volume) { return volume.dataVolume; }))
        return true;
    return vm.spec.dataVolumeTemplates.every(function (dataVolume) {
        var _a, _b, _c, _d, _e, _f, _g;
        if ((_b = (_a = dataVolume === null || dataVolume === void 0 ? void 0 : dataVolume.spec) === null || _a === void 0 ? void 0 : _a.source) === null || _b === void 0 ? void 0 : _b.http)
            return Boolean(dataVolume.spec.source.http.url);
        if ((_d = (_c = dataVolume === null || dataVolume === void 0 ? void 0 : dataVolume.spec) === null || _c === void 0 ? void 0 : _c.source) === null || _d === void 0 ? void 0 : _d.registry)
            return Boolean(removeDockerPrefix((_e = dataVolume.spec.source.registry) === null || _e === void 0 ? void 0 : _e.url));
        if ((_g = (_f = dataVolume === null || dataVolume === void 0 ? void 0 : dataVolume.spec) === null || _f === void 0 ? void 0 : _f.source) === null || _g === void 0 ? void 0 : _g.pvc)
            return (Boolean(dataVolume.spec.source.pvc.name) && Boolean(dataVolume.spec.source.pvc.namespace));
        return true;
    });
};
var hasVMValidVolumeSources = function (vm) {
    return vm.spec.template.spec.volumes.every(function (volume) {
        var _a;
        if (volume === null || volume === void 0 ? void 0 : volume.containerDisk)
            return Boolean(removeDockerPrefix((_a = volume === null || volume === void 0 ? void 0 : volume.containerDisk) === null || _a === void 0 ? void 0 : _a.image));
        return true;
    });
};
export var allRequiredParametersAreFulfilled = function (template) {
    return template.parameters
        .filter(function (parameter) { return parameter.required; })
        .every(function (parameter) { return parameter.value !== ''; });
};
export var hasNameParameter = function (template) { var _a; return !isEmpty((_a = ((template === null || template === void 0 ? void 0 : template.parameters) || [])) === null || _a === void 0 ? void 0 : _a.find(function (param) { return (param === null || param === void 0 ? void 0 : param.name) === NAME_INPUT_FIELD; })); };
export var getTemplateNameParameterValue = function (template) {
    return getTemplateParameterValue(template, NAME_INPUT_FIELD);
};
export var changeTemplateParameterValue = function (template, parameterName, value) {
    template.parameters = template.parameters.map(function (parameter) {
        if (parameter.name === parameterName)
            parameter.value = value;
        return parameter;
    });
    return template;
};
export var getRootDataVolume = function (vm) {
    var _a, _b;
    var volume = (_a = getVolumes(vm)) === null || _a === void 0 ? void 0 : _a.find(function (v) { return v.name === ROOTDISK; });
    return (_b = vm.spec.dataVolumeTemplates) === null || _b === void 0 ? void 0 : _b.find(function (dv) { var _a; return dv.metadata.name === ((_a = volume === null || volume === void 0 ? void 0 : volume.dataVolume) === null || _a === void 0 ? void 0 : _a.name); });
};
export var getUploadDataVolume = function (name, namespace, storage) { return ({
    apiVersion: "".concat(DataVolumeModel.apiGroup, "/").concat(DataVolumeModel.apiVersion),
    kind: DataVolumeModel.kind,
    metadata: {
        name: name,
        namespace: namespace,
    },
    spec: {
        source: {
            upload: {},
        },
        storage: {
            resources: {
                requests: {
                    storage: storage,
                },
            },
        },
    },
}); };
var uploadFile = function (vm, file, uploadData, storage, dataVolumeName, namespace, updateTabsData) { return __awaiter(void 0, void 0, void 0, function () {
    var uploadDV, volumeToEdit;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (!storage || !file)
                    return [2 /*return*/, Promise.resolve()];
                uploadDV = getUploadDataVolume(dataVolumeName, namespace, storage);
                return [4 /*yield*/, uploadData({ dataVolume: uploadDV, file: file })];
            case 1:
                _c.sent();
                if (updateTabsData)
                    // add ownerReference after vm creation for wizard
                    updateTabsData(function (draft) {
                        var _a;
                        ensurePath(draft, 'disks');
                        draft.disks.dataVolumesToAddOwnerRef = ((_a = draft === null || draft === void 0 ? void 0 : draft.disks) === null || _a === void 0 ? void 0 : _a.dataVolumesToAddOwnerRef) || [];
                        draft.disks.dataVolumesToAddOwnerRef.push(uploadDV);
                    });
                volumeToEdit = (_a = getVolumes(vm)) === null || _a === void 0 ? void 0 : _a.find(function (v) { var _a; return ((_a = v === null || v === void 0 ? void 0 : v.dataVolume) === null || _a === void 0 ? void 0 : _a.name) === dataVolumeName; });
                return [2 /*return*/, {
                        name: volumeToEdit.name,
                        persistentVolumeClaim: {
                            claimName: (_b = volumeToEdit === null || volumeToEdit === void 0 ? void 0 : volumeToEdit.dataVolume) === null || _b === void 0 ? void 0 : _b.name,
                        },
                    }];
        }
    });
}); };
var replaceVolume = function (vm, oldDVName, volume) {
    var _a;
    vm.spec.template.spec.volumes = (_a = getVolumes(vm)) === null || _a === void 0 ? void 0 : _a.filter(function (v) { var _a; return ((_a = v === null || v === void 0 ? void 0 : v.dataVolume) === null || _a === void 0 ? void 0 : _a.name) !== oldDVName; });
    vm.spec.dataVolumeTemplates = vm.spec.dataVolumeTemplates.filter(function (dvt) { return dvt.metadata.name !== oldDVName; });
    vm.spec.template.spec.volumes.push(volume);
};
export var uploadFiles = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var cdFile = _a.cdFile, diskFile = _a.diskFile, namespace = _a.namespace, updateTabsData = _a.updateTabsData, uploadCDData = _a.uploadCDData, uploadDiskData = _a.uploadDiskData, vm = _a.vm;
    var dataVolumeTemplate = getRootDataVolume(vm);
    var diskDVName = (_b = dataVolumeTemplate === null || dataVolumeTemplate === void 0 ? void 0 : dataVolumeTemplate.metadata) === null || _b === void 0 ? void 0 : _b.name;
    var cdDVName = "".concat((_c = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _c === void 0 ? void 0 : _c.name, "-").concat(INSTALLATION_CDROM_NAME);
    var cdDataVolumeTemplate = (_e = (_d = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _d === void 0 ? void 0 : _d.dataVolumeTemplates) === null || _e === void 0 ? void 0 : _e.find(function (dv) { var _a; return ((_a = dv === null || dv === void 0 ? void 0 : dv.metadata) === null || _a === void 0 ? void 0 : _a.name) === cdDVName; });
    return Promise.all([
        uploadFile(vm, diskFile, uploadDiskData, ((_j = (_h = (_g = (_f = dataVolumeTemplate === null || dataVolumeTemplate === void 0 ? void 0 : dataVolumeTemplate.spec) === null || _f === void 0 ? void 0 : _f.storage) === null || _g === void 0 ? void 0 : _g.resources) === null || _h === void 0 ? void 0 : _h.requests) === null || _j === void 0 ? void 0 : _j.storage) || DEFAULT_DISK_SIZE, diskDVName, namespace, updateTabsData),
        uploadFile(vm, cdFile, uploadCDData, ((_o = (_m = (_l = (_k = cdDataVolumeTemplate === null || cdDataVolumeTemplate === void 0 ? void 0 : cdDataVolumeTemplate.spec) === null || _k === void 0 ? void 0 : _k.storage) === null || _l === void 0 ? void 0 : _l.resources) === null || _m === void 0 ? void 0 : _m.requests) === null || _o === void 0 ? void 0 : _o.storage) || DEFAULT_CDROM_DISK_SIZE, cdDVName, namespace, updateTabsData),
    ]).then(function (_a) {
        var newDiskVolume = _a[0], newCDVolume = _a[1];
        return produce(vm, function (vmDraft) {
            if (newDiskVolume) {
                replaceVolume(vmDraft, diskDVName, newDiskVolume);
            }
            if (newCDVolume) {
                replaceVolume(vmDraft, cdDVName, newCDVolume);
            }
        });
    });
};
export var getTemplateParametersSplit = function (parameters) {
    return parameters.reduce(function (acc, currentParameter) {
        if (currentParameter.name === NAME_INPUT_FIELD)
            return acc;
        acc[currentParameter.required ? 0 : 1].push(currentParameter);
        return acc;
    }, [[], []]);
};
//# sourceMappingURL=utils.js.map