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
import { ClusterRoleBindingModel, ClusterRoleModel, ConfigMapModel, JobModel, ServiceAccountModel, } from '@kubevirt-ui/kubevirt-api/console';
import { kubevirtConsole } from '@kubevirt-utils/utils/utils';
import { k8sCreate, k8sDelete, k8sPatch, } from '@openshift-console/dynamic-plugin-sdk';
import { CONFIGMAP_NAME, generateWithNumbers, KUBEVIRT_VM_LATENCY_LABEL, STATUS_COMPILATION_TIME_STAMP, STATUS_FAILURE_REASON, STATUS_START_TIME_STAMP, STATUS_SUCCEEDED, STATUS_TIMEOUT, } from '../../utils/utils';
export var KIAGNOSE_CONFIGMAP_ACCESS = 'kiagnose-configmap-access';
export var VM_LATENCY_CHECKUP_SA = 'vm-latency-checkup-sa';
export var KUBEVIRT_VM_LATENCY_CHECKER = 'kubevirt-vm-latency-checker';
export var KUBEVIRT_VM_LATENCY_LABEL_VALUE = 'kubevirt-vm-latency';
export var CONFIGMAP_NAMESPACE = 'CONFIGMAP_NAMESPACE';
export var STATUS_AVG_LATENCY_NANO = 'status.result.avgLatencyNanoSec';
export var STATUS_MAX_LATENCY_NANO = 'status.result.maxLatencyNanoSec';
export var STATUS_MEASUREMENT_DURATION = 'status.result.measurementDurationSec';
export var STATUS_MIN_LATENCY_NANO = 'status.result.minLatencyNanoSec';
export var STATUS_TARGET_NODE = 'status.result.targetNode';
export var STATUS_SOURCE_NODE = 'status.result.sourceNode';
export var STATUS_SAMPLE_DURATION = 'spec.param.sampleDurationSeconds';
export var STATUS_NAD_NAMESPACE = 'spec.param.networkAttachmentDefinitionNamespace';
export var STATUS_NAD_NAME = 'spec.param.networkAttachmentDefinitionName';
export var STATUS_MAX_DESIRED_LATENCY = 'spec.param.maxDesiredLatencyMilliseconds';
var serviceAccountResource = function (namespace) { return ({
    metadata: { name: VM_LATENCY_CHECKUP_SA, namespace: namespace },
}); };
var latencyCheckerClusterRole = {
    metadata: {
        name: KUBEVIRT_VM_LATENCY_CHECKER,
    },
    rules: [
        {
            apiGroups: ['kubevirt.io'],
            resources: ['virtualmachineinstances'],
            verbs: ['get', 'create', 'delete'],
        },
        {
            apiGroups: ['subresources.kubevirt.io'],
            resources: ['virtualmachineinstances/console'],
            verbs: ['get'],
        },
        {
            apiGroups: ['k8s.cni.cncf.io'],
            resources: ['network-attachment-definitions'],
            verbs: ['get'],
        },
    ],
};
var configMapClusterRole = {
    metadata: { name: KIAGNOSE_CONFIGMAP_ACCESS },
    rules: [
        {
            apiGroups: [''],
            resources: ['configmaps'],
            verbs: ['get', 'update'],
        },
    ],
};
var configMapClusterBinding = function (namespace) { return ({
    metadata: { name: KIAGNOSE_CONFIGMAP_ACCESS },
    roleRef: {
        apiGroup: 'rbac.authorization.k8s.io',
        kind: 'ClusterRole',
        name: KIAGNOSE_CONFIGMAP_ACCESS,
    },
    subjects: [{ kind: 'ServiceAccount', name: VM_LATENCY_CHECKUP_SA, namespace: namespace }],
}); };
var latencyCheckerClusterBinding = function (namespace) { return ({
    metadata: { name: KUBEVIRT_VM_LATENCY_CHECKER },
    roleRef: {
        apiGroup: 'rbac.authorization.k8s.io',
        kind: 'ClusterRole',
        name: KUBEVIRT_VM_LATENCY_CHECKER,
    },
    subjects: [
        {
            kind: 'ServiceAccount',
            name: VM_LATENCY_CHECKUP_SA,
            namespace: namespace,
        },
    ],
}); };
var installPromises = function (namespace) { return [
    k8sCreate({
        data: serviceAccountResource(namespace),
        model: ServiceAccountModel,
    }),
    k8sCreate({
        data: latencyCheckerClusterRole,
        model: ClusterRoleModel,
    }),
    k8sCreate({
        data: latencyCheckerClusterBinding(namespace),
        model: ClusterRoleBindingModel,
    }),
    k8sCreate({
        data: configMapClusterRole,
        model: ClusterRoleModel,
    }),
    k8sCreate({
        data: configMapClusterBinding(namespace),
        model: ClusterRoleBindingModel,
    }),
]; };
var removePromises = function (namespace) { return [
    k8sDelete({
        model: ServiceAccountModel,
        resource: serviceAccountResource(namespace),
    }),
    k8sDelete({
        model: ClusterRoleModel,
        resource: latencyCheckerClusterRole,
    }),
    k8sDelete({
        model: ClusterRoleBindingModel,
        resource: latencyCheckerClusterBinding(namespace),
    }),
    k8sDelete({
        model: ClusterRoleModel,
        resource: configMapClusterRole,
    }),
    k8sDelete({
        model: ClusterRoleBindingModel,
        resource: configMapClusterBinding(namespace),
    }),
]; };
var runPromises = function (promises) {
    try {
        return Promise.all(promises);
    }
    catch (error) {
        kubevirtConsole.log(error);
        return error;
    }
};
export var installOrRemoveCheckupsNetworkPermissions = function (namespace, remove) {
    return runPromises(remove ? removePromises(namespace) : installPromises(namespace));
};
export var findObjectByName = function (arr, name) {
    return (arr || []).find(function (obj) { var _a; return ((_a = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _a === void 0 ? void 0 : _a.name) === name; });
};
var createJob = function (name, namespace) {
    var _a;
    return k8sCreate({
        data: {
            metadata: {
                labels: (_a = {}, _a[KUBEVIRT_VM_LATENCY_LABEL] = KUBEVIRT_VM_LATENCY_LABEL_VALUE, _a),
                name: generateWithNumbers(name),
                namespace: namespace,
            },
            spec: {
                backoffLimit: 0,
                template: {
                    spec: {
                        containers: [
                            {
                                capabilities: { drop: ['ALL'] },
                                env: [
                                    {
                                        name: CONFIGMAP_NAMESPACE,
                                        value: namespace,
                                    },
                                    {
                                        name: CONFIGMAP_NAME,
                                        value: name,
                                    },
                                    {
                                        name: 'POD_UID',
                                        valueFrom: { fieldRef: { fieldPath: 'metadata.uid' } },
                                    },
                                ],
                                image: 'registry.redhat.io/container-native-virtualization/vm-network-latency-checkup-rhel9:v4.13.0',
                                name: VM_LATENCY_CHECKUP_SA,
                                runAsNonRoot: 'true',
                                seccompProfile: { type: 'RuntimeDefault' },
                                securityContext: { allowPrivilegeEscalation: false },
                            },
                        ],
                        restartPolicy: 'Never',
                        serviceAccountName: VM_LATENCY_CHECKUP_SA,
                    },
                },
            },
        },
        model: JobModel,
    });
};
export var createNetworkCheckup = function (_a) {
    var desiredLatency = _a.desiredLatency, name = _a.name, namespace = _a.namespace, nodeSource = _a.nodeSource, nodeTarget = _a.nodeTarget, sampleDuration = _a.sampleDuration, selectedNAD = _a.selectedNAD;
    return __awaiter(void 0, void 0, void 0, function () {
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, k8sCreate({
                        data: {
                            data: (_b = {},
                                _b[STATUS_MAX_DESIRED_LATENCY] = desiredLatency,
                                _b[STATUS_NAD_NAME] = selectedNAD,
                                _b[STATUS_NAD_NAMESPACE] = namespace,
                                _b[STATUS_SAMPLE_DURATION] = sampleDuration,
                                _b[STATUS_SOURCE_NODE] = nodeSource,
                                _b[STATUS_TARGET_NODE] = nodeTarget,
                                _b[STATUS_TIMEOUT] = '5m',
                                _b),
                            metadata: {
                                labels: (_c = {}, _c[KUBEVIRT_VM_LATENCY_LABEL] = KUBEVIRT_VM_LATENCY_LABEL_VALUE, _c),
                                name: name,
                                namespace: namespace,
                            },
                        },
                        model: ConfigMapModel,
                    })];
                case 1:
                    _d.sent();
                    return [4 /*yield*/, createJob(name, namespace)];
                case 2: return [2 /*return*/, _d.sent()];
            }
        });
    });
};
export var deleteNetworkCheckup = function (configMap, jobs) { return __awaiter(void 0, void 0, void 0, function () {
    var e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, k8sDelete({
                        model: ConfigMapModel,
                        resource: configMap,
                    })];
            case 1:
                _a.sent();
                jobs.map(function (job) {
                    return k8sDelete({
                        model: JobModel,
                        resource: job,
                    });
                });
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                kubevirtConsole.log(e_1 === null || e_1 === void 0 ? void 0 : e_1.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
export var rerunNetworkCheckup = function (resource) { return __awaiter(void 0, void 0, void 0, function () {
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
                                { op: 'remove', path: "/data/".concat(STATUS_AVG_LATENCY_NANO) },
                                { op: 'remove', path: "/data/".concat(STATUS_MAX_LATENCY_NANO) },
                                { op: 'remove', path: "/data/".concat(STATUS_MEASUREMENT_DURATION) },
                                { op: 'remove', path: "/data/".concat(STATUS_MIN_LATENCY_NANO) },
                            ]
                            : []), true),
                        model: ConfigMapModel,
                        resource: resource,
                    })];
            case 1:
                _b.sent();
                return [2 /*return*/, createJob(resource.metadata.name, resource.metadata.namespace)];
        }
    });
}); };
//# sourceMappingURL=utils.js.map