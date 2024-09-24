import * as React from 'react';
import produce from 'immer';
import { ANNOTATIONS } from 'src/views/templates/utils/constants';
import { TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import MutedTextSpan from '@kubevirt-utils/components/MutedTextSpan/MutedTextSpan';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ensurePath } from '@kubevirt-utils/utils/utils';
import { k8sUpdate } from '@openshift-console/dynamic-plugin-sdk';
import DisplayNameModal from './DisplayNameModal';
var DisplayName = function (_a) {
    var _b, _c;
    var editable = _a.editable, template = _a.template;
    var createModal = useModal().createModal;
    var t = useKubevirtTranslation().t;
    var displayName = (_c = (_b = template === null || template === void 0 ? void 0 : template.metadata) === null || _b === void 0 ? void 0 : _b.annotations) === null || _c === void 0 ? void 0 : _c[ANNOTATIONS.displayName];
    var updateDisplayName = function (updatedDisplayName) {
        var _a, _b;
        var updatedTemplate = produce(template, function (templateDraft) {
            if (!templateDraft.metadata.annotations)
                ensurePath(templateDraft, 'metadata.annotations');
            delete templateDraft.metadata.annotations[ANNOTATIONS.displayName];
            if (updatedDisplayName)
                templateDraft.metadata.annotations[ANNOTATIONS.displayName] = updatedDisplayName;
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
            return (React.createElement(DisplayNameModal, { isOpen: isOpen, obj: template, onClose: onClose, onSubmit: updateDisplayName }));
        });
    };
    return (React.createElement(VirtualMachineDescriptionItem, { descriptionData: displayName || React.createElement(MutedTextSpan, { text: t('No display name') }), descriptionHeader: t('Display name'), isEdit: editable, onEditClick: onEditClick }));
};
export default DisplayName;
//# sourceMappingURL=DisplayName.js.map