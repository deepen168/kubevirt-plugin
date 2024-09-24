import React from 'react';
import { StorageClassModel } from '@kubevirt-ui/kubevirt-api/console';
import { getSCSelectOptions } from '@kubevirt-utils/components/DiskModal/components/StorageClassAndPreallocation/utils/helpers';
import InlineFilterSelect from '@kubevirt-utils/components/FilterSelect/InlineFilterSelect';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Checkbox, Stack, StackItem } from '@patternfly/react-core';
var UploadPVCFormStorageClass = function (_a) {
    var applySP = _a.applySP, setApplySP = _a.setApplySP, setStorageClassName = _a.setStorageClassName, storageClasses = _a.storageClasses, storageClassName = _a.storageClassName;
    var t = useKubevirtTranslation().t;
    return (React.createElement(Stack, { hasGutter: true },
        React.createElement(StackItem, null,
            React.createElement("label", { className: "control-label co-required" }, t('StorageClass')),
            React.createElement(InlineFilterSelect, { options: getSCSelectOptions(storageClasses), selected: storageClassName, setSelected: function (scName) { return setStorageClassName(scName); }, toggleProps: { placeholder: t('Select {{label}}', { label: StorageClassModel.label }) } })),
        React.createElement(StackItem, null,
            React.createElement(Checkbox, { description: t('Use optimized access mode & volume mode settings from StorageProfile resource.'), "data-checked-state": applySP, "data-test": "apply-storage-provider", id: "apply-storage-provider", isChecked: applySP, 
                // isDisabled={!isSPSettingProvided}
                label: t('Apply optimized StorageProfile settings'), onChange: function () { return setApplySP(function (value) { return !value; }); } }))));
};
export default UploadPVCFormStorageClass;
//# sourceMappingURL=UploadPVCFormStorageClass.js.map