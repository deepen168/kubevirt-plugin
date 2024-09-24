import React, { useCallback, useState } from 'react';
import produce from 'immer';
import { TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import ConfirmActionMessage from '@kubevirt-utils/components/ConfirmActionMessage/ConfirmActionMessage';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import KebabToggle from '@kubevirt-utils/components/toggles/KebabToggle';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getTemplateVirtualMachineObject } from '@kubevirt-utils/resources/template';
import { getContentScrollableElement } from '@kubevirt-utils/utils/utils';
import { k8sUpdate } from '@openshift-console/dynamic-plugin-sdk';
import { ButtonVariant, Dropdown, DropdownItem, DropdownList } from '@patternfly/react-core';
import useEditTemplateAccessReview from '../../../../hooks/useIsTemplateEditable';
import TemplatesEditNetworkInterfaceModal from '../modal/TemplatesEditNetworkInterfaceModal';
var NetworkInterfaceActions = function (_a) {
    var nicName = _a.nicName, nicPresentation = _a.nicPresentation, template = _a.template;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var isTemplateEditable = useEditTemplateAccessReview(template).isTemplateEditable;
    var _b = useState(false), isDropdownOpen = _b[0], setIsDropdownOpen = _b[1];
    var label = t('Delete NIC?');
    var editBtnText = t('Edit');
    var submitBtnText = t('Delete');
    var onEditModalOpen = function () {
        createModal(function (_a) {
            var isOpen = _a.isOpen, onClose = _a.onClose;
            return (React.createElement(TemplatesEditNetworkInterfaceModal, { isOpen: isOpen, nicPresentation: nicPresentation, onClose: onClose, template: template }));
        });
    };
    var onDelete = useCallback(function () {
        var _a, _b;
        var updatedTemplate = produce(template, function (draftTemplate) {
            var vm = getTemplateVirtualMachineObject(draftTemplate);
            vm.spec.template.spec.networks = vm.spec.template.spec.networks.filter(function (_a) {
                var name = _a.name;
                return name !== nicName;
            });
            vm.spec.template.spec.domain.devices.interfaces =
                vm.spec.template.spec.domain.devices.interfaces.filter(function (_a) {
                    var name = _a.name;
                    return name !== nicName;
                });
        });
        return k8sUpdate({
            data: updatedTemplate,
            model: TemplateModel,
            name: (_a = updatedTemplate === null || updatedTemplate === void 0 ? void 0 : updatedTemplate.metadata) === null || _a === void 0 ? void 0 : _a.name,
            ns: (_b = updatedTemplate === null || updatedTemplate === void 0 ? void 0 : updatedTemplate.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
        });
    }, [nicName, template]);
    var onDeleteModalToggle = function () {
        createModal(function (_a) {
            var _b;
            var isOpen = _a.isOpen, onClose = _a.onClose;
            return (React.createElement(TabModal, { headerText: label, isOpen: isOpen, obj: template, onClose: onClose, onSubmit: onDelete, submitBtnText: submitBtnText, submitBtnVariant: ButtonVariant.danger },
                React.createElement(ConfirmActionMessage, { obj: { metadata: { name: nicName, namespace: (_b = template === null || template === void 0 ? void 0 : template.metadata) === null || _b === void 0 ? void 0 : _b.namespace } } })));
        });
    };
    var onToggle = function () { return setIsDropdownOpen(function (prevIsOpen) { return !prevIsOpen; }); };
    return (React.createElement(Dropdown, { toggle: KebabToggle({
            id: 'toggle-id-6',
            isDisabled: !isTemplateEditable,
            isExpanded: isDropdownOpen,
            onClick: onToggle,
        }), isOpen: isDropdownOpen, onOpenChange: function (open) { return setIsDropdownOpen(open); }, onSelect: function () { return setIsDropdownOpen(false); }, popperProps: { appendTo: getContentScrollableElement, position: 'right' } },
        React.createElement(DropdownList, null,
            React.createElement(DropdownItem, { key: "network-interface-edit", onClick: onEditModalOpen }, editBtnText),
            React.createElement(DropdownItem, { key: "network-interface-delete", onClick: onDeleteModalToggle }, submitBtnText))));
};
export default NetworkInterfaceActions;
//# sourceMappingURL=NetworkInterfaceActions.js.map