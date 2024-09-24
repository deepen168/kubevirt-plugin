import React from 'react';
import { FormHelperText, HelperText, HelperTextItem, ValidatedOptions, } from '@patternfly/react-core';
import { ExclamationCircleIcon } from '@patternfly/react-icons';
var FormGroupHelperText = function (_a) {
    var children = _a.children, _b = _a.validated, validated = _b === void 0 ? ValidatedOptions.default : _b;
    return (React.createElement(FormHelperText, null,
        React.createElement(HelperText, null,
            React.createElement(HelperTextItem, { icon: validated === ValidatedOptions.error && React.createElement(ExclamationCircleIcon, { color: "red" }), variant: validated }, children))));
};
export default FormGroupHelperText;
//# sourceMappingURL=FormGroupHelperText.js.map