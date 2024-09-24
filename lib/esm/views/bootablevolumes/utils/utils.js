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
import { PersistentVolumeClaimModel } from '@kubevirt-ui/kubevirt-api/console';
import DataSourceModel from '@kubevirt-ui/kubevirt-api/console/models/DataSourceModel';
import { DEFAULT_INSTANCETYPE_LABEL, DEFAULT_PREFERENCE_LABEL, } from '@kubevirt-utils/resources/bootableresources/constants';
import { isBootableVolumePVCKind } from '@kubevirt-utils/resources/bootableresources/helpers';
import { ANNOTATIONS, OS_NAME_TYPES } from '@kubevirt-utils/resources/template';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
export var getSourcePreferenceLabelValue = function (obj) { var _a, _b; return ((_b = (_a = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _a === void 0 ? void 0 : _a.labels) === null || _b === void 0 ? void 0 : _b[DEFAULT_PREFERENCE_LABEL]) || ''; };
export var getPreferenceReadableOS = function (obj, preferences) {
    var _a, _b;
    var preferenceLabelValue = getSourcePreferenceLabelValue(obj); // preference name
    var preferenceObject = preferences === null || preferences === void 0 ? void 0 : preferences.find(function (preference) { var _a; return ((_a = preference === null || preference === void 0 ? void 0 : preference.metadata) === null || _a === void 0 ? void 0 : _a.name) === preferenceLabelValue; });
    return ((_b = (_a = preferenceObject === null || preferenceObject === void 0 ? void 0 : preferenceObject.metadata) === null || _a === void 0 ? void 0 : _a.annotations) === null || _b === void 0 ? void 0 : _b[ANNOTATIONS.displayName]) || NO_DATA_DASH;
};
export var getPreferenceOSType = function (obj) {
    var _a;
    var preferenceLabelValue = getSourcePreferenceLabelValue(obj);
    return ((_a = Object.values(OS_NAME_TYPES).find(function (osName) { return preferenceLabelValue === null || preferenceLabelValue === void 0 ? void 0 : preferenceLabelValue.includes(osName); })) !== null && _a !== void 0 ? _a : OS_NAME_TYPES.other);
};
export var deleteBootableVolumeMetadata = function (obj) {
    var _a, _b;
    // labels object without default preference and instancetype labels
    var originalLabelsObject = Object.keys((_a = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _a === void 0 ? void 0 : _a.labels)
        .filter(function (key) { return ![DEFAULT_INSTANCETYPE_LABEL, DEFAULT_PREFERENCE_LABEL].includes(key); })
        .reduce(function (acc, key) {
        var _a;
        var _b, _c;
        return Object.assign(acc, (_a = {},
            _a[key] = (_c = (_b = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _b === void 0 ? void 0 : _b.labels) === null || _c === void 0 ? void 0 : _c[key],
            _a));
    }, {});
    var annotationsWithoutDescription = Object.keys(((_b = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _b === void 0 ? void 0 : _b.annotations) || {})
        .filter(function (key) { return key !== 'description'; })
        .reduce(function (acc, key) {
        var _a;
        var _b, _c;
        return Object.assign(acc, (_a = {},
            _a[key] = (_c = (_b = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _b === void 0 ? void 0 : _b.annotations) === null || _c === void 0 ? void 0 : _c[key],
            _a));
    }, {});
    return function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, k8sPatch({
                        data: [
                            {
                                op: 'replace',
                                path: '/metadata/labels',
                                value: originalLabelsObject,
                            },
                            {
                                op: 'replace',
                                path: '/metadata/annotations',
                                value: annotationsWithoutDescription,
                            },
                        ],
                        model: isBootableVolumePVCKind(obj) ? PersistentVolumeClaimModel : DataSourceModel,
                        resource: obj,
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
};
export var changeBootableVolumeMetadata = function (obj, metadata) { return function () { return __awaiter(void 0, void 0, void 0, function () {
    var initialMetadata, _a;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                initialMetadata = {
                    annotations: (_b = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _b === void 0 ? void 0 : _b.annotations,
                    labels: (_c = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _c === void 0 ? void 0 : _c.labels,
                };
                _a = initialMetadata !== metadata;
                if (!_a) return [3 /*break*/, 2];
                return [4 /*yield*/, k8sPatch({
                        data: [
                            {
                                op: 'replace',
                                path: '/metadata/labels',
                                value: metadata.labels,
                            },
                            {
                                op: 'replace',
                                path: '/metadata/annotations',
                                value: metadata.annotations,
                            },
                        ],
                        model: isBootableVolumePVCKind(obj) ? PersistentVolumeClaimModel : DataSourceModel,
                        resource: obj,
                    })];
            case 1:
                _a = (_d.sent());
                _d.label = 2;
            case 2:
                _a;
                return [2 /*return*/];
        }
    });
}); }; };
//# sourceMappingURL=utils.js.map