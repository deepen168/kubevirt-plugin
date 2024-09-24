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
import React, { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom-v5-compat';
import { useInstanceTypeVMStore } from '@catalog/CreateFromInstanceTypes/state/useInstanceTypeVMStore';
import { generateVM, useIsWindowsBootableVolume, } from '@catalog/CreateFromInstanceTypes/utils/utils';
import { ConfigMapModel } from '@kubevirt-ui/kubevirt-api/console';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import ErrorAlert from '@kubevirt-utils/components/ErrorAlert/ErrorAlert';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import { SecretSelectionOption } from '@kubevirt-utils/components/SSHSecretModal/utils/types';
import { createSSHSecret } from '@kubevirt-utils/components/SSHSecretModal/utils/utils';
import { AUTOUNATTEND, generateNewSysprepConfig, UNATTEND, } from '@kubevirt-utils/components/SysprepModal/sysprep-utils';
import { VirtualMachineDetailsTab } from '@kubevirt-utils/constants/tabs-constants';
import { logITFlowEvent } from '@kubevirt-utils/extensions/telemetry/telemetry';
import { CANCEL_CREATE_VM_BUTTON_CLICKED, CREATE_VM_BUTTON_CLICKED, CREATE_VM_FAILED, CREATE_VM_SUCCEEDED, CUSTOMIZE_VM_BUTTON_CLICKED, VIEW_YAML_AND_CLI_CLICKED, } from '@kubevirt-utils/extensions/telemetry/utils/constants';
import { useFeatures } from '@kubevirt-utils/hooks/useFeatures/useFeatures';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useKubevirtUserSettings from '@kubevirt-utils/hooks/useKubevirtUserSettings/useKubevirtUserSettings';
import useRHELAutomaticSubscription from '@kubevirt-utils/hooks/useRHELAutomaticSubscription/useRHELAutomaticSubscription';
import { getResourceUrl } from '@kubevirt-utils/resources/shared';
import { vmSignal } from '@kubevirt-utils/store/customizeInstanceType';
import { createHeadlessService } from '@kubevirt-utils/utils/headless-service';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { k8sCreate, useAccessReview } from '@openshift-console/dynamic-plugin-sdk';
import { useActiveNamespace } from '@openshift-console/dynamic-plugin-sdk';
import { Button, ButtonVariant, Checkbox, Split, SplitItem, Stack, StackItem, Tooltip, } from '@patternfly/react-core';
import { AUTOMATIC_UPDATE_FEATURE_NAME } from '../../../../clusteroverview/SettingsTab/ClusterTab/components/GuestManagmentSection/AutomaticSubscriptionRHELGuests/utils/constants';
import YamlAndCLIViewerModal from './components/YamlAndCLIViewerModal/YamlAndCLIViewerModal';
import './CreateVMFooter.scss';
var CreateVMFooter = function () {
    var t = useKubevirtTranslation().t;
    var navigate = useNavigate();
    var _a = useState(false), isSubmitting = _a[0], setIsSubmitting = _a[1];
    var _b = useState(null), error = _b[0], setError = _b[1];
    var createModal = useModal().createModal;
    var autoUpdateEnabled = useFeatures(AUTOMATIC_UPDATE_FEATURE_NAME).featureEnabled;
    var _c = useKubevirtUserSettings('ssh'), authorizedSSHKeys = _c[0], setAuthorizedSSHKeys = _c[1];
    var subscriptionData = useRHELAutomaticSubscription().subscriptionData;
    var activeNamespace = useActiveNamespace()[0];
    var _d = useInstanceTypeVMStore(), instanceTypeVMState = _d.instanceTypeVMState, setStartVM = _d.setStartVM, setVM = _d.setVM, startVM = _d.startVM, vmNamespaceTarget = _d.vmNamespaceTarget;
    var selectedBootableVolume = instanceTypeVMState.selectedBootableVolume, selectedInstanceType = instanceTypeVMState.selectedInstanceType, sshSecretCredentials = instanceTypeVMState.sshSecretCredentials, sysprepConfigMapData = instanceTypeVMState.sysprepConfigMapData, vmName = instanceTypeVMState.vmName;
    var _e = sshSecretCredentials || {}, applyKeyToProject = _e.applyKeyToProject, secretOption = _e.secretOption, sshPubKey = _e.sshPubKey, sshSecretName = _e.sshSecretName;
    var isWindowsOSVolume = useIsWindowsBootableVolume();
    var onCancel = useCallback(function () {
        logITFlowEvent(CANCEL_CREATE_VM_BUTTON_CLICKED, null, { vmName: vmName });
        navigate(getResourceUrl({ activeNamespace: activeNamespace, model: VirtualMachineModel }));
    }, [activeNamespace, navigate, vmName]);
    var canCreateVM = useAccessReview({
        group: VirtualMachineModel.apiGroup,
        namespace: vmNamespaceTarget,
        resource: VirtualMachineModel.plural,
        verb: 'create',
    })[0];
    var hasNameAndInstanceType = useMemo(function () { return !isEmpty(vmName) && !isEmpty(selectedInstanceType); }, [vmName, selectedInstanceType]);
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var vmToCreate;
        var _a;
        return __generator(this, function (_b) {
            setIsSubmitting(true);
            setError(null);
            vmToCreate = generateVM(instanceTypeVMState, vmNamespaceTarget, startVM, subscriptionData, autoUpdateEnabled);
            logITFlowEvent(CREATE_VM_BUTTON_CLICKED, vmToCreate);
            if (applyKeyToProject &&
                !isEmpty(sshSecretName) &&
                (authorizedSSHKeys === null || authorizedSSHKeys === void 0 ? void 0 : authorizedSSHKeys[vmNamespaceTarget]) !== sshSecretName) {
                setAuthorizedSSHKeys(__assign(__assign({}, authorizedSSHKeys), (_a = {}, _a[vmNamespaceTarget] = sshSecretName, _a)));
            }
            return [2 /*return*/, k8sCreate({
                    data: vmToCreate,
                    model: VirtualMachineModel,
                })
                    .then(function (createdVM) { return __awaiter(void 0, void 0, void 0, function () {
                    var data, name_1, shouldCreateNewConfigMap, autounattend, unattended, configMap;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (secretOption === SecretSelectionOption.addNew) {
                                    createSSHSecret(sshPubKey, sshSecretName, vmNamespaceTarget);
                                }
                                if (!isWindowsOSVolume) return [3 /*break*/, 2];
                                data = sysprepConfigMapData.data, name_1 = sysprepConfigMapData.name, shouldCreateNewConfigMap = sysprepConfigMapData.shouldCreateNewConfigMap;
                                autounattend = data.autounattend, unattended = data.unattended;
                                if (!shouldCreateNewConfigMap) return [3 /*break*/, 2];
                                configMap = generateNewSysprepConfig({
                                    data: (_a = {}, _a[AUTOUNATTEND] = autounattend, _a[UNATTEND] = unattended, _a),
                                    sysprepName: name_1,
                                });
                                return [4 /*yield*/, k8sCreate({
                                        data: configMap,
                                        model: ConfigMapModel,
                                        ns: vmNamespaceTarget,
                                    })];
                            case 1:
                                _b.sent();
                                _b.label = 2;
                            case 2:
                                createHeadlessService(createdVM);
                                navigate(getResourceUrl({ model: VirtualMachineModel, resource: createdVM }));
                                logITFlowEvent(CREATE_VM_SUCCEEDED, createdVM);
                                return [2 /*return*/];
                        }
                    });
                }); })
                    .catch(function (err) {
                    setError(err);
                    logITFlowEvent(CREATE_VM_FAILED, null, { vmName: vmName });
                })
                    .finally(function () { return setIsSubmitting(false); })];
        });
    }); };
    var handleCustomize = function () { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsSubmitting(true);
                    setError(null);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, setVM(generateVM(instanceTypeVMState, vmNamespaceTarget, startVM, subscriptionData, autoUpdateEnabled))];
                case 2:
                    _a.sent();
                    vmSignal.value = generateVM(instanceTypeVMState, vmNamespaceTarget, startVM, subscriptionData, autoUpdateEnabled);
                    logITFlowEvent(CUSTOMIZE_VM_BUTTON_CLICKED, vmSignal.value);
                    navigate("/k8s/ns/".concat(vmNamespaceTarget, "/catalog/review/").concat(VirtualMachineDetailsTab.Configurations));
                    return [3 /*break*/, 5];
                case 3:
                    err_1 = _a.sent();
                    setError(err_1);
                    return [3 /*break*/, 5];
                case 4:
                    setIsSubmitting(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var isDisabled = isSubmitting || isEmpty(selectedBootableVolume) || !canCreateVM || !hasNameAndInstanceType;
    return (React.createElement("footer", { className: "create-vm-instance-type-footer" },
        React.createElement(Stack, { hasGutter: true },
            error && (React.createElement(StackItem, null,
                React.createElement(ErrorAlert, { error: error }))),
            React.createElement(StackItem, null,
                React.createElement(Checkbox, { id: "start-after-creation-checkbox", isChecked: startVM, label: t('Start this VirtualMachine after creation'), onChange: function (_event, val) { return setStartVM(val); } })),
            React.createElement(StackItem, null,
                React.createElement(Split, { hasGutter: true },
                    React.createElement(SplitItem, null,
                        React.createElement(Tooltip, { content: React.createElement(Stack, { className: "cpu-helper-text__body-content" }, t('Ask your cluster administrator for access permissions.')), hidden: !isDisabled },
                            React.createElement(Button, { isAriaDisabled: isDisabled, isLoading: isSubmitting, onClick: handleSubmit, variant: ButtonVariant.primary }, t('Create VirtualMachine')))),
                    React.createElement(SplitItem, null,
                        React.createElement(Button, { isDisabled: isSubmitting ||
                                isEmpty(selectedBootableVolume) ||
                                !canCreateVM ||
                                !hasNameAndInstanceType, isLoading: isSubmitting, onClick: handleCustomize, variant: ButtonVariant.secondary }, t('Customize VirtualMachine'))),
                    React.createElement(SplitItem, null,
                        React.createElement(Button, { onClick: onCancel, variant: ButtonVariant.link }, t('Cancel'))),
                    React.createElement(SplitItem, { isFilled: true }),
                    React.createElement(SplitItem, null,
                        React.createElement(Button, { onClick: function () {
                                logITFlowEvent(VIEW_YAML_AND_CLI_CLICKED, null, { vmName: vmName });
                                createModal(function (props) { return (React.createElement(YamlAndCLIViewerModal, __assign({ vm: generateVM(instanceTypeVMState, vmNamespaceTarget, startVM, subscriptionData, autoUpdateEnabled) }, props))); });
                            }, isDisabled: isEmpty(selectedBootableVolume) || !hasNameAndInstanceType, variant: ButtonVariant.secondary }, t('View YAML & CLI'))))))));
};
export default CreateVMFooter;
//# sourceMappingURL=CreateVMFooter.js.map