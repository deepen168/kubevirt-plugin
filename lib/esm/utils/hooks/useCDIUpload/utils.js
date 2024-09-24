var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var _a, _b;
import produce from 'immer';
import DataVolumeModel from '@kubevirt-ui/kubevirt-api/console/models/DataVolumeModel';
import { PersistentVolumeClaimModel, UploadTokenRequestModel } from '@kubevirt-utils/models';
import { buildOwnerReference, getAPIVersionForModel } from '@kubevirt-utils/resources/shared';
import { getDataVolume, getPVC, } from '@kubevirt-utils/resources/template/hooks/useVmTemplateSource/utils';
import { k8sCreate, k8sDelete, k8sPatch, } from '@openshift-console/dynamic-plugin-sdk';
import { ProgressVariant } from '@patternfly/react-core';
import { t } from '../useKubevirtTranslation';
import { CDI_BIND_REQUESTED_ANNOTATION } from './consts';
export var UPLOAD_STATUS;
(function (UPLOAD_STATUS) {
    UPLOAD_STATUS["ALLOCATING"] = "ALLOCATING";
    UPLOAD_STATUS["CANCELED"] = "CANCELED";
    UPLOAD_STATUS["ERROR"] = "ERROR";
    UPLOAD_STATUS["SUCCESS"] = "SUCCESS";
    UPLOAD_STATUS["UPLOADING"] = "UPLOADING";
})(UPLOAD_STATUS || (UPLOAD_STATUS = {}));
export var UPLOAD_STATUS_LABELS = (_a = {},
    _a[UPLOAD_STATUS.ALLOCATING] = t('Allocating resources, please wait for upload to start.'),
    _a[UPLOAD_STATUS.CANCELED] = t('Canceled'),
    _a[UPLOAD_STATUS.ERROR] = t('Error'),
    _a[UPLOAD_STATUS.SUCCESS] = t('Success'),
    _a[UPLOAD_STATUS.UPLOADING] = t('Uploading'),
    _a);
export var uploadStatusToProgressVariant = (_b = {},
    _b[UPLOAD_STATUS.CANCELED] = ProgressVariant.warning,
    _b[UPLOAD_STATUS.ERROR] = ProgressVariant.danger,
    _b[UPLOAD_STATUS.SUCCESS] = ProgressVariant.success,
    _b);
var PVC_STATUS_DELAY = 2 * 1000;
var DV_UPLOAD_STATES = {
    READY: 'UploadReady',
    SCHEDULED: 'UploadScheduled',
};
var PVCInitError = /** @class */ (function (_super) {
    __extends(PVCInitError, _super);
    function PVCInitError() {
        // t('Data Volume failed to initiate upload.')
        return _super.call(this, 'Data Volume failed to initiate upload.') || this;
    }
    return PVCInitError;
}(Error));
export { PVCInitError };
export var delay = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); };
export var getUploadProxyURL = function (config) { var _a; return (_a = config === null || config === void 0 ? void 0 : config.status) === null || _a === void 0 ? void 0 : _a.uploadProxyURL; };
export var getUploadURL = function (uploadProxyURL) {
    return "https://".concat(uploadProxyURL, "/v1beta1/upload-form-async");
};
export var killUploadPVC = function (name, namespace) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, k8sDelete({ model: DataVolumeModel, resource: { metadata: { name: name, namespace: namespace } } })];
    });
}); };
var waitForUploadReady = function (dataVolume, counter) {
    if (counter === void 0) { counter = 30; }
    return __awaiter(void 0, void 0, void 0, function () {
        var dv, i;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    dv = dataVolume;
                    i = 0;
                    _d.label = 1;
                case 1:
                    if (!(i < counter)) return [3 /*break*/, 5];
                    if (((_a = dv === null || dv === void 0 ? void 0 : dv.status) === null || _a === void 0 ? void 0 : _a.phase) === DV_UPLOAD_STATES.READY) {
                        return [2 /*return*/, true];
                    }
                    return [4 /*yield*/, delay(PVC_STATUS_DELAY)];
                case 2:
                    _d.sent();
                    return [4 /*yield*/, getDataVolume((_b = dataVolume === null || dataVolume === void 0 ? void 0 : dataVolume.metadata) === null || _b === void 0 ? void 0 : _b.name, (_c = dataVolume === null || dataVolume === void 0 ? void 0 : dataVolume.metadata) === null || _c === void 0 ? void 0 : _c.namespace)];
                case 3:
                    dv = _d.sent();
                    _d.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 1];
                case 5: throw new PVCInitError();
            }
        });
    });
};
var createUploadToken = function (pvcName, namespace) { return __awaiter(void 0, void 0, void 0, function () {
    var tokenRequest, resource, error_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                tokenRequest = {
                    apiVersion: getAPIVersionForModel(UploadTokenRequestModel),
                    kind: UploadTokenRequestModel.kind,
                    metadata: {
                        name: pvcName,
                        namespace: namespace,
                    },
                    spec: {
                        pvcName: pvcName,
                    },
                    status: {},
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, k8sCreate({
                        data: tokenRequest,
                        model: UploadTokenRequestModel,
                    })];
            case 2:
                resource = _b.sent();
                return [2 /*return*/, (_a = resource === null || resource === void 0 ? void 0 : resource.status) === null || _a === void 0 ? void 0 : _a.token];
            case 3:
                error_1 = _b.sent();
                throw new Error(error_1.message);
            case 4: return [2 /*return*/];
        }
    });
}); };
export var createUploadPVC = function (dataVolume) { return __awaiter(void 0, void 0, void 0, function () {
    var dvName, namespace, updatedDataVolume, dv, token, error_2;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                dvName = (_a = dataVolume === null || dataVolume === void 0 ? void 0 : dataVolume.metadata) === null || _a === void 0 ? void 0 : _a.name;
                namespace = (_b = dataVolume === null || dataVolume === void 0 ? void 0 : dataVolume.metadata) === null || _b === void 0 ? void 0 : _b.namespace;
                updatedDataVolume = produce(dataVolume, function (dvDraft) {
                    var _a;
                    dvDraft.metadata.annotations = __assign(__assign({}, (dvDraft.metadata.annotations || {})), (_a = {}, _a[CDI_BIND_REQUESTED_ANNOTATION] = 'true', _a));
                });
                _c.label = 1;
            case 1:
                _c.trys.push([1, 5, , 6]);
                return [4 /*yield*/, k8sCreate({ data: updatedDataVolume, model: DataVolumeModel })];
            case 2:
                dv = _c.sent();
                return [4 /*yield*/, waitForUploadReady(dv)];
            case 3:
                _c.sent();
                return [4 /*yield*/, createUploadToken(dvName, namespace)];
            case 4:
                token = _c.sent();
                return [2 /*return*/, { token: token }];
            case 5:
                error_2 = _c.sent();
                if (error_2 instanceof PVCInitError) {
                    throw new PVCInitError();
                }
                throw new Error(error_2.message);
            case 6: return [2 /*return*/];
        }
    });
}); };
/**
 * while in wizard, the vm is not yet created so we wait for it to be created before adding ownerReference
 * @param vm - VirtualMachine
 * @param dataVolume - DataVolume
 * @returns - Promise
 */
export var addUploadDataVolumeOwnerReference = function (vm, dataVolume) {
    var _a, _b;
    // Since DV is GC we want underlying PVC to get ownerReference and to be associated with VM parent
    return getPVC((_a = dataVolume === null || dataVolume === void 0 ? void 0 : dataVolume.metadata) === null || _a === void 0 ? void 0 : _a.name, (_b = dataVolume === null || dataVolume === void 0 ? void 0 : dataVolume.metadata) === null || _b === void 0 ? void 0 : _b.namespace)
        .then(function (pvc) {
        var _a;
        return k8sPatch({
            data: [
                {
                    op: 'replace',
                    path: '/metadata/ownerReferences',
                    value: __spreadArray(__spreadArray([], (((_a = pvc === null || pvc === void 0 ? void 0 : pvc.metadata) === null || _a === void 0 ? void 0 : _a.ownerReferences) || []), true), [
                        buildOwnerReference(vm, { blockOwnerDeletion: false }),
                    ], false),
                },
            ],
            model: PersistentVolumeClaimModel,
            resource: pvc,
        });
    })
        .catch(function () { return Promise.resolve(); });
};
//# sourceMappingURL=utils.js.map