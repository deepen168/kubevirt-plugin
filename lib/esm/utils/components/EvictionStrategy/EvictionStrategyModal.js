import React, { useEffect, useMemo, useState } from 'react';
import produce from 'immer';
import ModalPendingChangesAlert from '@kubevirt-utils/components/PendingChanges/ModalPendingChangesAlert/ModalPendingChangesAlert';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import useHyperConvergeConfiguration from '@kubevirt-utils/hooks/useHyperConvergeConfiguration';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getEvictionStrategy } from '@kubevirt-utils/resources/vm';
import { ensurePath } from '@kubevirt-utils/utils/utils';
import { Checkbox, Form, FormGroup } from '@patternfly/react-core';
import FormGroupHelperText from '../FormGroupHelperText/FormGroupHelperText';
import { EVICTION_STRATEGIES } from './constants';
var EvictionStrategyModal = function (_a) {
    var headerText = _a.headerText, isOpen = _a.isOpen, onClose = _a.onClose, onSubmit = _a.onSubmit, vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var _b = useState(true), isChecked = _b[0], setIsChecked = _b[1];
    var _c = useHyperConvergeConfiguration(), hyperConverge = _c[0], hyperLoaded = _c[1], hyperLoadingError = _c[2];
    useEffect(function () {
        var _a, _b;
        var vmEvictionStrategy = getEvictionStrategy(vm);
        if (vmEvictionStrategy || hyperLoadingError || !hyperLoaded) {
            setIsChecked(vmEvictionStrategy === EVICTION_STRATEGIES.LiveMigrate);
            return;
        }
        if ((_a = hyperConverge === null || hyperConverge === void 0 ? void 0 : hyperConverge.spec) === null || _a === void 0 ? void 0 : _a.evictionStrategy) {
            setIsChecked(((_b = hyperConverge === null || hyperConverge === void 0 ? void 0 : hyperConverge.spec) === null || _b === void 0 ? void 0 : _b.evictionStrategy) === EVICTION_STRATEGIES.LiveMigrate);
            return;
        }
    }, [hyperConverge, hyperLoaded, hyperLoadingError, vm]);
    var updatedVirtualMachine = useMemo(function () {
        var updatedVM = produce(vm, function (vmDraft) {
            ensurePath(vmDraft, ['spec.template.spec']);
            if (isChecked) {
                vmDraft.spec.template.spec.evictionStrategy = EVICTION_STRATEGIES.LiveMigrate;
            }
            else {
                vmDraft.spec.template.spec.evictionStrategy = EVICTION_STRATEGIES.None;
            }
        });
        return updatedVM;
    }, [vm, isChecked]);
    return (React.createElement(TabModal, { headerText: headerText, isOpen: isOpen, obj: updatedVirtualMachine, onClose: onClose, onSubmit: onSubmit },
        React.createElement(Form, null,
            vmi && React.createElement(ModalPendingChangesAlert, null),
            React.createElement(FormGroup, { fieldId: "eviction-strategy", isInline: true },
                React.createElement(Checkbox, { id: "eviction-strategy", isChecked: isChecked, label: t('LiveMigrate'), onChange: function (_event, val) { return setIsChecked(val); } }),
                React.createElement(FormGroupHelperText, null, t('EvictionStrategy can be set to "LiveMigrate" if the VirtualMachineInstance should be migrated instead of shut-off in case of a node drain.'))))));
};
export default EvictionStrategyModal;
//# sourceMappingURL=EvictionStrategyModal.js.map