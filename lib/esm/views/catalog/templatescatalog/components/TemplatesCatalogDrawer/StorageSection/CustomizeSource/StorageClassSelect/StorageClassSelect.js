import React from 'react';
import InlineFilterSelect from '@kubevirt-utils/components/FilterSelect/InlineFilterSelect';
import useDefaultStorageClass from '@kubevirt-utils/hooks/useDefaultStorage/useDefaultStorageClass';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup } from '@patternfly/react-core';
var StorageClassSelect = function (_a) {
    var onStorageClassChange = _a.onStorageClassChange, storageClassName = _a.storageClassName, storageClassRequired = _a.storageClassRequired;
    var t = useKubevirtTranslation().t;
    var sortedStorageClasses = useDefaultStorageClass()[0].sortedStorageClasses;
    if (!storageClassRequired)
        return null;
    return (React.createElement(FormGroup, { className: "disk-source-form-group select-source-option", isRequired: true, label: t('Storage class') },
        React.createElement(InlineFilterSelect, { options: sortedStorageClasses === null || sortedStorageClasses === void 0 ? void 0 : sortedStorageClasses.map(function (name) { return ({ children: name, value: name }); }), selected: storageClassName, setSelected: onStorageClassChange, toggleProps: { placeholder: t('Select storage class') } })));
};
export default StorageClassSelect;
//# sourceMappingURL=StorageClassSelect.js.map