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
import { HTTP_SOURCE_NAME } from '../../constants';
var HTTPSource = function (_a) {
    var httpSourceHelperURL = _a.httpSourceHelperURL, onInputValueChange = _a.onInputValueChange, testId = _a.testId;
    var t = useKubevirtTranslation().t;
    var _b = useFormContext(), errors = _b.formState.errors, register = _b.register;
    return (React.createElement(FormGroup, { className: "disk-source-form-group", fieldId: "".concat(testId, "-").concat(HTTP_SOURCE_NAME), isRequired: true, label: t('Image URL') },
        React.createElement(FormTextInput, __assign({}, register("".concat(testId, "-httpURL"), { required: true }), { validated: (errors === null || errors === void 0 ? void 0 : errors["".concat(testId, "-httpURL")]) ? ValidatedOptions.error : ValidatedOptions.default, "aria-label": t('Image URL'), "data-test-id": "".concat(testId, "-http-source-input"), id: "".concat(testId, "-").concat(HTTP_SOURCE_NAME), onChange: onInputValueChange, type: "text" })),
        React.createElement(FormGroupHelperText, { validated: (errors === null || errors === void 0 ? void 0 : errors["".concat(testId, "-httpURL")]) ? ValidatedOptions.error : ValidatedOptions.default }, (errors === null || errors === void 0 ? void 0 : errors["".concat(testId, "-httpURL")])
            ? t('This field is required')
            : httpSourceHelperURL && (React.createElement(React.Fragment, null,
                t('Enter URL to download. For example: '),
                React.createElement("a", { href: httpSourceHelperURL, rel: "noreferrer", target: "_blank" }, httpSourceHelperURL))))));
};
export default HTTPSource;
//# sourceMappingURL=HTTPSource.js.map