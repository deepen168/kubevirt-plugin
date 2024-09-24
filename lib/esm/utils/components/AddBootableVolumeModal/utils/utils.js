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
import { DEFAULT_INSTANCETYPE_LABEL } from '@catalog/CreateFromInstanceTypes/utils/constants';
import DataImportCronModel from '@kubevirt-ui/kubevirt-api/console/models/DataImportCronModel';
import DataSourceModel from '@kubevirt-ui/kubevirt-api/console/models/DataSourceModel';
import DataVolumeModel from '@kubevirt-ui/kubevirt-api/console/models/DataVolumeModel';
import { KUBEVIRT_ISO_LABEL } from '@kubevirt-utils/resources/bootableresources/constants';
import { buildOwnerReference } from '@kubevirt-utils/resources/shared';
import { DATA_SOURCE_CRONJOB_LABEL } from '@kubevirt-utils/resources/template';
import { appendDockerPrefix, getRandomChars } from '@kubevirt-utils/utils/utils';
import { k8sCreate } from '@openshift-console/dynamic-plugin-sdk';
import { DROPDOWN_FORM_SELECTION, emptySourceDataVolume, initialDataImportCron, } from './constants';
export var createBootableVolume = function (_a) {
    var applyStorageProfileSettings = _a.applyStorageProfileSettings, bootableVolume = _a.bootableVolume, claimPropertySets = _a.claimPropertySets, onCreateVolume = _a.onCreateVolume, sourceType = _a.sourceType, uploadData = _a.uploadData;
    return function (dataSource) { return __awaiter(void 0, void 0, void 0, function () {
        var bootableVolumeNamespace, draftDataSource, actionBySourceType, newDataSource;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    bootableVolumeNamespace = bootableVolume.bootableVolumeNamespace;
                    draftDataSource = setDataSourceMetadata(bootableVolume, bootableVolumeNamespace, dataSource);
                    actionBySourceType = (_a = {},
                        _a[DROPDOWN_FORM_SELECTION.UPLOAD_VOLUME] = function () {
                            return createBootableVolumeFromUpload(bootableVolume, bootableVolumeNamespace, applyStorageProfileSettings, claimPropertySets, draftDataSource, uploadData);
                        },
                        _a[DROPDOWN_FORM_SELECTION.USE_EXISTING_PVC] = function () {
                            return createPVCBootableVolume(bootableVolume, bootableVolumeNamespace, applyStorageProfileSettings, claimPropertySets, draftDataSource);
                        },
                        _a[DROPDOWN_FORM_SELECTION.USE_REGISTRY] = function () {
                            return createDataSourceWithImportCron(bootableVolume, draftDataSource);
                        },
                        _a[DROPDOWN_FORM_SELECTION.USE_SNAPSHOT] = function () {
                            return createSnapshotDataSource(bootableVolume, draftDataSource);
                        },
                        _a);
                    return [4 /*yield*/, actionBySourceType[sourceType]()];
                case 1:
                    newDataSource = _b.sent();
                    onCreateVolume === null || onCreateVolume === void 0 ? void 0 : onCreateVolume(newDataSource);
                    return [2 /*return*/, newDataSource];
            }
        });
    }); };
};
export var getInstanceTypeFromVolume = function (bootableVolume) { var _a, _b, _c; return (_c = (_b = (_a = bootableVolume === null || bootableVolume === void 0 ? void 0 : bootableVolume.metadata) === null || _a === void 0 ? void 0 : _a.labels) === null || _b === void 0 ? void 0 : _b[DEFAULT_INSTANCETYPE_LABEL]) !== null && _c !== void 0 ? _c : ''; };
var getDataVolumeWithSource = function (bootableVolume, applyStorageProfileSettings, claimPropertySets, namespace, dataVolumeSource) {
    var _a = bootableVolume || {}, bootableVolumeName = _a.bootableVolumeName, labels = _a.labels, size = _a.size, storageClassName = _a.storageClassName;
    return produce(emptySourceDataVolume, function (draftBootableVolume) {
        var _a, _b;
        draftBootableVolume.metadata.name = bootableVolumeName;
        draftBootableVolume.metadata.namespace = namespace;
        draftBootableVolume.spec.storage.resources.requests.storage = size;
        draftBootableVolume.metadata.labels = labels;
        if (storageClassName) {
            draftBootableVolume.spec.storage.storageClassName = storageClassName;
        }
        if (!applyStorageProfileSettings) {
            draftBootableVolume.spec.storage.accessModes = (_a = claimPropertySets === null || claimPropertySets === void 0 ? void 0 : claimPropertySets[0]) === null || _a === void 0 ? void 0 : _a.accessModes;
            draftBootableVolume.spec.storage.volumeMode = (_b = claimPropertySets === null || claimPropertySets === void 0 ? void 0 : claimPropertySets[0]) === null || _b === void 0 ? void 0 : _b.volumeMode;
        }
        draftBootableVolume.spec.source = dataVolumeSource;
    });
};
var setDataSourceMetadata = function (bootableVolume, namespace, dataSource) {
    var _a = bootableVolume || {}, annotations = _a.annotations, bootableVolumeName = _a.bootableVolumeName, labels = _a.labels;
    return produce(dataSource, function (draftDS) {
        draftDS.metadata.name = bootableVolumeName;
        draftDS.metadata.namespace = namespace;
        draftDS.metadata.annotations = annotations;
        draftDS.metadata.labels = labels;
    });
};
var createBootableVolumeFromUpload = function (bootableVolume, namespace, applyStorageProfileSettings, claimPropertySets, draftDataSource, uploadData) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, isIso, uploadFile, bootableVolumeToCreate, dataSourceToCreate;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = bootableVolume || {}, isIso = _a.isIso, uploadFile = _a.uploadFile;
                bootableVolumeToCreate = getDataVolumeWithSource(bootableVolume, applyStorageProfileSettings, claimPropertySets, namespace, { upload: {} });
                dataSourceToCreate = produce(draftDataSource, function (draftDS) {
                    var _a;
                    if (isIso) {
                        draftDS.metadata.labels = __assign(__assign({}, (draftDS.metadata.labels || {})), (_a = {}, _a[KUBEVIRT_ISO_LABEL] = 'true', _a));
                    }
                    draftDS.spec.source = {
                        pvc: {
                            name: bootableVolumeToCreate.metadata.name,
                            namespace: bootableVolumeToCreate.metadata.namespace,
                        },
                    };
                });
                return [4 /*yield*/, uploadData({
                        dataVolume: bootableVolumeToCreate,
                        file: uploadFile,
                    })];
            case 1:
                _b.sent();
                return [4 /*yield*/, k8sCreate({ data: dataSourceToCreate, model: DataSourceModel })];
            case 2: return [2 /*return*/, _b.sent()];
        }
    });
}); };
var createSnapshotDataSource = function (bootableVolume, draftDataSource) { return __awaiter(void 0, void 0, void 0, function () {
    var dataSourceToCreate;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dataSourceToCreate = produce(draftDataSource, function (draftDS) {
                    draftDS.spec.source = {
                        snapshot: {
                            name: bootableVolume.snapshotName,
                            namespace: bootableVolume.snapshotNamespace,
                        },
                    };
                });
                return [4 /*yield*/, k8sCreate({ data: dataSourceToCreate, model: DataSourceModel })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var createPVCBootableVolume = function (bootableVolume, namespace, applyStorageProfileSettings, claimPropertySets, draftDataSource) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, pvcName, pvcNamespace, bootableVolumeToCreate, dataSourceToCreate, createdDS;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = bootableVolume || {}, pvcName = _a.pvcName, pvcNamespace = _a.pvcNamespace;
                bootableVolumeToCreate = getDataVolumeWithSource(bootableVolume, applyStorageProfileSettings, claimPropertySets, namespace, { pvc: { name: pvcName, namespace: pvcNamespace } });
                dataSourceToCreate = produce(draftDataSource, function (draftDS) {
                    draftDS.spec.source = {
                        pvc: {
                            name: bootableVolumeToCreate.metadata.name,
                            namespace: bootableVolumeToCreate.metadata.namespace,
                        },
                    };
                });
                return [4 /*yield*/, k8sCreate({ data: dataSourceToCreate, model: DataSourceModel })];
            case 1:
                createdDS = _b.sent();
                return [4 /*yield*/, k8sCreate({ data: bootableVolumeToCreate, model: DataVolumeModel })];
            case 2:
                _b.sent();
                return [2 /*return*/, createdDS];
        }
    });
}); };
export var createDataSourceWithImportCron = function (bootableVolume, initialDataSource) { return __awaiter(void 0, void 0, void 0, function () {
    var bootableVolumeName, cronExpression, registryURL, retainRevisions, size, storageClassName, dataImportCronName, dataImportCron, createdDataSource;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                bootableVolumeName = bootableVolume.bootableVolumeName, cronExpression = bootableVolume.cronExpression, registryURL = bootableVolume.registryURL, retainRevisions = bootableVolume.retainRevisions, size = bootableVolume.size, storageClassName = bootableVolume.storageClassName;
                dataImportCronName = "".concat(bootableVolumeName, "-import-cron-").concat(getRandomChars());
                dataImportCron = produce(initialDataImportCron, function (draft) {
                    var _a;
                    draft.metadata.name = dataImportCronName;
                    draft.metadata.namespace = (_a = initialDataSource === null || initialDataSource === void 0 ? void 0 : initialDataSource.metadata) === null || _a === void 0 ? void 0 : _a.namespace;
                    draft.spec = {
                        garbageCollect: 'Outdated',
                        importsToKeep: retainRevisions,
                        managedDataSource: bootableVolumeName,
                        schedule: cronExpression,
                        template: {
                            spec: {
                                source: {
                                    registry: {
                                        url: appendDockerPrefix(registryURL),
                                    },
                                },
                                storage: {
                                    resources: {
                                        requests: {
                                            storage: size,
                                        },
                                    },
                                    storageClassName: storageClassName,
                                },
                            },
                        },
                    };
                });
                // dry run to validate the DataImportCron
                return [4 /*yield*/, k8sCreate({
                        data: dataImportCron,
                        model: DataImportCronModel,
                        queryParams: {
                            dryRun: 'All',
                            fieldManager: 'kubectl-create',
                        },
                    })];
            case 1:
                // dry run to validate the DataImportCron
                _a.sent();
                return [4 /*yield*/, k8sCreate({
                        data: produce(initialDataSource, function (draftDataSource) {
                            draftDataSource.metadata.labels[DATA_SOURCE_CRONJOB_LABEL] = dataImportCronName;
                        }),
                        model: DataSourceModel,
                    })];
            case 2:
                createdDataSource = _a.sent();
                return [4 /*yield*/, k8sCreate({
                        data: produce(dataImportCron, function (draft) {
                            draft.metadata.ownerReferences = [
                                buildOwnerReference(createdDataSource, { blockOwnerDeletion: false }),
                            ];
                        }),
                        model: DataImportCronModel,
                    })];
            case 3:
                _a.sent();
                return [2 /*return*/, createdDataSource];
        }
    });
}); };
//# sourceMappingURL=utils.js.map