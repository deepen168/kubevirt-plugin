var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup, TextInput } from '@patternfly/react-core';
import { DISK_NAME_FIELD, VOLUME_NAME_FIELD } from '../utils/constants';
var DiskNameInput = function () {
    var t = useKubevirtTranslation().t;
    var _a = useFormContext(), register = _a.register, setValue = _a.setValue;
    return (React.createElement(FormGroup, { fieldId: "name", isRequired: true, label: t('Name') },
        React.createElement(TextInput, __assign({ id: "name" }, register(VOLUME_NAME_FIELD, {
            required: true,
            shouldUnregister: true,
        }), { onChange: function (_, newName) {
                setValue(VOLUME_NAME_FIELD, newName);
                setValue(DISK_NAME_FIELD, newName);
            } }))));
};
export default DiskNameInput;
//# sourceMappingURL=DiskNameInput.js.map