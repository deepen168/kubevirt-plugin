import React, { useMemo, useState } from 'react';
import produce from 'immer';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Form, FormGroup, TextInput, ValidatedOptions } from '@patternfly/react-core';
var VMNameModal = function (_a) {
    var _b;
    var isOpen = _a.isOpen, onClose = _a.onClose, onSubmit = _a.onSubmit, vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var _c = useState((_b = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _b === void 0 ? void 0 : _b.name), vmName = _c[0], setVMName = _c[1];
    var updatedVirtualMachine = useMemo(function () {
        var updatedVM = produce(vm, function (vmDraft) {
            vmDraft.metadata.name = vmName;
        });
        return updatedVM;
    }, [vm, vmName]);
    var validated = !isEmpty(vmName) ? ValidatedOptions.default : ValidatedOptions.error;
    return (React.createElement(TabModal, { headerText: t('Edit VirtualMachine name'), isOpen: isOpen, obj: updatedVirtualMachine, onClose: onClose, onSubmit: onSubmit },
        React.createElement(Form, null,
            React.createElement(FormGroup, { fieldId: "vm-name", isRequired: true, label: t('VirtualMachine name') },
                React.createElement(TextInput, { id: "vm-name", onChange: function (_event, val) { return setVMName(val); }, type: "text", value: vmName }),
                React.createElement(FormGroupHelperText, { validated: validated }, validated === ValidatedOptions.error
                    ? t('VirtualMachine name can not be empty.')
                    : t('Please provide name to VirtualMachine.'))))));
};
export default VMNameModal;
//# sourceMappingURL=VMNameModal.js.map