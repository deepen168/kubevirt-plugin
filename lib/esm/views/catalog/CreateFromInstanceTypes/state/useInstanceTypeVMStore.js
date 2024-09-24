var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import { create } from 'zustand';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { getInstanceTypeFromVolume } from '@kubevirt-utils/components/AddBootableVolumeModal/utils/utils';
import { DEFAULT_PREFERENCE_LABEL } from '@kubevirt-utils/resources/bootableresources/constants';
import { getLabel } from '@kubevirt-utils/resources/shared';
import { generatePrettyName } from '@kubevirt-utils/utils/utils';
import { k8sCreate } from '@openshift-console/dynamic-plugin-sdk';
import { instanceTypeVMStoreInitialState } from './utils/state';
import { getSSHCredentials } from './utils/utils';
export var useInstanceTypeVMStore = create()(function (set, get) {
    return __assign(__assign({}, instanceTypeVMStoreInitialState), { applySSHFromSettings: function (sshSecretName, targetNamespace) { return __awaiter(void 0, void 0, void 0, function () {
            var sshSecretCredentials;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getSSHCredentials(sshSecretName, targetNamespace)];
                    case 1:
                        sshSecretCredentials = _a.sent();
                        set(produce(function (currentStore) {
                            currentStore.instanceTypeVMState.sshSecretCredentials = sshSecretCredentials;
                            currentStore.vmNamespaceTarget = targetNamespace;
                            currentStore.isChangingNamespace = false;
                        }));
                        return [2 /*return*/];
                }
            });
        }); }, onSelectCreatedVolume: function (selectedVolume, pvcSource, volumeSnapshotSource) {
            return set(produce(function (_a) {
                var _b;
                var instanceTypeVMState = _a.instanceTypeVMState;
                instanceTypeVMState.selectedBootableVolume = selectedVolume;
                instanceTypeVMState.pvcSource = pvcSource;
                instanceTypeVMState.volumeSnapshotSource = volumeSnapshotSource;
                instanceTypeVMState.selectedInstanceType = {
                    name: getInstanceTypeFromVolume(selectedVolume),
                    namespace: null,
                };
                var osName = (_b = getLabel(selectedVolume, DEFAULT_PREFERENCE_LABEL)) === null || _b === void 0 ? void 0 : _b.replaceAll('.', '-');
                instanceTypeVMState.vmName = generatePrettyName(osName);
            }));
        }, resetInstanceTypeVMState: function () { return set(instanceTypeVMStoreInitialState); }, setCustomDiskSize: function (diskSize) {
            return set(produce(function (_a) {
                var instanceTypeVMState = _a.instanceTypeVMState;
                instanceTypeVMState.customDiskSize = diskSize;
            }));
        }, setInstanceTypeVMState: function (_a) {
            var payload = _a.payload, type = _a.type;
            return set(produce(function (_a) {
                var instanceTypeVMState = _a.instanceTypeVMState;
                instanceTypeVMState[type] = payload;
            }));
        }, setIsChangingNamespace: function () { return set({ isChangingNamespace: true }); }, setSelectedStorageClass: function (storageClass) {
            return set(produce(function (_a) {
                var instanceTypeVMState = _a.instanceTypeVMState;
                instanceTypeVMState.selectedStorageClass = storageClass;
            }));
        }, setStartVM: function (checked) {
            set({ startVM: checked });
        }, setVM: function (vm) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, k8sCreate({
                            data: vm,
                            model: VirtualMachineModel,
                            queryParams: {
                                dryRun: 'All',
                                fieldManager: 'kubectl-create',
                            },
                        })];
                    case 1:
                        _a.sent();
                        set({ vm: vm });
                        return [2 /*return*/];
                }
            });
        }); }, setVMNamespaceTarget: function (sshSecretName, targetNamespace) {
            get().setIsChangingNamespace();
            get().applySSHFromSettings(sshSecretName, targetNamespace);
        }, setVolumeListNamespace: function (namespace) {
            set({ volumeListNamespace: namespace });
        } });
});
//# sourceMappingURL=useInstanceTypeVMStore.js.map