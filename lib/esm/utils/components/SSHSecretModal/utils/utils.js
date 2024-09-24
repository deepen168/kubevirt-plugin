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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import produce from 'immer';
import { SecretModel } from '@kubevirt-ui/kubevirt-api/console';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { convertYAMLUserDataObject, getCloudInitData, getCloudInitVolume, } from '@kubevirt-utils/components/CloudinitModal/utils/cloudinit-utils';
import { MAX_NAME_LENGTH, MIN_NAME_LENGTH_FOR_GENERATED_SUFFIX, } from '@kubevirt-utils/components/SSHSecretModal/utils/constants';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { decodeSecret, encodeSecretKey } from '@kubevirt-utils/resources/secret/utils';
import { getName, getNamespace } from '@kubevirt-utils/resources/shared';
import { getVolumes } from '@kubevirt-utils/resources/vm';
import { isWindows } from '@kubevirt-utils/resources/vm/utils/operation-system/operationSystem';
import { generatePrettyName, isEmpty, validateSSHPublicKey } from '@kubevirt-utils/utils/utils';
import { k8sCreate, k8sUpdate, } from '@openshift-console/dynamic-plugin-sdk';
export var getAllSecrets = function (secretsData) {
    var _a;
    var secretsArrays = (_a = Object.values(secretsData)) === null || _a === void 0 ? void 0 : _a.map(function (watchedResource) { return watchedResource === null || watchedResource === void 0 ? void 0 : watchedResource.data; });
    return secretsArrays === null || secretsArrays === void 0 ? void 0 : secretsArrays.reduce(function (acc, secretsArray) {
        return __spreadArray(__spreadArray([], acc, true), secretsArray, true);
    }, []);
};
export var getSecretsLoaded = function (secretsData) { var _a; return (_a = Object.values(secretsData)) === null || _a === void 0 ? void 0 : _a.every(function (data) { return data.loaded; }); };
export var validateSecretNameLength = function (secretName) {
    return secretName.length <= MAX_NAME_LENGTH;
};
export var validateSecretNameUnique = function (secretName, vmNamespaceTarget, secrets) {
    return isEmpty(secrets === null || secrets === void 0 ? void 0 : secrets.find(function (secret) { return getName(secret) === secretName && getNamespace(secret) === vmNamespaceTarget; }));
};
export var getSecretNameErrorMessage = function (secretName, vmNamespaceTarget, secrets) {
    if (!validateSecretNameUnique(secretName, vmNamespaceTarget, secrets))
        return t('Secret name must be unique in this namespace.');
    if (!validateSecretNameLength(secretName))
        return t('Secret name too long, maximum of 253 characters.');
    return null;
};
export var removeSecretToVM = function (vm) {
    return produce(vm, function (vmDraft) {
        delete vmDraft.spec.template.spec.accessCredentials;
    });
};
export var detachVMSecret = function (vm) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, k8sUpdate({
                    data: removeSecretToVM(vm),
                    model: VirtualMachineModel,
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
export var applyCloudDriveCloudInitVolume = function (vm, isDynamic) {
    var cloudInitVolume = getCloudInitVolume(vm);
    if (isEmpty(cloudInitVolume))
        return getVolumes(vm);
    var cloudDriveVolume = {
        cloudInitNoCloud: getCloudInitConfigDrive(isDynamic, getCloudInitData(cloudInitVolume)),
        name: cloudInitVolume.name,
    };
    return getVolumes(vm).map(function (vol) { return (vol.name === cloudDriveVolume.name ? cloudDriveVolume : vol); });
};
export var addSecretToVM = function (vm, secretName, isDynamic) {
    var _a;
    if (isWindows((_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template))
        return vm;
    return produce(vm, function (vmDraft) {
        vmDraft.spec.template.spec.volumes = applyCloudDriveCloudInitVolume(vm, isDynamic);
        vmDraft.spec.template.spec.accessCredentials = [
            {
                sshPublicKey: {
                    propagationMethod: getCloudInitPropagationMethod(isDynamic, vm),
                    source: {
                        secret: {
                            secretName: (secretName === null || secretName === void 0 ? void 0 : secretName.toString()) || "".concat(getName(vm), "-ssh-key"),
                        },
                    },
                },
            },
        ];
    });
};
export var getCloudInitPropagationMethod = function (isDynamic, vm) {
    var cloudInitData = getCloudInitData(getCloudInitVolume(vm));
    var userData = convertYAMLUserDataObject(cloudInitData === null || cloudInitData === void 0 ? void 0 : cloudInitData.userData);
    return isDynamic
        ? {
            qemuGuestAgent: {
                users: [userData === null || userData === void 0 ? void 0 : userData.user],
            },
        }
        : { noCloud: {} };
};
export var getCloudInitConfigDrive = function (isDynamic, cloudInitVolumeData, isTemplate) {
    var _a, _b;
    if (isTemplate === void 0) { isTemplate = false; }
    var runCmd = "".concat(isTemplate ? '\n' : '', "runcmd:\n- [ setsebool, -P, virt_qemu_ga_manage_ssh, on ]");
    var userData = (_a = cloudInitVolumeData === null || cloudInitVolumeData === void 0 ? void 0 : cloudInitVolumeData.userData) === null || _a === void 0 ? void 0 : _a.concat(runCmd);
    var userDataClean = (_b = cloudInitVolumeData === null || cloudInitVolumeData === void 0 ? void 0 : cloudInitVolumeData.userData) === null || _b === void 0 ? void 0 : _b.replace(runCmd, '');
    return isDynamic
        ? __assign(__assign({}, cloudInitVolumeData), { userData: userData }) : __assign(__assign({}, cloudInitVolumeData), { userData: userDataClean });
};
export var createSSHSecret = function (sshKey, secretName, secretNamespace, dryRun) {
    if (dryRun === void 0) { dryRun = false; }
    return k8sCreate(__assign({ data: {
            apiVersion: SecretModel.apiVersion,
            data: { key: encodeSecretKey(sshKey) },
            kind: SecretModel.kind,
            metadata: {
                name: secretName,
                namespace: secretNamespace,
            },
        }, model: SecretModel }, (dryRun && { queryParams: { dryRun: 'All' } })));
};
export var getAllSecretsFromSecretData = function (secretsResourceData) {
    var _a;
    var sshKeySecrets = (_a = secretsResourceData === null || secretsResourceData === void 0 ? void 0 : secretsResourceData.filter(function (secret) { var _a; return ((_a = secret === null || secret === void 0 ? void 0 : secret.data) === null || _a === void 0 ? void 0 : _a.key) && validateSSHPublicKey(decodeSecret(secret)); })) === null || _a === void 0 ? void 0 : _a.sort(function (a, b) { var _a, _b; return (_a = a === null || a === void 0 ? void 0 : a.metadata) === null || _a === void 0 ? void 0 : _a.name.localeCompare((_b = b === null || b === void 0 ? void 0 : b.metadata) === null || _b === void 0 ? void 0 : _b.name); });
    return sshKeySecrets;
};
export var getMappedProjectsWithKeys = function (secretsData) {
    var sshKeySecrets = getAllSecretsFromSecretData(secretsData);
    var sshData = sshKeySecrets.reduce(function (acc, secret) {
        var _a, _b;
        acc[(_a = secret === null || secret === void 0 ? void 0 : secret.metadata) === null || _a === void 0 ? void 0 : _a.namespace] = __spreadArray(__spreadArray([], ((acc === null || acc === void 0 ? void 0 : acc[(_b = secret === null || secret === void 0 ? void 0 : secret.metadata) === null || _b === void 0 ? void 0 : _b.namespace]) || []), true), [secret], false);
        return acc;
    }, {});
    return sshData;
};
export var getPropagationMethod = function (vm) { var _a, _b, _c, _d; return (_d = (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.accessCredentials) === null || _d === void 0 ? void 0 : _d[0].sshPublicKey.propagationMethod; };
export var generateValidSecretName = function (secretName) {
    return secretName.length > MIN_NAME_LENGTH_FOR_GENERATED_SUFFIX
        ? generatePrettyName()
        : generatePrettyName(secretName);
};
export var addNewSecret = function (namespace, targetProject, activeNamespace) { return (namespace ? targetProject !== namespace : targetProject !== activeNamespace); };
//# sourceMappingURL=utils.js.map