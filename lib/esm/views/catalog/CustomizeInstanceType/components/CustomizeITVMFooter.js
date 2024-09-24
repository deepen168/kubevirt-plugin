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
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom-v5-compat';
import { useInstanceTypeVMStore } from '@catalog/CreateFromInstanceTypes/state/useInstanceTypeVMStore';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import ErrorAlert from '@kubevirt-utils/components/ErrorAlert/ErrorAlert';
import { SecretSelectionOption } from '@kubevirt-utils/components/SSHSecretModal/utils/types';
import { createSSHSecret } from '@kubevirt-utils/components/SSHSecretModal/utils/utils';
import { logITFlowEvent } from '@kubevirt-utils/extensions/telemetry/telemetry';
import { CANCEL_CUSTOMIZE_VM_BUTTON_CLICKED, CUSTOMIZE_VM_FAILED, CUSTOMIZE_VM_SUCCEEDED, } from '@kubevirt-utils/extensions/telemetry/utils/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useKubevirtUserSettings from '@kubevirt-utils/hooks/useKubevirtUserSettings/useKubevirtUserSettings';
import { getResourceUrl } from '@kubevirt-utils/resources/shared';
import { clearCustomizeInstanceType, vmSignal } from '@kubevirt-utils/store/customizeInstanceType';
import { createHeadlessService } from '@kubevirt-utils/utils/headless-service';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { k8sCreate, useActiveNamespace } from '@openshift-console/dynamic-plugin-sdk';
import { Button, ButtonVariant, Checkbox, Split, SplitItem, Stack, StackItem, } from '@patternfly/react-core';
import './CustomizeITVMFooter.scss';
var CustomizeITVMFooter = function () {
    var t = useKubevirtTranslation().t;
    var navigate = useNavigate();
    var activeNamespace = useActiveNamespace()[0];
    var _a = useState(false), isSubmitting = _a[0], setIsSubmitting = _a[1];
    var _b = useState(null), error = _b[0], setError = _b[1];
    var _c = useInstanceTypeVMStore(), instanceTypeVMState = _c.instanceTypeVMState, setStartVM = _c.setStartVM, startVM = _c.startVM, vm = _c.vm, vmNamespaceTarget = _c.vmNamespaceTarget;
    var _d = useKubevirtUserSettings('ssh'), authorizedSSHKeys = _d[0], setAuthorizedSSHKeys = _d[1];
    var sshSecretCredentials = instanceTypeVMState.sshSecretCredentials;
    var _e = sshSecretCredentials || {}, applyKeyToProject = _e.applyKeyToProject, secretOption = _e.secretOption, sshPubKey = _e.sshPubKey, sshSecretName = _e.sshSecretName;
    return (React.createElement("footer", { className: "customize-it-vm-footer" },
        React.createElement(Stack, { hasGutter: true },
            React.createElement(StackItem, null,
                React.createElement(ErrorAlert, { error: error })),
            React.createElement(StackItem, null,
                React.createElement(Checkbox, { id: "start-after-create-checkbox", isChecked: startVM, label: t('Start this VirtualMachine after creation'), onChange: function (_, checked) { return setStartVM(checked); } })),
            React.createElement(StackItem, null),
            React.createElement("div", { "data-test-id": "create-virtual-machine" },
                React.createElement(Split, { hasGutter: true },
                    React.createElement(SplitItem, null,
                        React.createElement(Button, { onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                                var createdVM, err_1;
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (applyKeyToProject &&
                                                !isEmpty(sshSecretName) &&
                                                (authorizedSSHKeys === null || authorizedSSHKeys === void 0 ? void 0 : authorizedSSHKeys[vmNamespaceTarget]) !== sshSecretName) {
                                                setAuthorizedSSHKeys(__assign(__assign({}, authorizedSSHKeys), (_a = {}, _a[vmNamespaceTarget] = sshSecretName, _a)));
                                            }
                                            setIsSubmitting(true);
                                            setError(null);
                                            _b.label = 1;
                                        case 1:
                                            _b.trys.push([1, 3, 4, 5]);
                                            return [4 /*yield*/, k8sCreate({
                                                    data: vmSignal.value || vm,
                                                    model: VirtualMachineModel,
                                                })];
                                        case 2:
                                            createdVM = _b.sent();
                                            logITFlowEvent(CUSTOMIZE_VM_SUCCEEDED, createdVM);
                                            if (secretOption === SecretSelectionOption.addNew) {
                                                createSSHSecret(sshPubKey, sshSecretName, vmNamespaceTarget);
                                            }
                                            clearCustomizeInstanceType();
                                            createHeadlessService(createdVM);
                                            navigate(getResourceUrl({ model: VirtualMachineModel, resource: createdVM }));
                                            return [3 /*break*/, 5];
                                        case 3:
                                            err_1 = _b.sent();
                                            setError(err_1);
                                            logITFlowEvent(CUSTOMIZE_VM_FAILED, vm);
                                            return [3 /*break*/, 5];
                                        case 4:
                                            setIsSubmitting(false);
                                            return [7 /*endfinally*/];
                                        case 5: return [2 /*return*/];
                                    }
                                });
                            }); }, isLoading: isSubmitting, variant: ButtonVariant.primary }, t('Create VirtualMachine'))),
                    React.createElement(SplitItem, null,
                        React.createElement(Button, { onClick: function () {
                                logITFlowEvent(CANCEL_CUSTOMIZE_VM_BUTTON_CLICKED, vm);
                                clearCustomizeInstanceType();
                                navigate("/k8s/ns/".concat(activeNamespace, "/catalog"));
                            }, variant: ButtonVariant.link }, t('Cancel'))))))));
};
export default CustomizeITVMFooter;
//# sourceMappingURL=CustomizeITVMFooter.js.map