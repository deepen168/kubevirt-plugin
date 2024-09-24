import React, { useMemo, useState } from 'react';
import ModalPendingChangesAlert from '@kubevirt-utils/components/PendingChanges/ModalPendingChangesAlert/ModalPendingChangesAlert';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Form, FormGroup, SelectList, SelectOption } from '@patternfly/react-core';
import FormPFSelect from '../FormPFSelect/FormPFSelect';
import { bootloaderOptions, BootModeTitles } from './utils/constants';
import { getBootloaderFromVM, updatedVMBootMode } from './utils/utils';
var FirmwareBootloaderModal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, onSubmit = _a.onSubmit, vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var _b = useState(getBootloaderFromVM(vm)), selectedFirmwareBootloader = _b[0], setSelectedFirmwareBootloader = _b[1];
    var handleChange = function (event, value) {
        event.preventDefault();
        setSelectedFirmwareBootloader(value);
    };
    var updatedVirtualMachine = useMemo(function () { return updatedVMBootMode(vm, selectedFirmwareBootloader); }, [vm, selectedFirmwareBootloader]);
    return (React.createElement(TabModal, { headerText: t('Boot mode'), isOpen: isOpen, obj: updatedVirtualMachine, onClose: onClose, onSubmit: onSubmit },
        React.createElement(Form, null,
            vmi && React.createElement(ModalPendingChangesAlert, null),
            React.createElement(FormGroup, { fieldId: "firmware-bootloader", label: t('Boot mode') },
                React.createElement(FormPFSelect, { onSelect: handleChange, selected: selectedFirmwareBootloader, selectedLabel: BootModeTitles[selectedFirmwareBootloader], toggleProps: { isFullWidth: true } },
                    React.createElement(SelectList, null, bootloaderOptions.map(function (_a) {
                        var description = _a.description, title = _a.title, value = _a.value;
                        return (React.createElement(SelectOption, { description: description, key: value, value: value }, title));
                    })))))));
};
export default FirmwareBootloaderModal;
//# sourceMappingURL=FirmwareBootloaderModal.js.map