import React, { useEffect, useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup, Radio } from '@patternfly/react-core';
import { ACCESS_MODE_FIELD, STORAGE_CLASS_PROVIDER_FIELD, VOLUME_MODE_FIELD, VOLUMEMODE_FIELDID, } from '../utils/constants';
import { getVolumeModeForProvisioner, VOLUME_MODE_RADIO_OPTIONS, } from '../utils/modesMapping';
var VolumeMode = function () {
    var t = useKubevirtTranslation().t;
    var _a = useFormContext(), control = _a.control, setValue = _a.setValue, watch = _a.watch;
    var volumeMode = watch(VOLUME_MODE_FIELD);
    var accessModes = watch(ACCESS_MODE_FIELD);
    var storageClassProvisioner = watch(STORAGE_CLASS_PROVIDER_FIELD);
    var allowedVolumeModes = useMemo(function () { return getVolumeModeForProvisioner(storageClassProvisioner, accessModes === null || accessModes === void 0 ? void 0 : accessModes[0]); }, [accessModes, storageClassProvisioner]);
    useEffect(function () {
        if (!(allowedVolumeModes === null || allowedVolumeModes === void 0 ? void 0 : allowedVolumeModes.includes(volumeMode))) {
            setValue(VOLUME_MODE_FIELD, allowedVolumeModes[0]);
        }
    }, [allowedVolumeModes, volumeMode, setValue]);
    return (React.createElement(FormGroup, { fieldId: VOLUMEMODE_FIELDID, label: t('Volume Mode') }, VOLUME_MODE_RADIO_OPTIONS.map(function (_a) {
        var label = _a.label, value = _a.value;
        return (React.createElement(Controller, { render: function (_a) {
                var onChange = _a.field.onChange;
                return (React.createElement(Radio, { id: value, isChecked: value === volumeMode, isDisabled: !(allowedVolumeModes === null || allowedVolumeModes === void 0 ? void 0 : allowedVolumeModes.includes(value)), key: value, label: label, name: VOLUME_MODE_FIELD, onChange: function () { return onChange(value); } }));
            }, control: control, key: value, name: VOLUME_MODE_FIELD }));
    })));
};
export default VolumeMode;
//# sourceMappingURL=VolumeMode.js.map