import React, { useMemo, useState } from 'react';
import produce from 'immer';
import { printableVMStatus } from 'src/views/virtualmachines/utils';
import ModalPendingChangesAlert from '@kubevirt-utils/components/PendingChanges/ModalPendingChangesAlert/ModalPendingChangesAlert';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ensurePath } from '@kubevirt-utils/utils/utils';
import { Checkbox, Form, FormGroup } from '@patternfly/react-core';
import FormGroupHelperText from '../FormGroupHelperText/FormGroupHelperText';
var StartPauseModal = function (_a) {
    var _b, _c, _d;
    var headerText = _a.headerText, isOpen = _a.isOpen, onClose = _a.onClose, onSubmit = _a.onSubmit, vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var _e = useState(!!((_d = (_c = (_b = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.spec) === null || _d === void 0 ? void 0 : _d.startStrategy)), checked = _e[0], setChecked = _e[1];
    var updatedVirtualMachine = useMemo(function () {
        var updatedVM = produce(vm, function (vmDraft) {
            ensurePath(vmDraft, ['spec.template.spec']);
            vmDraft.spec.template.spec.startStrategy = checked ? printableVMStatus.Paused : null;
        });
        return updatedVM;
    }, [vm, checked]);
    return (React.createElement(TabModal, { headerText: headerText, isOpen: isOpen, obj: updatedVirtualMachine, onClose: onClose, onSubmit: onSubmit },
        React.createElement(Form, null,
            vmi && React.createElement(ModalPendingChangesAlert, null),
            React.createElement(FormGroup, { fieldId: "start-pause-mode", isInline: true },
                React.createElement(Checkbox, { id: "start-pause-mode", isChecked: checked, label: t('Start this VirtualMachine in pause mode'), onChange: function (_event, val) { return setChecked(val); } }),
                React.createElement(FormGroupHelperText, null, t('Applying the start/pause mode to this Virtual Machine will cause it to partially reboot and pause.'))))));
};
export default StartPauseModal;
//# sourceMappingURL=StartPauseModal.js.map