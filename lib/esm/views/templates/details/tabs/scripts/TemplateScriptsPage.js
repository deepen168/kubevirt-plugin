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
import React, { useCallback } from 'react';
import classnames from 'classnames';
import { TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import { CloudInitDescription } from '@kubevirt-utils/components/CloudinitDescription/CloudInitDescription';
import CloudinitModal from '@kubevirt-utils/components/CloudinitModal/CloudinitModal';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import SidebarEditor from '@kubevirt-utils/components/SidebarEditor/SidebarEditor';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getTemplateVirtualMachineObject, replaceTemplateVM, } from '@kubevirt-utils/resources/template';
import { k8sUpdate } from '@openshift-console/dynamic-plugin-sdk';
import { Button, DescriptionList, Divider, Flex, FlexItem, PageSection, PageSectionVariants, Title, } from '@patternfly/react-core';
import { PencilAltIcon } from '@patternfly/react-icons';
import useEditTemplateAccessReview from '../../hooks/useIsTemplateEditable';
import SSHKey from './components/SSHKey/SSHKey';
import SysPrepItem from './components/SysPrepItem/SysPrepItem';
import './template-scripts-tab.scss';
var TemplateScriptsPage = function (_a) {
    var template = _a.obj;
    var t = useKubevirtTranslation().t;
    var isTemplateEditable = useEditTemplateAccessReview(template).isTemplateEditable;
    var vm = getTemplateVirtualMachineObject(template);
    var createModal = useModal().createModal;
    var onSubmitTemplate = useCallback(function (updatedTemplate) {
        var _a, _b;
        return k8sUpdate({
            data: updatedTemplate,
            model: TemplateModel,
            name: (_a = updatedTemplate === null || updatedTemplate === void 0 ? void 0 : updatedTemplate.metadata) === null || _a === void 0 ? void 0 : _a.name,
            ns: (_b = updatedTemplate === null || updatedTemplate === void 0 ? void 0 : updatedTemplate.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
        });
    }, []);
    var onUpdate = useCallback(function (updatedVM) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, onSubmitTemplate(replaceTemplateVM(template, updatedVM))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }, [onSubmitTemplate, template]);
    return (React.createElement(PageSection, { variant: PageSectionVariants.light },
        React.createElement(SidebarEditor, { onResourceUpdate: onSubmitTemplate, resource: template },
            React.createElement(DescriptionList, { className: classnames('pf-c-description-list', 'template-scripts-tab__description-list') },
                React.createElement(VirtualMachineDescriptionItem, { descriptionHeader: React.createElement(Flex, { className: "vm-description-item__title" },
                        React.createElement(FlexItem, null,
                            React.createElement(Title, { headingLevel: "h2" }, t('Cloud-init'))),
                        React.createElement(FlexItem, null,
                            React.createElement(Button, { onClick: function () {
                                    return createModal(function (_a) {
                                        var isOpen = _a.isOpen, onClose = _a.onClose;
                                        return (React.createElement(CloudinitModal, { isOpen: isOpen, onClose: onClose, onSubmit: onUpdate, vm: vm }));
                                    });
                                }, isDisabled: !isTemplateEditable, isInline: true, type: "button", variant: "link" },
                                t('Edit'),
                                React.createElement(PencilAltIcon, { className: "co-icon-space-l pf-c-button-icon--plain" })))), descriptionData: React.createElement(CloudInitDescription, { vm: vm }) }),
                React.createElement(Divider, null),
                React.createElement(SSHKey, { template: template }),
                React.createElement(Divider, null),
                React.createElement(SysPrepItem, { template: template })))));
};
export default TemplateScriptsPage;
//# sourceMappingURL=TemplateScriptsPage.js.map