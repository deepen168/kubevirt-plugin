import React, { useCallback, useEffect, useState } from 'react';
import { ACCESS_MODE_RADIO_OPTIONS, getAccessModeForProvisioner, } from '@kubevirt-utils/components/DiskModal/components/utils/modesMapping';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup, Radio } from '@patternfly/react-core';
var UploadPVCFormAccessMode = function (_a) {
    var _b = _a.availableAccessModes, availableAccessModes = _b === void 0 ? [] : _b, initialAccessMode = _a.initialAccessMode, loaded = _a.loaded, onChange = _a.onChange, provisioner = _a.provisioner;
    var t = useKubevirtTranslation().t;
    var _c = useState(availableAccessModes), allowedAccessModes = _c[0], setAllowedAccessModes = _c[1];
    var _d = useState(initialAccessMode), accessMode = _d[0], setAccessMode = _d[1];
    var changeAccessMode = useCallback(function (mode) {
        setAccessMode(mode);
        onChange(mode);
    }, [onChange]);
    useEffect(function () {
        if (loaded) {
            setAllowedAccessModes(getAccessModeForProvisioner(provisioner, null));
        }
    }, [loaded, provisioner]);
    useEffect(function () {
        // Make sure the default or already checked radio button value is from any one of allowed the access mode
        if (allowedAccessModes && !allowedAccessModes.includes(accessMode)) {
            // Old access mode will be disabled
            changeAccessMode(allowedAccessModes === null || allowedAccessModes === void 0 ? void 0 : allowedAccessModes[0]);
        }
    }, [accessMode, allowedAccessModes, changeAccessMode]);
    return (React.createElement(FormGroup, { fieldId: "access-mode", isRequired: true, label: t('Access mode') },
        loaded &&
            allowedAccessModes &&
            ACCESS_MODE_RADIO_OPTIONS.map(function (_a) {
                var label = _a.label, value = _a.value;
                var disabled = !allowedAccessModes.includes(value);
                var checked = value === accessMode;
                return (React.createElement(Radio, { checked: checked, id: label, isDisabled: disabled, key: value, label: label, name: "accessMode", onChange: function (event) { var _a; return changeAccessMode((_a = event === null || event === void 0 ? void 0 : event.currentTarget) === null || _a === void 0 ? void 0 : _a.value); }, value: value }));
            }),
        (!loaded || !allowedAccessModes) && React.createElement("div", { className: "skeleton-text" })));
};
export default UploadPVCFormAccessMode;
//# sourceMappingURL=UploadPVCFormAccessMode.js.map