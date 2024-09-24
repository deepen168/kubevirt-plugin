import * as React from 'react';
import produce from 'immer';
import { TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import { DescriptionModal } from '@kubevirt-utils/components/DescriptionModal/DescriptionModal';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import MutedTextSpan from '@kubevirt-utils/components/MutedTextSpan/MutedTextSpan';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { k8sUpdate } from '@openshift-console/dynamic-plugin-sdk';
var Description = function (_a) {
    var _b, _c;
    var editable = _a.editable, template = _a.template;
    var createModal = useModal().createModal;
    var t = useKubevirtTranslation().t;
    var templateDescription = ((_c = (_b = template === null || template === void 0 ? void 0 : template.metadata) === null || _b === void 0 ? void 0 : _b.annotations) === null || _c === void 0 ? void 0 : _c.description) || (React.createElement(MutedTextSpan, { text: t('None') }));
    var updateDescription = function (updatedDescription) {
        var _a, _b;
        var updatedTemplate = produce(template, function (templateDraft) {
            if (!templateDraft.metadata.annotations)
                templateDraft.metadata.annotations = {};
            if (updatedDescription) {
                templateDraft.metadata.annotations.description = updatedDescription;
            }
            else {
                delete templateDraft.metadata.annotations.description;
            }
            return templateDraft;
        });
        return k8sUpdate({
            data: updatedTemplate,
            model: TemplateModel,
            name: (_a = updatedTemplate === null || updatedTemplate === void 0 ? void 0 : updatedTemplate.metadata) === null || _a === void 0 ? void 0 : _a.name,
            ns: (_b = updatedTemplate === null || updatedTemplate === void 0 ? void 0 : updatedTemplate.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
        });
    };
    var onEditClick = function () {
        return createModal(function (_a) {
            var isOpen = _a.isOpen, onClose = _a.onClose;
            return (React.createElement(DescriptionModal, { isOpen: isOpen, obj: template, onClose: onClose, onSubmit: updateDescription }));
        });
    };
    return (React.createElement(VirtualMachineDescriptionItem, { descriptionData: templateDescription, descriptionHeader: t('Description'), isEdit: editable, onEditClick: onEditClick }));
};
export default Description;
//# sourceMappingURL=Description.js.map