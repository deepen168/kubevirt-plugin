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
import DataSourceModel from '@kubevirt-ui/kubevirt-api/console/models/DataSourceModel';
import DataVolumeModel from '@kubevirt-ui/kubevirt-api/console/models/DataVolumeModel';
import { DEFAULT_NAMESPACE, ROOTDISK } from '@kubevirt-utils/constants/constants';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getTemplateVirtualMachineObject, poorManProcess, } from '@kubevirt-utils/resources/template';
import { getDataSource, getDataVolume, getPVC, } from '@kubevirt-utils/resources/template/hooks/useVmTemplateSource/utils';
import { getVolumes } from '@kubevirt-utils/resources/vm';
import { kubevirtConsole } from '@kubevirt-utils/utils/utils';
import { k8sCreate, k8sDelete } from '@openshift-console/dynamic-plugin-sdk';
import { appendDockerPrefix } from './components/utils';
import { MAXIMUM_TIMES_PVC_NOT_DELETED, TIMEOUT_PVC_GETS_DELETED_INTERVAL } from './constants';
var DATA_VOLUME = {
    apiVersion: "".concat(DataVolumeModel.apiGroup, "/").concat(DataVolumeModel.apiVersion),
    kind: DataVolumeModel.kind,
    metadata: {
        annotations: {
            'cdi.kubevirt.io/storage.bind.immediate.requested': 'true',
        },
    },
    spec: {},
};
export var createDataVolume = function (name, namespace, bootSource) {
    return produce(DATA_VOLUME, function (draftDataVolume) {
        var _a, _b, _c, _d;
        draftDataVolume.metadata = __assign(__assign({}, draftDataVolume.metadata), { name: name, namespace: namespace });
        if ((_b = (_a = bootSource === null || bootSource === void 0 ? void 0 : bootSource.source) === null || _a === void 0 ? void 0 : _a.registry) === null || _b === void 0 ? void 0 : _b.url) {
            bootSource.source.registry.url = appendDockerPrefix((_d = (_c = bootSource === null || bootSource === void 0 ? void 0 : bootSource.source) === null || _c === void 0 ? void 0 : _c.registry) === null || _d === void 0 ? void 0 : _d.url);
        }
        draftDataVolume.spec = bootSource;
    });
};
var getRootDiskDataVolumeTemplate = function (template) {
    var _a, _b, _c;
    var vm = getTemplateVirtualMachineObject(template);
    var rootVolume = (_a = getVolumes(vm)) === null || _a === void 0 ? void 0 : _a.find(function (volume) { return volume.name === ROOTDISK; });
    return (_c = (_b = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _b === void 0 ? void 0 : _b.dataVolumeTemplates) === null || _c === void 0 ? void 0 : _c.find(function (dataVolumeTemplate) { var _a, _b; return ((_a = rootVolume === null || rootVolume === void 0 ? void 0 : rootVolume.dataVolume) === null || _a === void 0 ? void 0 : _a.name) === ((_b = dataVolumeTemplate === null || dataVolumeTemplate === void 0 ? void 0 : dataVolumeTemplate.metadata) === null || _b === void 0 ? void 0 : _b.name); });
};
export var getBootDataSource = function (template) { return __awaiter(void 0, void 0, void 0, function () {
    var templateWithDefaultParameters, dataVolume;
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                templateWithDefaultParameters = poorManProcess(template);
                dataVolume = getRootDiskDataVolumeTemplate(templateWithDefaultParameters);
                if (!(((_b = (_a = dataVolume === null || dataVolume === void 0 ? void 0 : dataVolume.spec) === null || _a === void 0 ? void 0 : _a.sourceRef) === null || _b === void 0 ? void 0 : _b.kind) === DataSourceModel.kind &&
                    ((_d = (_c = dataVolume === null || dataVolume === void 0 ? void 0 : dataVolume.spec) === null || _c === void 0 ? void 0 : _c.sourceRef) === null || _d === void 0 ? void 0 : _d.name))) return [3 /*break*/, 2];
                return [4 /*yield*/, getDataSource((_f = (_e = dataVolume === null || dataVolume === void 0 ? void 0 : dataVolume.spec) === null || _e === void 0 ? void 0 : _e.sourceRef) === null || _f === void 0 ? void 0 : _f.name, ((_h = (_g = dataVolume === null || dataVolume === void 0 ? void 0 : dataVolume.spec) === null || _g === void 0 ? void 0 : _g.sourceRef) === null || _h === void 0 ? void 0 : _h.namespace) || dataVolume.metadata.namespace || DEFAULT_NAMESPACE)];
            case 1: return [2 /*return*/, _j.sent()];
            case 2: return [2 /*return*/];
        }
    });
}); };
export var getDataSourceDataVolume = function (dataSourcePVCName, dataSourcePVCNamespace) { return __awaiter(void 0, void 0, void 0, function () {
    var dataVolume, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dataVolume = null;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, getDataVolume(dataSourcePVCName, dataSourcePVCNamespace)];
            case 2:
                dataVolume = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                // If raised error means that dataVolume is not available
                kubevirtConsole.error(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/, dataVolume];
        }
    });
}); };
export var hasEditableBootSource = function (dataSource) {
    var _a;
    return dataSource && !((_a = dataSource.metadata.labels) === null || _a === void 0 ? void 0 : _a['cdi.kubevirt.io/dataImportCron']);
};
var waitPVCGetDeleted = function (name, namespace) {
    var timesPVCNotDeleted = 0;
    return new Promise(function (resolve, reject) {
        var pvcInterval = setInterval(function () {
            getPVC(name, namespace)
                .then(function () {
                timesPVCNotDeleted++;
                if (timesPVCNotDeleted === MAXIMUM_TIMES_PVC_NOT_DELETED) {
                    reject(new Error('PVC has not been deleted. Retry in a few minutes'));
                }
            })
                .catch(function () {
                clearInterval(pvcInterval);
                resolve();
            });
        }, TIMEOUT_PVC_GETS_DELETED_INTERVAL);
    });
};
export var editBootSource = function (dataSource, bootSource) { return __awaiter(void 0, void 0, void 0, function () {
    var dataSourcePVCName, dataSourcePVCNamespace, dataVolume;
    var _a, _b, _c, _d, _e, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                dataSourcePVCName = (_c = (_b = (_a = dataSource === null || dataSource === void 0 ? void 0 : dataSource.spec) === null || _a === void 0 ? void 0 : _a.source) === null || _b === void 0 ? void 0 : _b.pvc) === null || _c === void 0 ? void 0 : _c.name;
                dataSourcePVCNamespace = (_f = (_e = (_d = dataSource === null || dataSource === void 0 ? void 0 : dataSource.spec) === null || _d === void 0 ? void 0 : _d.source) === null || _e === void 0 ? void 0 : _e.pvc) === null || _f === void 0 ? void 0 : _f.namespace;
                return [4 /*yield*/, getDataSourceDataVolume(dataSourcePVCName, dataSourcePVCNamespace)];
            case 1:
                dataVolume = _g.sent();
                if (!dataVolume) return [3 /*break*/, 4];
                return [4 /*yield*/, k8sDelete({
                        model: DataVolumeModel,
                        resource: dataVolume,
                    })];
            case 2:
                _g.sent();
                return [4 /*yield*/, waitPVCGetDeleted(dataSourcePVCName, dataSourcePVCNamespace)];
            case 3:
                _g.sent();
                _g.label = 4;
            case 4: return [4 /*yield*/, k8sCreate({
                    data: createDataVolume(dataSourcePVCName, dataSourcePVCNamespace, bootSource),
                    model: DataVolumeModel,
                })];
            case 5:
                _g.sent();
                return [2 /*return*/];
        }
    });
}); };
export var getEditBootSourceRefDescription = function (dataSource, canEditBootSource) {
    if (!canEditBootSource)
        return t('This user is not allowed to edit this boot source');
    if (!dataSource)
        return t('Template does not use boot source reference');
    if (!hasEditableBootSource(dataSource))
        return t('Boot source reference cannot be edited');
};
//# sourceMappingURL=editBootSource.js.map