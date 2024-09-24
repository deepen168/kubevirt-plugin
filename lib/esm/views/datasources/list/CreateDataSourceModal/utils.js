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
var _a, _b;
import produce from 'immer';
import DataImportCronModel from '@kubevirt-ui/kubevirt-api/console/models/DataImportCronModel';
import DataSourceModel from '@kubevirt-ui/kubevirt-api/console/models/DataSourceModel';
import { CDI_BIND_REQUESTED_ANNOTATION } from '@kubevirt-utils/hooks/useCDIUpload/consts';
import { buildOwnerReference } from '@kubevirt-utils/resources/shared';
import { DATA_SOURCE_CRONJOB_LABEL } from '@kubevirt-utils/resources/template';
import { k8sCreate } from '@openshift-console/dynamic-plugin-sdk';
var initialDataSource = {
    apiVersion: 'cdi.kubevirt.io/v1beta1',
    kind: DataSourceModel.kind,
    metadata: {
        labels: (_a = {},
            _a[DATA_SOURCE_CRONJOB_LABEL] = '',
            _a),
        name: '',
        namespace: '',
    },
    spec: {
        source: {},
    },
};
var initialDataImportCron = {
    apiVersion: 'cdi.kubevirt.io/v1beta1',
    kind: DataImportCronModel.kind,
    metadata: {
        annotations: (_b = {},
            _b[CDI_BIND_REQUESTED_ANNOTATION] = 'true',
            _b),
        name: '',
        namespace: '',
    },
    spec: {
        managedDataSource: '',
        schedule: '',
        template: {
            spec: {},
        },
    },
};
export var createDataSourceWithImportCron = function (_a) {
    var importsToKeep = _a.importsToKeep, dataSourceName = _a.name, namespace = _a.namespace, schedule = _a.schedule, size = _a.size, url = _a.url;
    return __awaiter(void 0, void 0, void 0, function () {
        var dataImportCronName, dataImportCron, createdDataSource;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    dataImportCronName = "".concat(dataSourceName, "-import-cron");
                    dataImportCron = produce(initialDataImportCron, function (draft) {
                        draft.metadata.name = dataImportCronName;
                        draft.metadata.namespace = namespace;
                        draft.spec = {
                            garbageCollect: 'Outdated',
                            importsToKeep: importsToKeep,
                            managedDataSource: dataSourceName,
                            schedule: schedule,
                            template: {
                                spec: {
                                    source: {
                                        registry: {
                                            url: url,
                                        },
                                    },
                                    storage: {
                                        resources: {
                                            requests: {
                                                storage: size,
                                            },
                                        },
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
                    _b.sent();
                    return [4 /*yield*/, k8sCreate({
                            data: produce(initialDataSource, function (draft) {
                                var _a;
                                draft.metadata.name = dataSourceName;
                                draft.metadata.namespace = namespace;
                                draft.metadata.labels = (_a = {},
                                    _a[DATA_SOURCE_CRONJOB_LABEL] = dataImportCronName,
                                    _a);
                            }),
                            model: DataSourceModel,
                        })];
                case 2:
                    createdDataSource = _b.sent();
                    return [4 /*yield*/, k8sCreate({
                            data: produce(dataImportCron, function (draft) {
                                draft.metadata.ownerReferences = [
                                    buildOwnerReference(createdDataSource, { blockOwnerDeletion: false }),
                                ];
                            }),
                            model: DataImportCronModel,
                        })];
                case 3:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
};
//# sourceMappingURL=utils.js.map