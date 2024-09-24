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
import { useCallback, useEffect, useState } from 'react';
import { ConfigMapModel, RoleBindingModel, RoleModel } from '@kubevirt-ui/kubevirt-api/console';
import { k8sCreate, k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
import { featuresConfigMapInitialState, featuresRole, featuresRoleBinding } from './constants';
import useFeaturesConfigMap from './useFeaturesConfigMap';
export var useFeatures = function (featureName) {
    var _a = useFeaturesConfigMap(), featuresConfigMapData = _a.featuresConfigMapData, isAdmin = _a.isAdmin;
    var featureConfigMap = featuresConfigMapData[0], loaded = featuresConfigMapData[1], loadError = featuresConfigMapData[2];
    var _b = useState(null), featureEnabled = _b[0], setFeatureEnabled = _b[1];
    var _c = useState(true), loading = _c[0], setLoading = _c[1];
    var _d = useState(null), error = _d[0], setError = _d[1];
    useEffect(function () {
        var _a, _b;
        if ((loadError === null || loadError === void 0 ? void 0 : loadError.code) === 404) {
            setError(loadError);
            var createResources = function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, k8sCreate({
                                data: featuresConfigMapInitialState,
                                model: ConfigMapModel,
                            })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, k8sCreate({
                                    data: featuresRole,
                                    model: RoleModel,
                                })];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, k8sCreate({
                                    data: featuresRoleBinding,
                                    model: RoleBindingModel,
                                })];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); };
            try {
                createResources();
                setFeatureEnabled(featuresConfigMapInitialState.data[featureName] === 'true');
                setLoading(false);
                setError(null);
            }
            catch (createError) {
                setError(createError);
            }
            return;
        }
        if (!loaded && loadError && (loadError === null || loadError === void 0 ? void 0 : loadError.code) !== 404) {
            setFeatureEnabled(false);
            setLoading(false);
        }
        if (loaded) {
            switch ((_a = featureConfigMap === null || featureConfigMap === void 0 ? void 0 : featureConfigMap.data) === null || _a === void 0 ? void 0 : _a[featureName]) {
                case 'true':
                    setFeatureEnabled(true);
                    break;
                case 'false': {
                    setFeatureEnabled(false);
                    break;
                }
                default:
                    setFeatureEnabled((_b = featureConfigMap === null || featureConfigMap === void 0 ? void 0 : featureConfigMap.data) === null || _b === void 0 ? void 0 : _b[featureName]);
            }
            setLoading(false);
            return;
        }
    }, [loadError, featureConfigMap, loaded, featureName, featureEnabled]);
    var toggleFeature = useCallback(function (value) { return __awaiter(void 0, void 0, void 0, function () {
        var promise, updateError_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setLoading(true);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, k8sPatch({
                            data: [{ op: 'replace', path: "/data/".concat(featureName), value: value.toString() }],
                            model: ConfigMapModel,
                            resource: featureConfigMap,
                        })];
                case 2:
                    promise = _b.sent();
                    setError(null);
                    setFeatureEnabled(((_a = promise === null || promise === void 0 ? void 0 : promise.data) === null || _a === void 0 ? void 0 : _a[featureName]) === 'true');
                    setLoading(false);
                    return [2 /*return*/, promise];
                case 3:
                    updateError_1 = _b.sent();
                    setLoading(false);
                    setError(updateError_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }, [featureConfigMap, featureName]);
    return {
        canEdit: isAdmin,
        error: error,
        featureEnabled: featureEnabled,
        loading: loading,
        toggleFeature: toggleFeature,
    };
};
//# sourceMappingURL=useFeatures.js.map