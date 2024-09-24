import React, { useEffect, useMemo, useState } from 'react';
import produce from 'immer';
import { getEvictionStrategy } from 'src/views/templates/utils/selectors';
import { EVICTION_STRATEGIES, EVICTION_STRATEGY_DEFAULT, } from '@kubevirt-utils/components/EvictionStrategy/constants';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import useHyperConvergeConfiguration from '@kubevirt-utils/hooks/useHyperConvergeConfiguration';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getTemplateVirtualMachineObject } from '@kubevirt-utils/resources/template';
import { Checkbox, Form, FormGroup } from '@patternfly/react-core';
var EvictionStrategyModal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, onSubmit = _a.onSubmit, template = _a.template;
    var t = useKubevirtTranslation().t;
    var templateEvictionStrategy = getEvictionStrategy(template);
    var _b = useState(templateEvictionStrategy === EVICTION_STRATEGIES.LiveMigrate), isChecked = _b[0], setIsChecked = _b[1];
    var _c = useHyperConvergeConfiguration(), hyperConverge = _c[0], hyperLoaded = _c[1], hyperLoadingError = _c[2];
    useEffect(function () {
        var _a, _b;
        if (templateEvictionStrategy || hyperLoadingError || !hyperLoaded)
            return;
        if ((_a = hyperConverge === null || hyperConverge === void 0 ? void 0 : hyperConverge.spec) === null || _a === void 0 ? void 0 : _a.evictionStrategy) {
            setIsChecked(((_b = hyperConverge === null || hyperConverge === void 0 ? void 0 : hyperConverge.spec) === null || _b === void 0 ? void 0 : _b.evictionStrategy) === EVICTION_STRATEGIES.LiveMigrate);
            return;
        }
        setIsChecked(EVICTION_STRATEGY_DEFAULT === EVICTION_STRATEGIES.LiveMigrate);
    }, [hyperConverge, hyperLoaded, hyperLoadingError, templateEvictionStrategy]);
    var updatedTemplate = useMemo(function () {
        return produce(template, function (templateDraft) {
            var draftVM = getTemplateVirtualMachineObject(templateDraft);
            isChecked
                ? (draftVM.spec.template.spec.evictionStrategy = EVICTION_STRATEGIES.LiveMigrate)
                : (draftVM.spec.template.spec.evictionStrategy = EVICTION_STRATEGIES.None);
        });
    }, [isChecked, template]);
    return (React.createElement(TabModal, { headerText: t('Eviction strategy'), isOpen: isOpen, obj: updatedTemplate, onClose: onClose, onSubmit: onSubmit },
        React.createElement(Form, null,
            React.createElement(FormGroup, { fieldId: "eviction-strategy", isInline: true },
                React.createElement(Checkbox, { id: "eviction-strategy", isChecked: isChecked, label: t('LiveMigrate'), onChange: function (_event, val) { return setIsChecked(val); } }),
                React.createElement(FormGroupHelperText, null, t('EvictionStrategy can be set to "LiveMigrate" if the VirtualMachineInstance should be migrated instead of shut-off in case of a node drain.'))))));
};
export default EvictionStrategyModal;
//# sourceMappingURL=EvictionStrategyModal.js.map