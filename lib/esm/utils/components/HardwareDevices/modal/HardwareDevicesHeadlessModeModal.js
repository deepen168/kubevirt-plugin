import React, { useMemo, useState } from 'react';
import produce from 'immer';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import ModalPendingChangesAlert from '@kubevirt-utils/components/PendingChanges/ModalPendingChangesAlert/ModalPendingChangesAlert';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ensurePath } from '@kubevirt-utils/utils/utils';
import { Checkbox, Form, FormGroup } from '@patternfly/react-core';
var HardwareDevicesHeadlessModeModal = function (_a) {
    var _b, _c, _d, _e;
    var isOpen = _a.isOpen, onClose = _a.onClose, onSubmit = _a.onSubmit, vm = _a.vm, vmi = _a.vmi;
    var devices = (_e = (_d = (_c = (_b = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.spec) === null || _d === void 0 ? void 0 : _d.domain) === null || _e === void 0 ? void 0 : _e.devices;
    var t = useKubevirtTranslation().t;
    var _f = useState((devices === null || devices === void 0 ? void 0 : devices.hasOwnProperty('autoattachGraphicsDevice')) && !(devices === null || devices === void 0 ? void 0 : devices.autoattachGraphicsDevice)), checked = _f[0], setChecked = _f[1];
    var updatedVirtualMachine = useMemo(function () {
        var updatedVM = produce(vm, function (vmDraft) {
            if (vm) {
                ensurePath(vmDraft, ['spec.template.spec.domain.devices']);
                if (checked) {
                    vmDraft.spec.template.spec.domain.devices.autoattachGraphicsDevice = !checked;
                    return vmDraft;
                }
                delete vmDraft.spec.template.spec.domain.devices.autoattachGraphicsDevice;
                return vmDraft;
            }
        });
        return updatedVM;
    }, [vm, checked]);
    return (React.createElement(TabModal, { headerText: 'Headless mode', isOpen: isOpen, obj: updatedVirtualMachine, onClose: onClose, onSubmit: onSubmit },
        React.createElement(Form, null,
            vmi && React.createElement(ModalPendingChangesAlert, null),
            React.createElement(FormGroup, { fieldId: "headless-mode-modal", isInline: true },
                React.createElement(Checkbox, { id: "headless-mode-checkbox", isChecked: checked, label: t('Enable headless mode'), onChange: function (_event, val) { return setChecked(val); } }),
                React.createElement(FormGroupHelperText, null, t('Applying the headless mode to this Virtual Machine will cause the VNC not be available if checked.'))))));
};
export default HardwareDevicesHeadlessModeModal;
//# sourceMappingURL=HardwareDevicesHeadlessModeModal.js.map