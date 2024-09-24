import React, { useMemo, useState } from 'react';
import produce from 'immer';
import { bootloaderOptions } from '@kubevirt-utils/components/FirmwareBootloaderModal/utils/constants';
import { getBootloaderFromVM, updatedVMBootMode, } from '@kubevirt-utils/components/FirmwareBootloaderModal/utils/utils';
import FormPFSelect from '@kubevirt-utils/components/FormPFSelect/FormPFSelect';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getTemplateVirtualMachineObject } from '@kubevirt-utils/resources/template';
import { Form, FormGroup, SelectOption } from '@patternfly/react-core';
var TemplateBootloaderModal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, onSubmit = _a.onSubmit, template = _a.template;
    var t = useKubevirtTranslation().t;
    var _b = useState(getBootloaderFromVM(getTemplateVirtualMachineObject(template))), selectedFirmwareBootloader = _b[0], setSelectedFirmwareBootloader = _b[1];
    var handleChange = function (event, value) {
        event.preventDefault();
        setSelectedFirmwareBootloader(value);
    };
    var updatedTemplate = useMemo(function () {
        return produce(template, function (templateDraft) {
            var vmDraft = getTemplateVirtualMachineObject(templateDraft);
            var updatedVM = updatedVMBootMode(vmDraft, selectedFirmwareBootloader);
            vmDraft.spec.template.spec.domain = updatedVM.spec.template.spec.domain;
        });
    }, [selectedFirmwareBootloader, template]);
    return (React.createElement(TabModal, { headerText: t('Boot mode'), isOpen: isOpen, obj: updatedTemplate, onClose: onClose, onSubmit: onSubmit },
        React.createElement(Form, null,
            React.createElement(FormGroup, { fieldId: "template-firmware-bootloader", label: t('Boot mode') },
                React.createElement(FormPFSelect, { onSelect: handleChange, selected: selectedFirmwareBootloader }, bootloaderOptions.map(function (_a) {
                    var description = _a.description, title = _a.title, value = _a.value;
                    return (React.createElement(SelectOption, { description: description, key: value, value: value }, title));
                }))))));
};
export default TemplateBootloaderModal;
//# sourceMappingURL=TemplateBootloaderModal.js.map