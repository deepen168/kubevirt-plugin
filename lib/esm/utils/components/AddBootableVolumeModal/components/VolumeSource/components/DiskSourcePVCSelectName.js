import React from 'react';
import { modelToGroupVersionKind, PersistentVolumeClaimModel, } from '@kubevirt-ui/kubevirt-api/console';
import InlineFilterSelect from '@kubevirt-utils/components/FilterSelect/InlineFilterSelect';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup } from '@patternfly/react-core';
var DiskSourcePVCSelectName = function (_a) {
    var isDisabled = _a.isDisabled, onChange = _a.onChange, pvcNames = _a.pvcNames, pvcNameSelected = _a.pvcNameSelected, pvcsLoaded = _a.pvcsLoaded;
    var t = useKubevirtTranslation().t;
    var fieldId = 'pvc-name-select';
    return (React.createElement(FormGroup, { fieldId: fieldId, id: fieldId, isRequired: true, label: t('Volume name') }, pvcsLoaded ? (React.createElement(InlineFilterSelect, { options: pvcNames === null || pvcNames === void 0 ? void 0 : pvcNames.map(function (name) { return ({
            children: name,
            groupVersionKind: modelToGroupVersionKind(PersistentVolumeClaimModel),
            value: name,
        }); }), toggleProps: {
            isDisabled: isDisabled,
            isFullWidth: true,
            placeholder: t('--- Select Volume name ---'),
        }, selected: pvcNameSelected, setSelected: onChange })) : (React.createElement(Loading, null))));
};
export default DiskSourcePVCSelectName;
//# sourceMappingURL=DiskSourcePVCSelectName.js.map