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
import DataImportCronModel from '@kubevirt-ui/kubevirt-api/console/models/DataImportCronModel';
import DataSourceModel from '@kubevirt-ui/kubevirt-api/console/models/DataSourceModel';
import { DATA_SOURCE_CRONJOB_LABEL } from '@kubevirt-utils/resources/template';
import { ensurePath } from '@kubevirt-utils/utils/utils';
import { k8sCreate, k8sDelete, k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
export var CRON_DOC_URL = 'https://www.redhat.com/sysadmin/automate-linux-tasks-cron';
export var onDataImportCronManageSubmit = function (_a) {
    var _b = _a.data, allowAutoUpdate = _b.allowAutoUpdate, importsToKeep = _b.importsToKeep, schedule = _b.schedule, url = _b.url, _c = _a.resources, dataImportCron = _c.dataImportCron, dataSource = _c.dataSource;
    return __awaiter(void 0, void 0, void 0, function () {
        var updateDataSourceLabel, e_1, updatedDataImportCron, e_2, e_3, e_4;
        var _d, _e, _f, _g, _h, _j, _k;
        return __generator(this, function (_l) {
            switch (_l.label) {
                case 0:
                    updateDataSourceLabel = function (dataSourceToUpdate, dataImportCronName) { return __awaiter(void 0, void 0, void 0, function () {
                        var updatedLabels;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    updatedLabels = produce(dataSourceToUpdate.metadata.labels, function (labels) {
                                        if (dataImportCronName) {
                                            labels[DATA_SOURCE_CRONJOB_LABEL] = dataImportCronName;
                                        }
                                        else {
                                            delete labels[DATA_SOURCE_CRONJOB_LABEL];
                                        }
                                    });
                                    return [4 /*yield*/, k8sPatch({
                                            data: [
                                                {
                                                    op: 'replace',
                                                    path: '/metadata/labels',
                                                    value: updatedLabels,
                                                },
                                            ],
                                            model: DataSourceModel,
                                            resource: dataSourceToUpdate,
                                        })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    _l.label = 1;
                case 1:
                    _l.trys.push([1, 6, , 7]);
                    if (!(!allowAutoUpdate && ((_e = (_d = dataSource === null || dataSource === void 0 ? void 0 : dataSource.metadata) === null || _d === void 0 ? void 0 : _d.labels) === null || _e === void 0 ? void 0 : _e[DATA_SOURCE_CRONJOB_LABEL]))) return [3 /*break*/, 3];
                    return [4 /*yield*/, updateDataSourceLabel(dataSource, null)];
                case 2:
                    _l.sent();
                    _l.label = 3;
                case 3:
                    if (!(allowAutoUpdate && !((_g = (_f = dataSource === null || dataSource === void 0 ? void 0 : dataSource.metadata) === null || _f === void 0 ? void 0 : _f.labels) === null || _g === void 0 ? void 0 : _g[DATA_SOURCE_CRONJOB_LABEL]))) return [3 /*break*/, 5];
                    return [4 /*yield*/, updateDataSourceLabel(dataSource, (_h = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.metadata) === null || _h === void 0 ? void 0 : _h.name)];
                case 4:
                    _l.sent();
                    _l.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    e_1 = _l.sent();
                    return [2 /*return*/, Promise.reject(e_1)];
                case 7:
                    updatedDataImportCron = produce(dataImportCron, function (dic) {
                        ensurePath(dic, 'spec.template.spec.source.registry.url');
                        // delete specific metadata fields from the DIC
                        delete dic.metadata.resourceVersion;
                        delete dic.metadata.creationTimestamp;
                        delete dic.metadata.generation;
                        delete dic.metadata.uid;
                        dic.spec.template.spec.source.registry.url = url;
                        dic.spec.importsToKeep = importsToKeep;
                        dic.spec.schedule = schedule;
                    });
                    _l.label = 8;
                case 8:
                    _l.trys.push([8, 10, , 11]);
                    return [4 /*yield*/, k8sCreate({
                            data: produce(updatedDataImportCron, function (dic) {
                                var _a;
                                dic.metadata.name = "".concat((_a = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.metadata) === null || _a === void 0 ? void 0 : _a.name, "-dry-run");
                            }),
                            model: DataImportCronModel,
                            queryParams: {
                                dryRun: 'All',
                                fieldManager: 'kubectl-create',
                            },
                        })];
                case 9:
                    _l.sent();
                    return [3 /*break*/, 11];
                case 10:
                    e_2 = _l.sent();
                    return [2 /*return*/, Promise.reject(e_2)];
                case 11:
                    _l.trys.push([11, 13, , 14]);
                    return [4 /*yield*/, k8sDelete({
                            model: DataImportCronModel,
                            name: (_j = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.metadata) === null || _j === void 0 ? void 0 : _j.name,
                            ns: (_k = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.metadata) === null || _k === void 0 ? void 0 : _k.namespace,
                            resource: dataImportCron,
                        })];
                case 12:
                    _l.sent();
                    return [3 /*break*/, 14];
                case 13:
                    e_3 = _l.sent();
                    return [3 /*break*/, 14];
                case 14:
                    _l.trys.push([14, 16, , 17]);
                    return [4 /*yield*/, k8sCreate({
                            data: updatedDataImportCron,
                            model: DataImportCronModel,
                        })];
                case 15: return [2 /*return*/, _l.sent()];
                case 16:
                    e_4 = _l.sent();
                    return [2 /*return*/, Promise.reject(e_4)];
                case 17: return [2 /*return*/];
            }
        });
    });
};
//# sourceMappingURL=utils.js.map