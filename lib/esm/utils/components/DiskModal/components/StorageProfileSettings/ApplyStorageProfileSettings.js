import React from 'react';
import { useFormContext } from 'react-hook-form';
import ApplyStorageProfileSettingsCheckbox from '@kubevirt-utils/components/ApplyStorageProfileSettingsCheckbox/ApplyStorageProfileSettingsCheckbox';
import useStorageProfileClaimPropertySets from '@kubevirt-utils/hooks/useStorageProfileClaimPropertySets';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Flex, FlexItem } from '@patternfly/react-core';
import { ACCESS_MODE_FIELD, DATAVOLUME_TEMPLATE_STORAGE, STORAGE_PROFILE_SETTINGS_APPLIED_FIELD, VOLUME_MODE_FIELD, } from '../utils/constants';
import AccessMode from './AccessMode';
import VolumeMode from './VolumeMode';
import './ApplyStorageProfileSettings.scss';
var ApplyStorageProfileSettings = function () {
    var _a = useFormContext(), setValue = _a.setValue, watch = _a.watch;
    var _b = watch([
        STORAGE_PROFILE_SETTINGS_APPLIED_FIELD,
        DATAVOLUME_TEMPLATE_STORAGE,
    ]), storageProfileSettingsApplied = _b[0], storage = _b[1];
    var accessModes = storage.accessModes, storageClassName = storage.storageClassName, volumeMode = storage.volumeMode;
    var _c = useStorageProfileClaimPropertySets(storageClassName), claimPropertySets = _c.claimPropertySets, storageProfileLoaded = _c.loaded;
    var handleApplyOptimizedSettingsChange = function (checked) {
        setValue(STORAGE_PROFILE_SETTINGS_APPLIED_FIELD, checked);
        if (checked) {
            setValue(ACCESS_MODE_FIELD, null);
            setValue(VOLUME_MODE_FIELD, null);
            return;
        }
        var propertySet = claimPropertySets === null || claimPropertySets === void 0 ? void 0 : claimPropertySets[0];
        if (isEmpty(accessModes) && !isEmpty(propertySet === null || propertySet === void 0 ? void 0 : propertySet.accessModes[0])) {
            setValue(ACCESS_MODE_FIELD, [propertySet === null || propertySet === void 0 ? void 0 : propertySet.accessModes[0]]);
        }
        if (isEmpty(volumeMode) && !isEmpty(propertySet === null || propertySet === void 0 ? void 0 : propertySet.volumeMode)) {
            setValue(VOLUME_MODE_FIELD, propertySet === null || propertySet === void 0 ? void 0 : propertySet.volumeMode);
        }
    };
    return (React.createElement("div", null,
        React.createElement(ApplyStorageProfileSettingsCheckbox, { claimPropertySets: claimPropertySets, disabled: !storageProfileLoaded || !claimPropertySets || isEmpty(claimPropertySets), handleChange: handleApplyOptimizedSettingsChange, isChecked: storageProfileSettingsApplied }),
        !storageProfileSettingsApplied && (React.createElement(Flex, { className: "ApplyStorageProfileSettings--volume-access-section", spaceItems: { default: 'spaceItems3xl' } },
            React.createElement(FlexItem, null,
                React.createElement(AccessMode, null)),
            React.createElement(FlexItem, null,
                React.createElement(VolumeMode, null))))));
};
export default ApplyStorageProfileSettings;
//# sourceMappingURL=ApplyStorageProfileSettings.js.map