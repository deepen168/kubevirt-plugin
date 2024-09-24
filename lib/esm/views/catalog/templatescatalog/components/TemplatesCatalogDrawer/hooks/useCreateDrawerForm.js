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
import { useState } from 'react';
import { useNavigate } from 'react-router-dom-v5-compat';
import produce from 'immer';
import { AUTOMATIC_UPDATE_FEATURE_NAME } from 'src/views/clusteroverview/SettingsTab/ClusterTab/components/GuestManagmentSection/AutomaticSubscriptionRHELGuests/utils/constants';
import { quickCreateVM } from '@catalog/utils/quick-create-vm';
import { isRHELTemplate } from '@catalog/utils/utils';
import { useWizardVMContext } from '@catalog/utils/WizardVMContext';
import { ProcessedTemplatesModel, SecretModel, } from '@kubevirt-ui/kubevirt-api/console';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { updateCloudInitRHELSubscription } from '@kubevirt-utils/components/CloudinitModal/utils/cloudinit-utils';
import { SecretSelectionOption } from '@kubevirt-utils/components/SSHSecretModal/utils/types';
import { addSecretToVM, applyCloudDriveCloudInitVolume, createSSHSecret, } from '@kubevirt-utils/components/SSHSecretModal/utils/utils';
import { logTemplateFlowEvent } from '@kubevirt-utils/extensions/telemetry/telemetry';
import { CREATE_VM_BUTTON_CLICKED, CREATE_VM_FAILED, CREATE_VM_SUCCEEDED, CUSTOMIZE_VM_BUTTON_CLICKED, CUSTOMIZE_VM_FAILED, } from '@kubevirt-utils/extensions/telemetry/utils/constants';
import { DISABLED_GUEST_SYSTEM_LOGS_ACCESS } from '@kubevirt-utils/hooks/useFeatures/constants';
import { useFeatures } from '@kubevirt-utils/hooks/useFeatures/useFeatures';
import useKubevirtUserSettings from '@kubevirt-utils/hooks/useKubevirtUserSettings/useKubevirtUserSettings';
import { getAnnotation, getResourceUrl } from '@kubevirt-utils/resources/shared';
import { ANNOTATIONS, getTemplateOS, getTemplateVirtualMachineObject, LABEL_USED_TEMPLATE_NAME, LABEL_USED_TEMPLATE_NAMESPACE, } from '@kubevirt-utils/resources/template';
import { getMemoryCPU } from '@kubevirt-utils/resources/vm';
import { HEADLESS_SERVICE_LABEL, HEADLESS_SERVICE_NAME, } from '@kubevirt-utils/utils/headless-service';
import { ensurePath, isEmpty } from '@kubevirt-utils/utils/utils';
import { k8sCreate, useAccessReview, useK8sModels } from '@openshift-console/dynamic-plugin-sdk';
import { getLabels } from '../../../../../clusteroverview/OverviewTab/inventory-card/utils/flattenTemplates';
import { allRequiredParametersAreFulfilled, hasValidSource, uploadFiles } from '../utils';
import useCreateVMName from './useCreateVMName';
import { useDrawerContext } from './useDrawerContext';
var useCreateDrawerForm = function (namespace, subscriptionData, authorizedSSHKey) {
    var _a, _b;
    var _c = useWizardVMContext(), updateTabsData = _c.updateTabsData, updateVM = _c.updateVM;
    var _d = useKubevirtUserSettings('ssh'), authorizedSSHKeys = _d[0], updateAuthorizedSSHKeys = _d[1];
    var autoUpdateEnabled = useFeatures(AUTOMATIC_UPDATE_FEATURE_NAME).featureEnabled;
    var isDisabledGuestSystemLogs = useFeatures(DISABLED_GUEST_SYSTEM_LOGS_ACCESS).featureEnabled;
    var navigate = useNavigate();
    var _e = useDrawerContext(), cdFile = _e.cdFile, diskFile = _e.diskFile, isBootSourceAvailable = _e.isBootSourceAvailable, setVM = _e.setVM, sshDetails = _e.sshDetails, storageClassName = _e.storageClassName, storageClassRequired = _e.storageClassRequired, template = _e.template, uploadCDData = _e.uploadCDData, uploadDiskData = _e.uploadDiskData, vm = _e.vm;
    var _f = useCreateVMName(), nameField = _f.nameField, onVMNameChange = _f.onVMNameChange;
    var _g = useState(false), isQuickCreating = _g[0], setIsQuickCreating = _g[1];
    var _h = useState(false), isCustomizing = _h[0], setIsCustomizing = _h[1];
    var _j = useState(undefined), createError = _j[0], setCreateError = _j[1];
    var _k = useK8sModels(), models = _k[0], modelsLoading = _k[1];
    var processedTemplateAccessReview = useAccessReview({
        group: ProcessedTemplatesModel.apiGroup,
        namespace: namespace,
        resource: ProcessedTemplatesModel.plural,
        verb: 'create',
    })[0];
    var storageClassRequiredMissing = storageClassRequired && isEmpty(storageClassName);
    var onQuickCreate = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var templateToProcess, quickCreatedVM, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setIsQuickCreating(true);
                    setCreateError(undefined);
                    templateToProcess = produce(template, function (draftTemplate) {
                        var _a;
                        var _b, _c;
                        var vmObject = getTemplateVirtualMachineObject(draftTemplate);
                        if ((_b = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _b === void 0 ? void 0 : _b.template) {
                            ensurePath(vmObject, [
                                'spec.template.spec.domain.cpu',
                                'spec.template.spec.domain.memory.guest',
                            ]);
                            var _d = getMemoryCPU(vm), cpu = _d.cpu, memory = _d.memory;
                            vmObject.spec.template.spec.domain.cpu.cores = cpu === null || cpu === void 0 ? void 0 : cpu.cores;
                            vmObject.spec.template.spec.domain.memory.guest = memory;
                            if (!getLabels(vmObject.spec.template))
                                vmObject.spec.template.metadata.labels = {};
                            vmObject.spec.template.metadata.labels[HEADLESS_SERVICE_LABEL] = HEADLESS_SERVICE_NAME;
                            var modifiedTemplateObjects = (_c = template === null || template === void 0 ? void 0 : template.objects) === null || _c === void 0 ? void 0 : _c.map(function (obj) {
                                return obj.kind === VirtualMachineModel.kind ? vmObject : obj;
                            });
                            draftTemplate.objects = modifiedTemplateObjects;
                            if ((sshDetails === null || sshDetails === void 0 ? void 0 : sshDetails.sshSecretName) && (sshDetails === null || sshDetails === void 0 ? void 0 : sshDetails.applyKeyToProject)) {
                                updateAuthorizedSSHKeys(__assign(__assign({}, authorizedSSHKeys), (_a = {}, _a[namespace] = sshDetails === null || sshDetails === void 0 ? void 0 : sshDetails.sshSecretName, _a)));
                            }
                        }
                    });
                    logTemplateFlowEvent(CREATE_VM_BUTTON_CLICKED, template);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, 6, 7]);
                    return [4 /*yield*/, quickCreateVM({
                            models: models,
                            overrides: {
                                autoUpdateEnabled: autoUpdateEnabled,
                                isDisabledGuestSystemLogs: isDisabledGuestSystemLogs,
                                name: nameField,
                                namespace: namespace,
                                subscriptionData: subscriptionData,
                            },
                            template: templateToProcess,
                            uploadData: function (processedTemplate) {
                                return uploadFiles({
                                    cdFile: cdFile,
                                    diskFile: diskFile,
                                    namespace: namespace,
                                    updateTabsData: updateTabsData,
                                    uploadCDData: uploadCDData,
                                    uploadDiskData: uploadDiskData,
                                    vm: getTemplateVirtualMachineObject(processedTemplate),
                                });
                            },
                        })];
                case 2:
                    quickCreatedVM = _a.sent();
                    if (!((sshDetails === null || sshDetails === void 0 ? void 0 : sshDetails.secretOption) === SecretSelectionOption.addNew)) return [3 /*break*/, 4];
                    return [4 /*yield*/, createSSHSecret(sshDetails === null || sshDetails === void 0 ? void 0 : sshDetails.sshPubKey, sshDetails === null || sshDetails === void 0 ? void 0 : sshDetails.sshSecretName, namespace)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    setIsQuickCreating(false);
                    navigate(getResourceUrl({ model: VirtualMachineModel, resource: quickCreatedVM }));
                    logTemplateFlowEvent(CREATE_VM_SUCCEEDED, templateToProcess);
                    return [3 /*break*/, 7];
                case 5:
                    error_1 = _a.sent();
                    setCreateError(error_1);
                    logTemplateFlowEvent(CREATE_VM_FAILED, templateToProcess);
                    return [3 /*break*/, 7];
                case 6:
                    setIsQuickCreating(false);
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    var onCustomize = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var processedTemplate_1, vmObject_1, updatedVM, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setIsCustomizing(true);
                    setCreateError(undefined);
                    logTemplateFlowEvent(CUSTOMIZE_VM_BUTTON_CLICKED, template);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, k8sCreate({
                            data: __assign(__assign({}, template), { metadata: __assign(__assign({}, template === null || template === void 0 ? void 0 : template.metadata), { namespace: namespace }) }),
                            model: ProcessedTemplatesModel,
                            ns: namespace,
                            queryParams: {
                                dryRun: 'All',
                            },
                        })];
                case 2:
                    processedTemplate_1 = _a.sent();
                    return [4 /*yield*/, uploadFiles({
                            cdFile: cdFile,
                            diskFile: diskFile,
                            namespace: namespace,
                            updateTabsData: updateTabsData,
                            uploadCDData: uploadCDData,
                            uploadDiskData: uploadDiskData,
                            vm: getTemplateVirtualMachineObject(processedTemplate_1),
                        })];
                case 3:
                    vmObject_1 = _a.sent();
                    updatedVM = produce(vmObject_1, function (vmDraft) {
                        ensurePath(vmDraft, [
                            'spec.template.spec.domain.cpu',
                            'spec.template.spec.domain.memory.guest',
                        ]);
                        vmDraft.metadata.namespace = namespace;
                        vmDraft.metadata.labels[LABEL_USED_TEMPLATE_NAME] = template.metadata.name;
                        vmDraft.metadata.labels[LABEL_USED_TEMPLATE_NAMESPACE] = template.metadata.namespace;
                        var _a = getMemoryCPU(vm), cpu = _a.cpu, memory = _a.memory;
                        vmDraft.spec.template.spec.domain.cpu.cores = cpu === null || cpu === void 0 ? void 0 : cpu.cores;
                        vmDraft.spec.template.spec.domain.memory.guest = memory;
                        var updatedVolumes = applyCloudDriveCloudInitVolume(vmObject_1);
                        vmDraft.spec.template.spec.volumes = isRHELTemplate(processedTemplate_1)
                            ? updateCloudInitRHELSubscription(updatedVolumes, subscriptionData, autoUpdateEnabled)
                            : updatedVolumes;
                    });
                    updateTabsData(function (tabsDataDraft) {
                        // additional objects
                        tabsDataDraft.additionalObjects = processedTemplate_1.objects.filter(function (obj) {
                            return !isEmpty(authorizedSSHKey)
                                ? obj.kind !== VirtualMachineModel.kind && obj.kind !== SecretModel
                                : obj.kind !== VirtualMachineModel.kind;
                        });
                        // overview
                        ensurePath(tabsDataDraft, 'overview.templateMetadata');
                        tabsDataDraft.overview.templateMetadata.name = template.metadata.name;
                        tabsDataDraft.overview.templateMetadata.namespace = template.metadata.namespace;
                        tabsDataDraft.overview.templateMetadata.osType = getTemplateOS(template);
                        tabsDataDraft.overview.templateMetadata.displayName = getAnnotation(template, ANNOTATIONS.displayName);
                    });
                    updateTabsData(function (currentTabsData) {
                        currentTabsData.authorizedSSHKey = sshDetails === null || sshDetails === void 0 ? void 0 : sshDetails.sshSecretName;
                        currentTabsData.applySSHToSettings = sshDetails === null || sshDetails === void 0 ? void 0 : sshDetails.applyKeyToProject;
                    });
                    // update context vm
                    return [4 /*yield*/, updateVM(!isEmpty(authorizedSSHKey) ? addSecretToVM(updatedVM, authorizedSSHKey) : updatedVM)];
                case 4:
                    // update context vm
                    _a.sent();
                    navigate("/k8s/ns/".concat(namespace, "/catalog/template/review"));
                    return [3 /*break*/, 6];
                case 5:
                    error_2 = _a.sent();
                    setCreateError(error_2);
                    logTemplateFlowEvent(CUSTOMIZE_VM_FAILED, template);
                    return [3 /*break*/, 6];
                case 6:
                    setIsCustomizing(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var onChangeStartVM = function (checked) {
        setVM(produce(vm, function (draftVM) {
            delete draftVM.spec.runStrategy;
            draftVM.spec.running = checked;
        }));
    };
    return {
        createError: createError,
        isCustomizeDisabled: !processedTemplateAccessReview || isCustomizing,
        isCustomizeLoading: isCustomizing || modelsLoading,
        isQuickCreateDisabled: !isBootSourceAvailable ||
            isQuickCreating ||
            !nameField ||
            isEmpty(models) ||
            !allRequiredParametersAreFulfilled(template) ||
            !hasValidSource(template) ||
            storageClassRequiredMissing,
        isQuickCreateLoading: isQuickCreating || modelsLoading,
        nameField: nameField,
        onChangeStartVM: onChangeStartVM,
        onCustomize: onCustomize,
        onQuickCreate: onQuickCreate,
        onVMNameChange: onVMNameChange,
        runStrategy: (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.runStrategy,
        startVM: (_b = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _b === void 0 ? void 0 : _b.running,
    };
};
export default useCreateDrawerForm;
//# sourceMappingURL=useCreateDrawerForm.js.map