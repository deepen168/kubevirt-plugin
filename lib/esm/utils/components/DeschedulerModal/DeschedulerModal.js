import React, { useMemo, useState } from 'react';
import produce from 'immer';
import ModalPendingChangesAlert from '@kubevirt-utils/components/PendingChanges/ModalPendingChangesAlert/ModalPendingChangesAlert';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { DESCHEDULER_EVICT_LABEL } from '@kubevirt-utils/resources/vmi';
import { ensurePath } from '@kubevirt-utils/utils/utils';
import { Alert, AlertVariant, Checkbox, Form, FormGroup } from '@patternfly/react-core';
var DeschedulerModal = function (_a) {
    var _b, _c, _d, _e;
    var isOpen = _a.isOpen, onClose = _a.onClose, onSubmit = _a.onSubmit, vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var _f = useState(((_e = (_d = (_c = (_b = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.metadata) === null || _d === void 0 ? void 0 : _d.annotations) === null || _e === void 0 ? void 0 : _e[DESCHEDULER_EVICT_LABEL]) === 'true'), checked = _f[0], setChecked = _f[1];
    var updatedVirtualMachine = useMemo(function () {
        var updatedVM = produce(vm, function (vmDraft) {
            ensurePath(vmDraft, 'spec.template.metadata.annotations');
            if (!vmDraft.spec.template.metadata.annotations)
                vmDraft.spec.template.metadata.annotations = {};
            if (checked) {
                vmDraft.spec.template.metadata.annotations[DESCHEDULER_EVICT_LABEL] = 'true';
            }
            else {
                delete vmDraft.spec.template.metadata.annotations[DESCHEDULER_EVICT_LABEL];
            }
        });
        return updatedVM;
    }, [vm, checked]);
    return (React.createElement(TabModal, { headerText: t('Descheduler settings'), isOpen: isOpen, obj: updatedVirtualMachine, onClose: onClose, onSubmit: onSubmit },
        React.createElement(Form, null,
            vmi && React.createElement(ModalPendingChangesAlert, null),
            React.createElement(FormGroup, { fieldId: "descheduler" },
                React.createElement(Checkbox, { description: t('Allow the Descheduler to evict the VirtualMachine via live migration'), id: "descheduler", isChecked: checked, label: t('Enable Descheduler'), onChange: function (_, check) { return setChecked(check); } })),
            checked && (React.createElement(Alert, { isInline: true, title: t('Active Descheduler'), variant: AlertVariant.info }, t('This VirtualMachine is subject to the Descheduler profiles configured for eviction.'))))));
};
export default DeschedulerModal;
//# sourceMappingURL=DeschedulerModal.js.map