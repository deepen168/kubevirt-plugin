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
import * as React from 'react';
import axios from 'axios';
import { modelToGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import CDIConfigModel from '@kubevirt-ui/kubevirt-api/console/models/CDIConfigModel';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { useKubevirtTranslation } from '../useKubevirtTranslation';
import { createUploadPVC, getUploadProxyURL, getUploadURL, killUploadPVC, UPLOAD_STATUS, } from './utils';
var resource = {
    groupVersionKind: modelToGroupVersionKind(CDIConfigModel),
    isList: false,
    name: 'config',
    namespaced: false,
};
export var useCDIUpload = function () {
    var t = useKubevirtTranslation().t;
    var _a = useK8sWatchResource(resource), cdiConfig = _a[0], configLoaded = _a[1], configError = _a[2];
    var _b = React.useState(), upload = _b[0], setUpload = _b[1];
    var uploadProxyURL = getUploadProxyURL(cdiConfig);
    var uploadData = function (_a) {
        var dataVolume = _a.dataVolume, file = _a.file;
        return __awaiter(void 0, void 0, void 0, function () {
            var CancelToken, cancelSource, noRouteFound, newUpload, catchError_1, token, form, e_1, isCanceled;
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        CancelToken = axios.CancelToken;
                        cancelSource = CancelToken.source();
                        noRouteFound = configError || !configLoaded || !uploadProxyURL;
                        newUpload = {
                            cancelUpload: function () {
                                cancelSource.cancel();
                                setUpload(__assign(__assign({}, newUpload), { uploadStatus: UPLOAD_STATUS.CANCELED }));
                                return killUploadPVC(dataVolume.metadata.name, dataVolume.metadata.namespace);
                            },
                            fileName: file === null || file === void 0 ? void 0 : file.name,
                            namespace: dataVolume.metadata.namespace,
                            progress: 0,
                            pvcName: dataVolume.metadata.name,
                            uploadError: noRouteFound && {
                                message: t('No Upload URL found {{configError}}', { configError: configError }),
                            },
                            uploadStatus: noRouteFound ? UPLOAD_STATUS.ERROR : UPLOAD_STATUS.ALLOCATING,
                        };
                        // check for nullish values
                        if (!file || !dataVolume) {
                            return [2 /*return*/, Promise.reject({
                                    message: t('Missing required fields'),
                                })];
                        }
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios.get(getUploadURL(uploadProxyURL))];
                    case 2:
                        _d.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        catchError_1 = _d.sent();
                        if (((_b = catchError_1 === null || catchError_1 === void 0 ? void 0 : catchError_1.response) === null || _b === void 0 ? void 0 : _b.data) === undefined) {
                            return [2 /*return*/, Promise.reject({
                                    href: getUploadURL(uploadProxyURL),
                                    message: t('Invalid certificate, please visit the following URL and approve it'),
                                })];
                        }
                        return [3 /*break*/, 4];
                    case 4:
                        _d.trys.push([4, 7, , 8]);
                        if (noRouteFound) {
                            setUpload(newUpload);
                            throw new Error(t('No Upload URL found {{configError}}', { configError: configError }));
                        }
                        // allocating
                        setUpload(__assign(__assign({}, newUpload), { uploadStatus: UPLOAD_STATUS.ALLOCATING }));
                        return [4 /*yield*/, createUploadPVC(dataVolume)];
                    case 5:
                        token = (_d.sent()).token;
                        form = new FormData();
                        form.append('file', file);
                        return [4 /*yield*/, axios({
                                cancelToken: cancelSource.token,
                                data: form,
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                    'Content-Type': 'multipart/form-data',
                                },
                                method: 'POST',
                                onUploadProgress: function (e) {
                                    setUpload(__assign(__assign({}, newUpload), { progress: Math.floor((e.loaded / file.size) * 100), uploadStatus: UPLOAD_STATUS.UPLOADING }));
                                },
                                url: getUploadURL(uploadProxyURL),
                            })];
                    case 6:
                        _d.sent();
                        // finished uploading
                        setUpload(__assign(__assign({}, newUpload), { progress: 100, uploadStatus: UPLOAD_STATUS.SUCCESS }));
                        return [3 /*break*/, 8];
                    case 7:
                        e_1 = _d.sent();
                        isCanceled = axios.isCancel(e_1) || (e_1 === null || e_1 === void 0 ? void 0 : e_1.message.includes('not found'));
                        setUpload(__assign(__assign({}, newUpload), { uploadError: !isCanceled && { message: "".concat(e_1 === null || e_1 === void 0 ? void 0 : e_1.message, ": ").concat((_c = e_1 === null || e_1 === void 0 ? void 0 : e_1.response) === null || _c === void 0 ? void 0 : _c.data) }, uploadStatus: isCanceled ? UPLOAD_STATUS.CANCELED : UPLOAD_STATUS.ERROR }));
                        return [2 /*return*/, Promise.reject(isCanceled ? { message: t('Upload cancelled') } : e_1)];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    return {
        upload: upload,
        uploadData: uploadData,
    };
};
//# sourceMappingURL=useCDIUpload.js.map