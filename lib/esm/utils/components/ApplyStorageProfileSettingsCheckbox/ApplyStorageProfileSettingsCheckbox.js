import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Checkbox, FormGroup } from '@patternfly/react-core';
import FormGroupHelperText from '../FormGroupHelperText/FormGroupHelperText';
var ApplyStorageProfileSettingsCheckbox = function (_a) {
    var _b, _c;
    var claimPropertySets = _a.claimPropertySets, disabled = _a.disabled, handleChange = _a.handleChange, isChecked = _a.isChecked;
    var t = useKubevirtTranslation().t;
    return (React.createElement(FormGroup, { fieldId: "apply-storage-profile-settings", isInline: true },
        React.createElement(Checkbox, { id: "apply-storage-profile-settings", isChecked: isChecked, isDisabled: disabled, label: t('Apply optimized StorageProfile settings'), onChange: function (_, checked) { return handleChange(checked); } }),
        React.createElement(FormGroupHelperText, null, isEmpty(claimPropertySets)
            ? t('No optimized StorageProfile settings for this StorageClass.')
            : t('Optimized values Access mode: {{accessMode}}, Volume mode: {{volumeMode}}.', {
                accessMode: (_b = claimPropertySets === null || claimPropertySets === void 0 ? void 0 : claimPropertySets[0]) === null || _b === void 0 ? void 0 : _b.accessModes[0],
                volumeMode: (_c = claimPropertySets === null || claimPropertySets === void 0 ? void 0 : claimPropertySets[0]) === null || _c === void 0 ? void 0 : _c.volumeMode,
            }))));
};
export default ApplyStorageProfileSettingsCheckbox;
//# sourceMappingURL=ApplyStorageProfileSettingsCheckbox.js.map