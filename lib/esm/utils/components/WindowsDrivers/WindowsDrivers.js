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
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { mountWinDriversToVM } from '@kubevirt-utils/resources/vm/utils/disk/drivers';
import { Alert, AlertVariant, Checkbox, Flex, FlexItem } from '@patternfly/react-core';
import { removeWindowsDrivers, useDriversImage } from './utils';
var WindowsDrivers = function (_a) {
    var isWindows = _a.isWindows, updateVM = _a.updateVM, vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var _b = useState(null), isChecked = _b[0], setIsChecked = _b[1];
    var _c = useState(undefined), error = _c[0], setError = _c[1];
    var _d = useState(false), loading = _d[0], setLoading = _d[1];
    var _e = useDriversImage(), driversImage = _e[0], driversImageLoading = _e[1];
    var windowsDriver = useMemo(function () {
        var _a, _b, _c, _d;
        return (_d = (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.volumes) === null || _d === void 0 ? void 0 : _d.find(function (volume) { var _a; return ((_a = volume.containerDisk) === null || _a === void 0 ? void 0 : _a.image) === driversImage; });
    }, [vm, driversImage]);
    useEffect(function () {
        var updateDisk = function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        setIsChecked(isWindows || !!windowsDriver);
                        _a = isWindows && !windowsDriver;
                        if (!_a) return [3 /*break*/, 3];
                        _b = updateVM;
                        return [4 /*yield*/, mountWinDriversToVM(vm)];
                    case 1: return [4 /*yield*/, _b.apply(void 0, [_c.sent()])];
                    case 2:
                        _a = (_c.sent());
                        _c.label = 3;
                    case 3:
                        _a;
                        return [2 /*return*/];
                }
            });
        }); };
        isChecked === null && !driversImageLoading && updateDisk();
    }, [isChecked, isWindows, updateVM, driversImageLoading, vm, windowsDriver]);
    var onChange = useCallback(function (checked) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, apiError_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    setLoading(true);
                    setIsChecked(checked);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 6, 7, 8]);
                    _a = updateVM;
                    if (!checked) return [3 /*break*/, 3];
                    return [4 /*yield*/, mountWinDriversToVM(vm)];
                case 2:
                    _b = _c.sent();
                    return [3 /*break*/, 4];
                case 3:
                    _b = removeWindowsDrivers(vm, windowsDriver === null || windowsDriver === void 0 ? void 0 : windowsDriver.name);
                    _c.label = 4;
                case 4: return [4 /*yield*/, _a.apply(void 0, [_b])];
                case 5:
                    _c.sent();
                    setError(undefined);
                    return [3 /*break*/, 8];
                case 6:
                    apiError_1 = _c.sent();
                    setError(apiError_1);
                    return [3 /*break*/, 8];
                case 7:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }); }, [updateVM, vm, windowsDriver === null || windowsDriver === void 0 ? void 0 : windowsDriver.name]);
    if (loading || driversImageLoading)
        return React.createElement(Loading, null);
    return (React.createElement(Flex, null,
        React.createElement(FlexItem, null,
            React.createElement(Checkbox, { className: "pf-u-mt-md pf-u-display-flex pf-u-align-items-center", "data-test-id": "cdrom-drivers", id: "cdrom-drivers", isChecked: isChecked, isDisabled: loading || driversImageLoading, label: t('Mount Windows drivers disk'), onChange: function (_, checked) { return onChange(checked); } })),
        error && (React.createElement(FlexItem, null,
            React.createElement(Alert, { isInline: true, title: t('Error'), variant: AlertVariant.danger }, error.message)))));
};
export default WindowsDrivers;
//# sourceMappingURL=WindowsDrivers.js.map