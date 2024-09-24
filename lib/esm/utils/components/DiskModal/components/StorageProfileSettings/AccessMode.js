import React, { useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup, Radio } from '@patternfly/react-core';
import { ACCESS_MODE_FIELD, ACCESS_MODE_FIELDID, STORAGE_CLASS_PROVIDER_FIELD, VOLUME_MODE_FIELD, } from '../utils/constants';
import { ACCESS_MODE_RADIO_OPTIONS, getAccessModeForProvisioner } from '../utils/modesMapping';
var AccessMode = function () {
    var t = useKubevirtTranslation().t;
    var _a = useFormContext(), setValue = _a.setValue, watch = _a.watch;
    var _b = watch([
        STORAGE_CLASS_PROVIDER_FIELD,
        ACCESS_MODE_FIELD,
        VOLUME_MODE_FIELD,
    ]), storageClassProvisioner = _b[0], accessModes = _b[1], volumeMode = _b[2];
    var accessMode = accessModes === null || accessModes === void 0 ? void 0 : accessModes[0];
    var allowedAccessModes = useMemo(function () {
        return getAccessModeForProvisioner(storageClassProvisioner, volumeMode);
    }, [storageClassProvisioner, volumeMode]);
    useEffect(function () {
        if (!(allowedAccessModes === null || allowedAccessModes === void 0 ? void 0 : allowedAccessModes.includes(accessMode))) {
            setValue(ACCESS_MODE_FIELD, [allowedAccessModes === null || allowedAccessModes === void 0 ? void 0 : allowedAccessModes[0]]);
        }
    }, [accessMode, allowedAccessModes, setValue]);
    return (React.createElement(FormGroup, { fieldId: ACCESS_MODE_FIELDID, label: t('Access Mode') }, ACCESS_MODE_RADIO_OPTIONS.map(function (_a) {
        var label = _a.label, value = _a.value;
        return (React.createElement(Radio, { id: value, isChecked: value === accessMode, isDisabled: !(allowedAccessModes === null || allowedAccessModes === void 0 ? void 0 : allowedAccessModes.includes(value)), key: value, label: label, name: ACCESS_MODE_FIELD, onChange: function () { return setValue(ACCESS_MODE_FIELD, [value]); } }));
    })));
};
export default AccessMode;
//# sourceMappingURL=AccessMode.js.map