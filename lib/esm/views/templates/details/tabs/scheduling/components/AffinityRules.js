import React from 'react';
import { getAffinity } from 'src/views/templates/utils/selectors';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getAffinityRules } from '@kubevirt-utils/resources/vmi';
import AffinityRulesModal from './AffinityRulesModal';
var AffinityRules = function (_a) {
    var _b, _c;
    var editable = _a.editable, onSubmit = _a.onSubmit, template = _a.template;
    var createModal = useModal().createModal;
    var t = useKubevirtTranslation().t;
    var rulesCount = t('{{rules}} Affinity rules', {
        rules: (_c = (_b = getAffinityRules(getAffinity(template))) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0,
    });
    var onEditClick = function () {
        return createModal(function (_a) {
            var isOpen = _a.isOpen, onClose = _a.onClose;
            return (React.createElement(AffinityRulesModal, { isOpen: isOpen, onClose: onClose, onSubmit: onSubmit, template: template }));
        });
    };
    return (React.createElement(VirtualMachineDescriptionItem, { descriptionData: rulesCount, descriptionHeader: t('Affinity rules'), isEdit: editable, onEditClick: onEditClick }));
};
export default AffinityRules;
//# sourceMappingURL=AffinityRules.js.map