import React from 'react';
import classNames from 'classnames';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup, TextInput, ValidatedOptions } from '@patternfly/react-core';
export var FieldGroup = function (_a) {
    var className = _a.className, field = _a.field, onChange = _a.onChange, showError = _a.showError;
    var t = useKubevirtTranslation().t;
    var description = field.description, displayName = field.displayName, name = field.name, required = field.required, value = field.value;
    var validated = showError && !value ? ValidatedOptions.error : ValidatedOptions.default;
    var fieldId = "vm-customize-".concat(name);
    var onFieldChange = function (newValue) {
        onChange(name, newValue);
    };
    return (React.createElement(FormGroup, { className: classNames('field-group', className), fieldId: fieldId, isRequired: required, label: displayName || name },
        React.createElement(TextInput, { "data-test-id": fieldId, id: fieldId, isRequired: required, name: name, onChange: function (_event, newValue) { return onFieldChange(newValue); }, type: "text", validated: validated, value: value }),
        React.createElement(FormGroupHelperText, { validated: validated }, showError && !value ? t('This field is required') : description)));
};
//# sourceMappingURL=FieldGroup.js.map