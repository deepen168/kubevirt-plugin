import React, { useMemo, useState } from 'react';
import produce from 'immer';
import ModalPendingChangesAlert from '@kubevirt-utils/components/PendingChanges/ModalPendingChangesAlert/ModalPendingChangesAlert';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ensurePath } from '@kubevirt-utils/utils/utils';
import { Form, FormGroup, TextInput } from '@patternfly/react-core';
import FormGroupHelperText from '../FormGroupHelperText/FormGroupHelperText';
var HostnameModal = function (_a) {
    var _b, _c, _d;
    var isOpen = _a.isOpen, onClose = _a.onClose, onSubmit = _a.onSubmit, vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var _e = useState((_d = (_c = (_b = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.spec) === null || _d === void 0 ? void 0 : _d.hostname), newHostname = _e[0], setHostname = _e[1];
    var updatedVirtualMachine = useMemo(function () {
        var updatedVM = produce(vm, function (vmDraft) {
            ensurePath(vmDraft, ['spec.template.spec']);
            vmDraft.spec.template.spec.hostname = newHostname || undefined;
        });
        return updatedVM;
    }, [vm, newHostname]);
    return (React.createElement(TabModal, { headerText: t('Edit hostname'), isOpen: isOpen, obj: updatedVirtualMachine, onClose: onClose, onSubmit: onSubmit },
        React.createElement(Form, null,
            vmi && React.createElement(ModalPendingChangesAlert, null),
            React.createElement(FormGroup, { fieldId: "hostname", label: t('Hostname') },
                React.createElement(TextInput, { id: "hostname", onChange: function (_event, val) { return setHostname(val); }, type: "text", value: newHostname }),
                React.createElement(FormGroupHelperText, null, t('Please provide hostname.'))))));
};
export default HostnameModal;
//# sourceMappingURL=HostnameModal.js.map