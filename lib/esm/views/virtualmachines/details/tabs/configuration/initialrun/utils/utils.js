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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { ConfigMapModel } from '@kubevirt-ui/kubevirt-api/console';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { SYSPREP } from '@kubevirt-utils/components/SysprepModal/consts';
import { AUTOUNATTEND, generateNewSysprepConfig, sysprepDisk, sysprepVolume, UNATTEND, } from '@kubevirt-utils/components/SysprepModal/sysprep-utils';
import { getDisks, getVolumes } from '@kubevirt-utils/resources/vm';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { k8sCreate, k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
export var patchVMWithExistingSysprepConfigMap = function (name, vm, onSubmit) { return __awaiter(void 0, void 0, void 0, function () {
    var vmVolumes, vmDisks, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                vmVolumes = getVolumes(vm);
                vmDisks = getDisks(vm);
                if (!onSubmit) return [3 /*break*/, 1];
                _a = onSubmit([
                    {
                        data: __spreadArray(__spreadArray([], (vmDisks || []).filter(function (disk) { return (disk === null || disk === void 0 ? void 0 : disk.name) !== SYSPREP; }), true), (!isEmpty(name) ? [sysprepDisk()] : []), true),
                        path: "spec.template.spec.domain.devices.disks",
                    },
                    {
                        data: __spreadArray(__spreadArray([], (vmVolumes || []).filter(function (vol) { return (vol === null || vol === void 0 ? void 0 : vol.name) !== SYSPREP; }), true), (!isEmpty(name) ? [sysprepVolume(name)] : []), true),
                        path: "spec.template.spec.volumes",
                    },
                ]);
                return [3 /*break*/, 3];
            case 1: return [4 /*yield*/, k8sPatch({
                    data: [
                        {
                            op: 'replace',
                            path: "/spec/template/spec/domain/devices/disks",
                            value: __spreadArray(__spreadArray([], vmDisks.filter(function (disk) { return (disk === null || disk === void 0 ? void 0 : disk.name) !== SYSPREP; }), true), (!isEmpty(name) ? [sysprepDisk()] : []), true),
                        },
                        {
                            op: 'replace',
                            path: "/spec/template/spec/volumes",
                            value: __spreadArray(__spreadArray([], vmVolumes.filter(function (vol) { return (vol === null || vol === void 0 ? void 0 : vol.name) !== SYSPREP; }), true), (!isEmpty(name) ? [sysprepVolume(name)] : []), true),
                        },
                    ],
                    model: VirtualMachineModel,
                    resource: vm,
                })];
            case 2:
                _a = _b.sent();
                _b.label = 3;
            case 3:
                _a;
                return [2 /*return*/];
        }
    });
}); };
export var createSysprepConfigMap = function (unattended, autounattend, externalSysprepConfig, vm, onSubmit) { return __awaiter(void 0, void 0, void 0, function () {
    var vmVolumes, vmDisks, sysprepData, configMap, _a;
    var _b;
    var _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                vmVolumes = getVolumes(vm);
                vmDisks = getDisks(vm);
                sysprepData = (_b = {}, _b[AUTOUNATTEND] = autounattend, _b[UNATTEND] = unattended, _b);
                configMap = generateNewSysprepConfig({
                    data: sysprepData,
                    sysprepName: (_c = externalSysprepConfig === null || externalSysprepConfig === void 0 ? void 0 : externalSysprepConfig.metadata) === null || _c === void 0 ? void 0 : _c.name,
                });
                if (!externalSysprepConfig) return [3 /*break*/, 2];
                return [4 /*yield*/, k8sPatch({
                        data: [
                            {
                                op: 'replace',
                                path: "/data",
                                value: configMap.data,
                            },
                        ],
                        model: ConfigMapModel,
                        resource: externalSysprepConfig,
                    })];
            case 1:
                _e.sent();
                return [2 /*return*/];
            case 2: return [4 /*yield*/, k8sCreate({ data: configMap, model: ConfigMapModel, ns: (_d = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _d === void 0 ? void 0 : _d.namespace })];
            case 3:
                _e.sent();
                if (!onSubmit) return [3 /*break*/, 4];
                _a = onSubmit([
                    {
                        data: [sysprepDisk()],
                        merge: true,
                        path: 'spec.template.spec.domain.devices.disks',
                    },
                    {
                        data: [sysprepVolume(configMap.metadata.name)],
                        merge: true,
                        path: "spec.template.spec.volumes",
                    },
                ]);
                return [3 /*break*/, 6];
            case 4: return [4 /*yield*/, k8sPatch({
                    data: [
                        {
                            op: 'replace',
                            path: "/spec/template/spec/domain/devices/disks",
                            value: __spreadArray(__spreadArray([], (vmDisks || []), true), [sysprepDisk()], false),
                        },
                        {
                            op: 'replace',
                            path: "/spec/template/spec/volumes",
                            value: __spreadArray(__spreadArray([], (vmVolumes || []), true), [sysprepVolume(configMap.metadata.name)], false),
                        },
                    ],
                    model: VirtualMachineModel,
                    resource: vm,
                })];
            case 5:
                _a = _e.sent();
                _e.label = 6;
            case 6:
                _a;
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=utils.js.map