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
import { DEFAULT_DISK_SIZE } from '@kubevirt-utils/components/DiskModal/utils/constants';
import { SOURCE_TYPES } from '../../utils/constants';
import { getDataSourceDataVolume } from '../editBootSource';
export var getDataVolumeSpec = function (dataSource) { return __awaiter(void 0, void 0, void 0, function () {
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
                return [2 /*return*/, dataVolume === null || dataVolume === void 0 ? void 0 : dataVolume.spec];
        }
    });
}); };
export var getSourceTypeFromDataVolumeSpec = function (dataVolumeSpec) {
    var _a, _b, _c;
    if ((_a = dataVolumeSpec === null || dataVolumeSpec === void 0 ? void 0 : dataVolumeSpec.source) === null || _a === void 0 ? void 0 : _a.pvc)
        return SOURCE_TYPES.pvcSource;
    if ((_b = dataVolumeSpec === null || dataVolumeSpec === void 0 ? void 0 : dataVolumeSpec.source) === null || _b === void 0 ? void 0 : _b.http)
        return SOURCE_TYPES.httpSource;
    if ((_c = dataVolumeSpec === null || dataVolumeSpec === void 0 ? void 0 : dataVolumeSpec.source) === null || _c === void 0 ? void 0 : _c.registry)
        return SOURCE_TYPES.registrySource;
};
export var getGenericSourceCustomization = function (diskSourceId, url, storage) {
    var _a;
    var dataVolumeSpec = {
        source: (_a = {},
            _a[diskSourceId] = {},
            _a),
        storage: {
            resources: {
                requests: {
                    storage: storage !== null && storage !== void 0 ? storage : DEFAULT_DISK_SIZE,
                },
            },
        },
    };
    if (url)
        dataVolumeSpec.source[diskSourceId].url = url;
    return dataVolumeSpec;
};
export var getPVCSource = function (pvcName, pvcNamespace, storage) {
    var dataVolumeSpec = {
        source: {
            pvc: {
                name: pvcName,
                namespace: pvcNamespace,
            },
        },
    };
    if (storage)
        dataVolumeSpec.storage = {
            resources: {
                requests: {
                    storage: storage,
                },
            },
        };
    return dataVolumeSpec;
};
var DOCKER_PREFIX = 'docker://';
export var appendDockerPrefix = function (image) {
    return (image === null || image === void 0 ? void 0 : image.startsWith(DOCKER_PREFIX)) ? image : DOCKER_PREFIX.concat(image);
};
//# sourceMappingURL=utils.js.map