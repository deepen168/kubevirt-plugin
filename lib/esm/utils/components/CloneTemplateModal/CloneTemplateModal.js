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
import produce from 'immer';
import { LABELS } from 'src/views/templates/utils/constants';
import { TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ANNOTATIONS, APP_NAME_LABEL, CUSTOM_TEMPLATES, getTemplateVirtualMachineObject, LABEL_USED_TEMPLATE_NAME, LABEL_USED_TEMPLATE_NAMESPACE, TEMPLATE_DEFAULT_VARIANT_LABEL, TEMPLATE_TYPE_VM, TEMPLATE_VERSION_LABEL, } from '@kubevirt-utils/resources/template';
import { getRandomChars } from '@kubevirt-utils/utils/utils';
import { k8sCreate } from '@openshift-console/dynamic-plugin-sdk';
import { ButtonVariant, Form, FormGroup, TextInput } from '@patternfly/react-core';
import FormGroupHelperText from '../FormGroupHelperText/FormGroupHelperText';
import CloneStorageCheckbox from './CloneStorageCheckbox';
import SelectProject from './SelectProject';
import { cloneStorage, getTemplateBootSourcePVC } from './utils';
import './clone-template-modal.scss';
var CloneTemplateModal = function (_a) {
    var _b, _c, _d, _e;
    var isOpen = _a.isOpen, obj = _a.obj, onClose = _a.onClose, onTemplateCloned = _a.onTemplateCloned;
    var t = useKubevirtTranslation().t;
    var _f = useState("".concat((_b = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _b === void 0 ? void 0 : _b.name, "-").concat(getRandomChars(9))), templateName = _f[0], setTemplateName = _f[1];
    var templateVMPVC = getTemplateBootSourcePVC(obj);
    var clonableStorage = !!templateVMPVC;
    var _g = useState("".concat(templateVMPVC === null || templateVMPVC === void 0 ? void 0 : templateVMPVC.name, "-clone")), pvcName = _g[0], setPVCName = _g[1];
    var _h = useState(''), templateProvider = _h[0], setTemplateProvider = _h[1];
    var _j = useState((_c = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _c === void 0 ? void 0 : _c.namespace), selectedProject = _j[0], setSelectedProject = _j[1];
    var _k = useState(false), isCloneStorageEnabled = _k[0], setCloneStorage = _k[1];
    var _l = useState(((_e = (_d = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _d === void 0 ? void 0 : _d.annotations) === null || _e === void 0 ? void 0 : _e[ANNOTATIONS.displayName]) || ''), templateDisplayName = _l[0], setTemplateDisplayName = _l[1];
    var onSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var templateToCreate, clonedTemplate;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    templateToCreate = produce(obj, function (draftTemplate) {
                        var _a, _b;
                        var _c, _d, _e, _f;
                        var draftVM = getTemplateVirtualMachineObject(draftTemplate);
                        draftTemplate.metadata = {
                            annotations: __assign(__assign({}, (_c = draftTemplate === null || draftTemplate === void 0 ? void 0 : draftTemplate.metadata) === null || _c === void 0 ? void 0 : _c.annotations), (_a = {}, _a[ANNOTATIONS.displayName] = templateDisplayName, _a[ANNOTATIONS.providerDisplayName] = templateProvider, _a[LABELS.provider] = templateProvider, _a)),
                            labels: __assign(__assign({}, (_d = draftTemplate === null || draftTemplate === void 0 ? void 0 : draftTemplate.metadata) === null || _d === void 0 ? void 0 : _d.labels), (_b = {}, _b[APP_NAME_LABEL] = CUSTOM_TEMPLATES, _b[LABELS.name] = (_e = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _e === void 0 ? void 0 : _e.name, _b[LABELS.namespace] = (_f = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _f === void 0 ? void 0 : _f.namespace, _b[LABELS.type] = TEMPLATE_TYPE_VM, _b)),
                            name: templateName,
                            namespace: selectedProject,
                        };
                        draftVM.metadata.labels[LABEL_USED_TEMPLATE_NAME] = templateName;
                        draftVM.metadata.labels[LABEL_USED_TEMPLATE_NAMESPACE] = selectedProject;
                        delete draftVM.metadata.labels[TEMPLATE_VERSION_LABEL];
                        delete draftTemplate.metadata.labels[TEMPLATE_DEFAULT_VARIANT_LABEL];
                    });
                    if (!isCloneStorageEnabled) return [3 /*break*/, 2];
                    return [4 /*yield*/, cloneStorage(obj, pvcName, selectedProject)];
                case 1:
                    _a.sent();
                    templateToCreate = produce(templateToCreate, function (draftTemplate) {
                        var draftVM = getTemplateVirtualMachineObject(draftTemplate);
                        delete draftVM.spec.dataVolumeTemplates[0].spec.sourceRef;
                        draftVM.spec.dataVolumeTemplates[0].spec.source.pvc.name = pvcName;
                        draftVM.spec.dataVolumeTemplates[0].spec.source.pvc.namespace = selectedProject;
                    });
                    _a.label = 2;
                case 2: return [4 /*yield*/, k8sCreate({
                        data: templateToCreate,
                        model: TemplateModel,
                    })];
                case 3:
                    clonedTemplate = _a.sent();
                    if (onTemplateCloned)
                        onTemplateCloned(clonedTemplate);
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(React.Fragment, null,
        React.createElement(TabModal, { headerText: t('Clone template'), isOpen: isOpen, obj: obj, onClose: onClose, onSubmit: onSubmit, submitBtnText: t('Clone'), submitBtnVariant: ButtonVariant.primary },
            React.createElement(Form, { className: "clone-template-modal" },
                React.createElement(FormGroup, { fieldId: "name", isRequired: true, label: t('Template name') },
                    React.createElement(TextInput, { id: "name", onChange: function (_, value) { return setTemplateName(value); }, type: "text", value: templateName })),
                React.createElement(FormGroup, { fieldId: "namespace", label: t('Template project') },
                    React.createElement(SelectProject, { selectedProject: selectedProject, setSelectedProject: setSelectedProject }),
                    React.createElement(FormGroupHelperText, null, t('Project name to clone the template to'))),
                React.createElement(FormGroup, { fieldId: "display-name", label: t('Template display name') },
                    React.createElement(TextInput, { id: "display-name", onChange: function (_, value) { return setTemplateDisplayName(value); }, type: "text", value: templateDisplayName })),
                React.createElement(FormGroup, { fieldId: "provider", label: t('Template provider') },
                    React.createElement(TextInput, { id: "provider", onChange: function (_, value) { return setTemplateProvider(value); }, type: "text", value: templateProvider }),
                    React.createElement(FormGroupHelperText, null, t('Example: your company name'))),
                clonableStorage && (React.createElement(CloneStorageCheckbox, { isChecked: isCloneStorageEnabled, onChange: setCloneStorage })),
                isCloneStorageEnabled && (React.createElement(FormGroup, { className: "pvc-name-form-group", fieldId: "pvc-name", isRequired: true, label: t('Name of the template new disk') },
                    React.createElement(TextInput, { id: "pvc-name", onChange: function (_, value) { return setPVCName(value); }, type: "text", value: pvcName })))))));
};
export default CloneTemplateModal;
//# sourceMappingURL=CloneTemplateModal.js.map