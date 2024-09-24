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
import React, { useEffect, useState } from 'react';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Alert, AlertVariant, ClipboardCopy, DescriptionListDescription, DescriptionListGroup, DescriptionListTerm, Flex, FlexItem, Stack, StackItem, } from '@patternfly/react-core';
import { SERVICE_TYPES } from '../constants';
import useSSHCommand, { isLoadBalancerBonded } from '../useSSHCommand';
import { createSSHService, deleteSSHService } from '../utils';
import SSHServiceSelect from './SSHServiceSelect';
import SSHServiceStateIcon from './SSHServiceState';
var SSHCommand = function (_a) {
    var _b;
    var initialSSHService = _a.sshService, sshServiceLoaded = _a.sshServiceLoaded, vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var _c = useState(), sshService = _c[0], setSSHService = _c[1];
    var _d = useSSHCommand(vm, sshService), command = _d.command, sshServiceRunning = _d.sshServiceRunning;
    var _e = useState(false), loading = _e[0], setLoading = _e[1];
    var _f = useState(), error = _f[0], setError = _f[1];
    var onSSHChange = function (newServiceType) { return __awaiter(void 0, void 0, void 0, function () {
        var newService, apiError_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, 7, 8]);
                    if (!sshService) return [3 /*break*/, 3];
                    return [4 /*yield*/, deleteSSHService(sshService)];
                case 2:
                    _a.sent();
                    setSSHService(null);
                    _a.label = 3;
                case 3:
                    if (!(newServiceType && newServiceType !== SERVICE_TYPES.NONE)) return [3 /*break*/, 5];
                    return [4 /*yield*/, createSSHService(vm, newServiceType, vmi)];
                case 4:
                    newService = _a.sent();
                    setSSHService(newService);
                    _a.label = 5;
                case 5: return [3 /*break*/, 8];
                case 6:
                    apiError_1 = _a.sent();
                    setError(apiError_1);
                    return [3 /*break*/, 8];
                case 7:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        setSSHService(initialSSHService);
        setError(undefined);
    }, [initialSSHService]);
    var showBondingWarning = ((_b = sshService === null || sshService === void 0 ? void 0 : sshService.spec) === null || _b === void 0 ? void 0 : _b.type) === SERVICE_TYPES.LOAD_BALANCER && !isLoadBalancerBonded(sshService);
    return (React.createElement(DescriptionListGroup, { className: "pf-c-description-list__group" },
        React.createElement(DescriptionListTerm, { className: "pf-u-font-size-xs" }, t('SSH service type')),
        React.createElement(DescriptionListDescription, { className: "pf-c-description-list__description" },
            React.createElement(Stack, { hasGutter: true },
                sshServiceLoaded && !loading ? (React.createElement(React.Fragment, null,
                    React.createElement(StackItem, null,
                        React.createElement(Flex, { direction: { default: 'row' } },
                            React.createElement(FlexItem, { flex: { default: 'flex_1' } },
                                React.createElement(SSHServiceSelect, { onSSHChange: onSSHChange, sshService: sshService, sshServiceLoaded: sshServiceLoaded })),
                            React.createElement(SSHServiceStateIcon, { sshService: sshService, sshServiceLoaded: sshServiceLoaded }))),
                    sshServiceRunning && !showBondingWarning && (React.createElement(StackItem, null,
                        React.createElement(ClipboardCopy, { clickTip: t('Copied'), "data-test": "ssh-command-copy", hoverTip: t('Copy to clipboard'), isReadOnly: true }, command))))) : (React.createElement(Loading, null)),
                error && (React.createElement(StackItem, null,
                    React.createElement(Alert, { isInline: true, title: t('Error'), variant: AlertVariant.danger }, error === null || error === void 0 ? void 0 : error.message)))))));
};
export default SSHCommand;
//# sourceMappingURL=SSHCommand.js.map