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
import { ClusterRoleBindingModel, ConfigMapModel, JobModel, RoleBindingModel, RoleModel, ServiceAccountModel, } from '@kubevirt-ui/kubevirt-api/console';
import { kubevirtConsole } from '@kubevirt-utils/utils/utils';
import { k8sCreate, k8sDelete, k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
import { generateWithNumbers, KUBEVIRT_VM_LATENCY_LABEL, STATUS_COMPILATION_TIME_STAMP, STATUS_FAILURE_REASON, STATUS_START_TIME_STAMP, STATUS_SUCCEEDED, } from '../../utils/utils';
export var STORAGE_CHECKUP_SA = 'storage-checkup-sa';
export var STORAGE_CHECKUP_ROLE = 'storage-checkup-role';
export var KUBEVIRT_STORAGE_LABEL_VALUE = 'kubevirt-vm-storage';
export var STORAGE_CLUSTER_ROLE_BINDING = 'kubevirt-storage-checkup-clustereader';
export var STORAGE_CHECKUP_TIMEOUT = 'spec.timeout';
export var STORAGE_CHECKUP_DEFAULT_STORAGE_CLASS = 'status.result.defaultStorageClass';
export var STORAGE_CHECKUP_LIVE_MIGRATION = 'status.result.vmLiveMigration';
export var STORAGE_CHECKUPS_GOLDEN_IMAGE_NOT_UP_TO_DATE = 'status.result.goldenImagesNotUpToDate';
export var STORAGE_CHECKUPS_GOLDEN_IMAGE_NO_DATA_SOURCE = 'status.result.goldenImagesNoDataSource';
export var STORAGE_CHECKUPS_WITH_SMART_CLONE = 'status.result.storageProfilesWithSmartClone';
export var STORAGE_CHECKUPS_PVC_BOUND = 'status.result.pvcBound';
export var STORAGE_CHECKUPS_MISSING_VOLUME_SNAP_SHOT = 'status.result.storageProfileMissingVolumeSnapshotClass';
export var STORAGE_CHECKUPS_WITH_CLAIM_PROPERTY_SETS = 'status.result.storageProfilesWithSpecClaimPropertySets';
export var STORAGE_CHECKUPS_WITH_EMPTY_CLAIM_PROPERTY_SETS = 'status.result.storageProfilesWithEmptyClaimPropertySets';
export var STORAGE_CHECKUPS_STORAGE_WITH_RWX = 'status.result.storageProfilesWithRWX';
export var STORAGE_CHECKUPS_BOOT_GOLDEN_IMAGE = 'status.result.vmBootFromGoldenImage';
export var STORAGE_CHECKUPS_VM_HOT_PLUG_VOLUME = 'status.result.vmHotplugVolume';
export var STORAGE_CHECKUPS_VM_VOLUME_CLONE = 'status.result.vmVolumeClone';
export var STORAGE_CHECKUPS_WITH_NON_RBD_STORAGE_CLASS = 'status.result.vmsWithNonVirtRbdStorageClass';
export var STORAGE_CHECKUPS_UNSET_EFS_STORAGE_CLASS = 'status.result.vmsWithUnsetEfsStorageClass';
var storageClusterRoleBinding = function (namespace) { return ({
    apiVersion: 'rbac.authorization.k8s.io/v1',
    kind: 'ClusterRoleBinding',
    metadata: { name: STORAGE_CLUSTER_ROLE_BINDING },
    roleRef: { apiGroup: 'rbac.authorization.k8s.io', kind: 'ClusterRole', name: 'cluster-reader' },
    subjects: [{ kind: 'ServiceAccount', name: STORAGE_CHECKUP_SA, namespace: namespace }],
}); };
var serviceAccountResource = function (namespace) { return ({
    metadata: { name: STORAGE_CHECKUP_SA, namespace: namespace },
}); };
var storageCheckupRole = function (namespace) { return ({
    apiVersion: 'rbac.authorization.k8s.io/v1',
    kind: 'Role',
    metadata: { name: STORAGE_CHECKUP_ROLE, namespace: namespace },
    rules: [
        { apiGroups: [''], resources: ['configmaps'], verbs: ['get', 'update'] },
        { apiGroups: ['kubevirt.io'], resources: ['virtualmachines'], verbs: ['create', 'delete'] },
        { apiGroups: ['kubevirt.io'], resources: ['virtualmachineinstances'], verbs: ['get'] },
        {
            apiGroups: ['subresources.kubevirt.io'],
            resources: ['virtualmachineinstances/addvolume', 'virtualmachineinstances/removevolume'],
            verbs: ['update'],
        },
        {
            apiGroups: ['kubevirt.io'],
            resources: ['virtualmachineinstancemigrations'],
            verbs: ['create'],
        },
        { apiGroups: ['cdi.kubevirt.io'], resources: ['datavolumes'], verbs: ['create', 'delete'] },
        { apiGroups: [''], resources: ['persistentvolumeclaims'], verbs: ['delete'] },
    ],
}); };
var storageCheckupRoleBinding = function (namespace) { return ({
    apiVersion: 'rbac.authorization.k8s.io/v1',
    kind: 'RoleBinding',
    metadata: { name: STORAGE_CHECKUP_ROLE, namespace: namespace },
    roleRef: {
        apiGroup: 'rbac.authorization.k8s.io',
        kind: 'Role',
        name: STORAGE_CHECKUP_ROLE,
    },
    subjects: [{ kind: 'ServiceAccount', name: STORAGE_CHECKUP_SA, namespace: namespace }],
}); };
var storageCheckupConfigMap = function (namespace, timeOut, name) {
    var _a;
    return ({
        apiVersion: 'v1',
        data: { 'spec.timeout': "".concat(timeOut, "m") },
        kind: 'ConfigMap',
        metadata: {
            labels: (_a = {},
                _a[KUBEVIRT_VM_LATENCY_LABEL] = KUBEVIRT_STORAGE_LABEL_VALUE,
                _a),
            name: name,
            namespace: namespace,
        },
    });
};
var storageCheckupJob = function (name, namespace) {
    var _a;
    return {
        apiVersion: 'batch/v1',
        kind: 'Job',
        metadata: {
            labels: (_a = {},
                _a[KUBEVIRT_VM_LATENCY_LABEL] = KUBEVIRT_STORAGE_LABEL_VALUE,
                _a),
            name: generateWithNumbers(name),
            namespace: namespace,
        },
        spec: {
            backoffLimit: 0,
            template: {
                spec: {
                    containers: [
                        {
                            env: [
                                { name: 'CONFIGMAP_NAMESPACE', value: namespace },
                                { name: 'CONFIGMAP_NAME', value: name },
                            ],
                            image: 'quay.io/kiagnose/kubevirt-storage-checkup:main',
                            imagePullPolicy: 'Always',
                            name: generateWithNumbers(name),
                        },
                    ],
                    restartPolicy: 'Never',
                    serviceAccount: STORAGE_CHECKUP_SA,
                },
            },
        },
    };
};
export var createStorageCheckup = function (namespace, timeOut, name) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, k8sCreate({
                    data: storageCheckupConfigMap(namespace, timeOut, name),
                    model: ConfigMapModel,
                })];
            case 1:
                _a.sent();
                return [2 /*return*/, k8sCreate({
                        data: storageCheckupJob(name, namespace),
                        model: JobModel,
                    })];
        }
    });
}); };
var installPermissions = function (namespace, clusterRoleBinding) { return __awaiter(void 0, void 0, void 0, function () {
    var e_1, subjectsExist, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Promise.allSettled([
                    k8sCreate({ data: serviceAccountResource(namespace), model: ServiceAccountModel }),
                    k8sCreate({ data: storageCheckupRole(namespace), model: RoleModel }),
                ])];
            case 1:
                _a.sent();
                return [4 /*yield*/, k8sCreate({ data: storageCheckupRoleBinding(namespace), model: RoleBindingModel })];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                _a.trys.push([3, 5, , 10]);
                return [4 /*yield*/, k8sCreate({
                        data: storageClusterRoleBinding(namespace),
                        model: ClusterRoleBindingModel,
                    })];
            case 4:
                _a.sent();
                return [3 /*break*/, 10];
            case 5:
                e_1 = _a.sent();
                subjectsExist = clusterRoleBinding === null || clusterRoleBinding === void 0 ? void 0 : clusterRoleBinding.subjects;
                _a.label = 6;
            case 6:
                _a.trys.push([6, 8, , 9]);
                return [4 /*yield*/, k8sPatch({
                        data: [
                            {
                                op: 'add',
                                path: "/subjects".concat(subjectsExist ? '/-' : ''),
                                value: subjectsExist
                                    ? { kind: 'ServiceAccount', name: STORAGE_CHECKUP_SA, namespace: namespace }
                                    : [{ kind: 'ServiceAccount', name: STORAGE_CHECKUP_SA, namespace: namespace }],
                            },
                        ],
                        model: ClusterRoleBindingModel,
                        resource: storageClusterRoleBinding(namespace),
                    })];
            case 7:
                _a.sent();
                return [3 /*break*/, 9];
            case 8:
                err_1 = _a.sent();
                kubevirtConsole.log('Failed to patch ClusterRoleBinding: ', err_1 === null || err_1 === void 0 ? void 0 : err_1.message);
                return [3 /*break*/, 9];
            case 9: return [3 /*break*/, 10];
            case 10: return [2 /*return*/];
        }
    });
}); };
var removePermissions = function (namespace, clusterRoleBinding) { return __awaiter(void 0, void 0, void 0, function () {
    var err_2;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                return [4 /*yield*/, Promise.allSettled([
                        k8sDelete({ model: ServiceAccountModel, resource: serviceAccountResource(namespace) }),
                        k8sDelete({ model: RoleModel, resource: storageCheckupRole(namespace) }),
                    ])];
            case 1:
                _b.sent();
                return [4 /*yield*/, k8sDelete({ model: RoleBindingModel, resource: storageCheckupRoleBinding(namespace) })];
            case 2:
                _b.sent();
                return [4 /*yield*/, k8sPatch({
                        data: [
                            {
                                op: 'replace',
                                path: '/subjects',
                                value: (_a = clusterRoleBinding === null || clusterRoleBinding === void 0 ? void 0 : clusterRoleBinding.subjects) === null || _a === void 0 ? void 0 : _a.filter(function (subject) { return (subject === null || subject === void 0 ? void 0 : subject.namespace) !== namespace; }),
                            },
                        ],
                        model: ClusterRoleBindingModel,
                        resource: storageClusterRoleBinding(namespace),
                    })];
            case 3:
                _b.sent();
                return [3 /*break*/, 5];
            case 4:
                err_2 = _b.sent();
                kubevirtConsole.log('Failed to remove permissions: ', err_2 === null || err_2 === void 0 ? void 0 : err_2.message);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
export var installOrRemoveCheckupsStoragePermissions = function (namespace, isPermitted, clusterRoleBinding) {
    try {
        return isPermitted
            ? removePermissions(namespace, clusterRoleBinding)
            : installPermissions(namespace, clusterRoleBinding);
    }
    catch (error) {
        return error;
    }
};
export var deleteStorageCheckup = function (resource, jobs) { return __awaiter(void 0, void 0, void 0, function () {
    var _i, jobs_1, job, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                return [4 /*yield*/, k8sDelete({ model: ConfigMapModel, resource: resource })];
            case 1:
                _a.sent();
                _i = 0, jobs_1 = jobs;
                _a.label = 2;
            case 2:
                if (!(_i < jobs_1.length)) return [3 /*break*/, 5];
                job = jobs_1[_i];
                return [4 /*yield*/, k8sDelete({ model: JobModel, resource: job })];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 2];
            case 5: return [3 /*break*/, 7];
            case 6:
                e_2 = _a.sent();
                kubevirtConsole.log(e_2 === null || e_2 === void 0 ? void 0 : e_2.message);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
export var rerunStorageCheckup = function (resource) { return __awaiter(void 0, void 0, void 0, function () {
    var isSucceeded;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                isSucceeded = ((_a = resource === null || resource === void 0 ? void 0 : resource.data) === null || _a === void 0 ? void 0 : _a[STATUS_SUCCEEDED]) === 'true';
                return [4 /*yield*/, k8sPatch({
                        data: __spreadArray([
                            { op: 'remove', path: "/data/".concat(STATUS_COMPILATION_TIME_STAMP) },
                            { op: 'remove', path: "/data/".concat(STATUS_SUCCEEDED) },
                            { op: 'remove', path: "/data/".concat(STATUS_FAILURE_REASON) },
                            { op: 'remove', path: "/data/".concat(STATUS_START_TIME_STAMP) }
                        ], (isSucceeded
                            ? [
                                { op: 'remove', path: "/data/".concat(STORAGE_CHECKUP_DEFAULT_STORAGE_CLASS) },
                                { op: 'remove', path: "/data/".concat(STORAGE_CHECKUP_LIVE_MIGRATION) },
                                { op: 'remove', path: "/data/".concat(STORAGE_CHECKUPS_UNSET_EFS_STORAGE_CLASS) },
                                { op: 'remove', path: "/data/".concat(STORAGE_CHECKUPS_WITH_NON_RBD_STORAGE_CLASS) },
                                { op: 'remove', path: "/data/".concat(STORAGE_CHECKUPS_VM_HOT_PLUG_VOLUME) },
                                { op: 'remove', path: "/data/".concat(STORAGE_CHECKUPS_BOOT_GOLDEN_IMAGE) },
                                { op: 'remove', path: "/data/".concat(STORAGE_CHECKUPS_STORAGE_WITH_RWX) },
                                { op: 'remove', path: "/data/".concat(STORAGE_CHECKUPS_WITH_CLAIM_PROPERTY_SETS) },
                                { op: 'remove', path: "/data/".concat(STORAGE_CHECKUPS_MISSING_VOLUME_SNAP_SHOT) },
                                { op: 'remove', path: "/data/".concat(STORAGE_CHECKUPS_GOLDEN_IMAGE_NOT_UP_TO_DATE) },
                                { op: 'remove', path: "/data/".concat(STORAGE_CHECKUPS_VM_VOLUME_CLONE) },
                            ]
                            : []), true),
                        model: ConfigMapModel,
                        resource: resource,
                    })];
            case 1:
                _b.sent();
                return [2 /*return*/, k8sCreate({
                        data: storageCheckupJob(resource.metadata.name, resource.metadata.namespace),
                        model: JobModel,
                    })];
        }
    });
}); };
//# sourceMappingURL=utils.js.map