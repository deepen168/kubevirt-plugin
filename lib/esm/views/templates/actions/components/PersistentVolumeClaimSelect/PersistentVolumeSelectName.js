import React from 'react';
import InlineFilterSelect from '@kubevirt-utils/components/FilterSelect/InlineFilterSelect';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup, Skeleton } from '@patternfly/react-core';
export var PersistentVolumeSelectName = function (_a) {
    var isDisabled = _a.isDisabled, isLoading = _a.isLoading, onChange = _a.onChange, pvcNames = _a.pvcNames, pvcNameSelected = _a.pvcNameSelected;
    var t = useKubevirtTranslation().t;
    var fieldId = 'pvc-name-select';
    if (isLoading) {
        return (React.createElement(React.Fragment, null,
            React.createElement("br", null),
            React.createElement(Skeleton, { className: "pvc-selection-formgroup", fontSize: "lg" }),
            React.createElement("br", null)));
    }
    return (React.createElement(FormGroup, { className: "pvc-selection-formgroup", fieldId: fieldId, id: fieldId, isRequired: true, label: t('PVC name') },
        React.createElement(InlineFilterSelect, { options: pvcNames === null || pvcNames === void 0 ? void 0 : pvcNames.map(function (name) { return ({
                children: name,
                value: name,
            }); }), toggleProps: {
                isDisabled: isDisabled,
                isFullHeight: true,
                placeholder: t('--- Select PVC name ---'),
            }, selected: pvcNameSelected, setSelected: onChange })));
};
//# sourceMappingURL=PersistentVolumeSelectName.js.map