import React, { useState } from 'react';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { WORKLOADS, WORKLOADS_DESCRIPTIONS, WORKLOADS_LABELS, } from '@kubevirt-utils/resources/template';
import { Form, FormGroup } from '@patternfly/react-core';
import { SelectOption } from '@patternfly/react-core';
import FormPFSelect from '../FormPFSelect/FormPFSelect';
var WorkloadProfileModal = function (_a) {
    var initialWorkload = _a.initialWorkload, isOpen = _a.isOpen, onClose = _a.onClose, onSubmit = _a.onSubmit;
    var t = useKubevirtTranslation().t;
    var _b = useState(initialWorkload || WORKLOADS.desktop), workload = _b[0], setWorkload = _b[1];
    var handleChange = function (event, value) {
        event.preventDefault();
        setWorkload(value);
    };
    return (React.createElement(TabModal, { headerText: t('Edit workload profile'), isOpen: isOpen, onClose: onClose, onSubmit: function () { return onSubmit(workload); } },
        React.createElement(Form, null,
            React.createElement(FormGroup, { fieldId: "template-firmware-bootloader", label: t('Workload profile') },
                React.createElement(FormPFSelect, { onSelect: handleChange, selected: workload, selectedLabel: WORKLOADS_LABELS[workload], toggleProps: { isFullWidth: true } }, Object.entries(WORKLOADS_LABELS).map(function (_a) {
                    var key = _a[0], value = _a[1];
                    return (React.createElement(SelectOption, { description: t(WORKLOADS_DESCRIPTIONS[key]), key: key, value: key }, value));
                }))))));
};
export default WorkloadProfileModal;
//# sourceMappingURL=WorkloadProfileModal.js.map