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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
import { useCallback, useEffect, useState } from 'react';
import { SecretModel } from '@kubevirt-ui/kubevirt-api/console';
import useKubevirtUserSettings from '@kubevirt-utils/hooks/useKubevirtUserSettings/useKubevirtUserSettings';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { k8sGet } from '@openshift-console/dynamic-plugin-sdk';
import { initialAuthKeyRow } from '../utils/constants';
import useSSHAuthProjects from './useSSHAuthProjects';
var filterAuthRows = function (rows) { return __awaiter(void 0, void 0, void 0, function () {
    var filteredRowsPromises;
    return __generator(this, function (_a) {
        filteredRowsPromises = rows.map(function (row) { return __awaiter(void 0, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, k8sGet({
                                model: SecretModel,
                                name: row.secretName,
                                ns: row.projectName,
                            })];
                    case 1:
                        _a.sent(); // Assuming k8sGet returns an object or throws an error
                        return [2 /*return*/, row];
                    case 2:
                        error_1 = _a.sent();
                        // If an error occurs during k8sGet, return a new object representing the error
                        return [2 /*return*/, __assign(__assign({}, row), { secretName: '' })];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/, Promise.all(filteredRowsPromises)];
    });
}); };
var useSSHAuthKeys = function () {
    var _a = useKubevirtUserSettings('ssh'), _b = _a[0], authorizedSSHKeys = _b === void 0 ? {} : _b, updateAuthorizedSSHKeys = _a[1], loadedSettings = _a[2];
    var _c = useState([initialAuthKeyRow]), authKeyRows = _c[0], setAuthKeyRows = _c[1];
    var _d = useState(true), isInitEffect = _d[0], setIsInitEffect = _d[1];
    var _e = useState(true), loading = _e[0], setLoading = _e[1];
    useEffect(function () {
        if (loadedSettings && isInitEffect) {
            if (!isEmpty(authorizedSSHKeys)) {
                var authRows = Object.entries(authorizedSSHKeys).map(function (_a, id) {
                    var projectName = _a[0], secretName = _a[1];
                    return ({
                        id: id,
                        projectName: projectName,
                        secretName: secretName,
                    });
                });
                filterAuthRows(authRows)
                    .then(function (filteredRows) {
                    setAuthKeyRows(filteredRows);
                })
                    .finally(function () { return setLoading(false); });
            }
            else {
                setLoading(false);
            }
            setIsInitEffect(false);
        }
    }, [loadedSettings, authorizedSSHKeys, isInitEffect]);
    var _f = useSSHAuthProjects(authKeyRows), loaded = _f.loaded, selectableProjects = _f.selectableProjects;
    var onAuthKeyAdd = useCallback(function () {
        setAuthKeyRows(function (prevKeys) { return __spreadArray(__spreadArray([], prevKeys, true), [
            { id: prevKeys.at(-1).id + 1, projectName: '', secretName: '' },
        ], false); });
    }, []);
    var onAuthKeyChange = useCallback(function (updatedKey) {
        var _a;
        setAuthKeyRows(function (prevKeys) {
            return prevKeys.map(function (key) { return (key.id === updatedKey.id ? updatedKey : key); });
        });
        var projectName = updatedKey.projectName, secretName = updatedKey.secretName;
        if (!isEmpty(projectName) && !isEmpty(secretName)) {
            updateAuthorizedSSHKeys(__assign(__assign({}, authorizedSSHKeys), (_a = {}, _a[projectName] = secretName, _a)));
        }
    }, [authorizedSSHKeys, updateAuthorizedSSHKeys]);
    var onAuthKeyDelete = useCallback(function (keyToRemove) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _a = authorizedSSHKeys, _b = keyToRemove.projectName, _ = _a[_b], rest = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
        updateAuthorizedSSHKeys(rest);
        setAuthKeyRows(function (prevKeys) {
            var updatedKeys = prevKeys.filter(function (_a) {
                var id = _a.id;
                return id !== keyToRemove.id;
            });
            return isEmpty(updatedKeys) ? [initialAuthKeyRow] : updatedKeys;
        });
    }, [authorizedSSHKeys, updateAuthorizedSSHKeys]);
    return {
        authKeyRows: authKeyRows,
        loaded: loaded && loadedSettings && !loading,
        onAuthKeyAdd: onAuthKeyAdd,
        onAuthKeyChange: onAuthKeyChange,
        onAuthKeyDelete: onAuthKeyDelete,
        selectableProjects: selectableProjects,
    };
};
export default useSSHAuthKeys;
//# sourceMappingURL=useSSHAuthKeys.js.map