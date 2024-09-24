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
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import { FormTextInput } from '@kubevirt-utils/components/FormTextInput/FormTextInput';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup, ValidatedOptions } from '@patternfly/react-core';
var ContainerSource = function (_a) {
    var onInputValueChange = _a.onInputValueChange, registrySourceHelperText = _a.registrySourceHelperText, selectedSourceType = _a.selectedSourceType, testId = _a.testId;
    var t = useKubevirtTranslation().t;
    var _b = useFormContext(), errors = _b.formState.errors, register = _b.register;
    var validated = (errors === null || errors === void 0 ? void 0 : errors["".concat(testId, "-containerImage")])
        ? ValidatedOptions.error
        : ValidatedOptions.default;
    return (React.createElement(FormGroup, { className: "disk-source-form-group", fieldId: "".concat(testId, "-").concat(selectedSourceType), isRequired: true, label: t('Container Image') },
        React.createElement(FormTextInput, __assign({}, register("".concat(testId, "-containerImage"), { required: true }), { "aria-label": t('Container Image'), "data-test-id": "".concat(testId, "-container-source-input"), id: "".concat(testId, "-").concat(selectedSourceType), onChange: onInputValueChange, type: "text", validated: validated })),
        React.createElement(FormGroupHelperText, { validated: validated }, (errors === null || errors === void 0 ? void 0 : errors["".concat(testId, "-containerImage")])
            ? t('This field is required')
            : registrySourceHelperText)));
};
export default ContainerSource;
//# sourceMappingURL=ContainerSource.js.map