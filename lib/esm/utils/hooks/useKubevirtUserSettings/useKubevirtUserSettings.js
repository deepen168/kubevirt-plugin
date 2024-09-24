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
import { useEffect, useState } from 'react';
import { ConfigMapModel, modelToGroupVersionKind, RoleBindingModel, RoleModel, UserModel, } from '@kubevirt-ui/kubevirt-api/console';
import { OPENSHIFT_CNV } from '@kubevirt-utils/constants/constants';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { k8sCreate, useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { KUBEVIRT_USER_SETTINGS_CONFIG_MAP_NAME, userSettingsRole, userSettingsRoleBinding, } from './utils/const';
import userSettingsInitialState from './utils/userSettingsInitialState';
import { parseNestedJSON, patchUserConfigMap } from './utils/utils';
var useKubevirtUserSettings = function (key) {
    var _a, _b, _c;
    var _d = useState(), error = _d[0], setError = _d[1];
    var _e = useState(), userSettings = _e[0], setUserSettings = _e[1];
    var _f = useState(true), loading = _f[0], setLoading = _f[1];
    var _g = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(UserModel),
        name: '~',
    }), user = _g[0], loadedUser = _g[1], errorUser = _g[2];
    var userName = ((_a = user === null || user === void 0 ? void 0 : user.metadata) === null || _a === void 0 ? void 0 : _a.uid) || ((_c = (_b = user === null || user === void 0 ? void 0 : user.metadata) === null || _b === void 0 ? void 0 : _b.name) === null || _c === void 0 ? void 0 : _c.replace(/[^-._a-zA-Z0-9]+/g, '-'));
    var _h = useK8sWatchResource(userName && {
        groupVersionKind: modelToGroupVersionKind(ConfigMapModel),
        name: KUBEVIRT_USER_SETTINGS_CONFIG_MAP_NAME,
        namespace: OPENSHIFT_CNV,
    }), userConfigMap = _h[0], loadedConfigMap = _h[1], configMapError = _h[2];
    useEffect(function () {
        if (userName) {
            if ((configMapError === null || configMapError === void 0 ? void 0 : configMapError.code) === 404) {
                var createResources = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, k8sCreate({
                                    data: {
                                        data: (_a = {}, _a[userName] = JSON.stringify(userSettingsInitialState), _a),
                                        metadata: {
                                            name: KUBEVIRT_USER_SETTINGS_CONFIG_MAP_NAME,
                                            namespace: OPENSHIFT_CNV,
                                        },
                                    },
                                    model: ConfigMapModel,
                                })];
                            case 1:
                                _b.sent();
                                return [4 /*yield*/, k8sCreate({
                                        data: userSettingsRole,
                                        model: RoleModel,
                                    })];
                            case 2:
                                _b.sent();
                                return [4 /*yield*/, k8sCreate({
                                        data: userSettingsRoleBinding,
                                        model: RoleBindingModel,
                                    })];
                            case 3:
                                _b.sent();
                                return [2 /*return*/];
                        }
                    });
                }); };
                try {
                    createResources();
                    setError(null);
                }
                catch (e) {
                    setError(e);
                }
            }
            setLoading(false);
        }
    }, [configMapError === null || configMapError === void 0 ? void 0 : configMapError.code, userName, loadedConfigMap]);
    useEffect(function () {
        var _a;
        if (!isEmpty(userConfigMap) && userName) {
            setUserSettings((parseNestedJSON((_a = userConfigMap === null || userConfigMap === void 0 ? void 0 : userConfigMap.data) === null || _a === void 0 ? void 0 : _a[userName]) || {}));
        }
    }, [userConfigMap, userName]);
    var pushUserSettingsChanges = function (data, resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var apiError_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, patchUserConfigMap(userConfigMap, userName, data)];
                case 2:
                    _a.sent();
                    resolve(key ? data[key] : data);
                    return [3 /*break*/, 4];
                case 3:
                    apiError_1 = _a.sent();
                    setError(apiError_1);
                    reject(apiError_1);
                    return [3 /*break*/, 4];
                case 4:
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var updateUserSetting = function (val) {
        return new Promise(function (resolve, reject) {
            setUserSettings(function (prevUserSettings) {
                var _a;
                var data = key ? __assign(__assign({}, prevUserSettings), (_a = {}, _a[key] = val, _a)) : val;
                pushUserSettingsChanges(data, resolve, reject);
                return data;
            });
        });
    };
    var loadedCM = loadedConfigMap || !isEmpty(configMapError);
    return [
        key ? userSettings === null || userSettings === void 0 ? void 0 : userSettings[key] : userSettings,
        userSettings && updateUserSetting,
        !loading && loadedUser && loadedCM,
        error || errorUser || configMapError,
    ];
};
export default useKubevirtUserSettings;
//# sourceMappingURL=useKubevirtUserSettings.js.map