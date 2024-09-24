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
import FormPFSelect from '@kubevirt-utils/components/FormPFSelect/FormPFSelect';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup, SelectOption, TextInput } from '@patternfly/react-core';
import { PARAMETER_VALUE_TYPES } from './constants';
import { getValueTypeFromParameter } from './utils';
var SelectParameterValueType = function (_a) {
    var isEditDisabled = _a.isEditDisabled, onChange = _a.onChange, parameter = _a.parameter;
    var t = useKubevirtTranslation().t;
    var valueType = getValueTypeFromParameter(parameter);
    var handleChange = function (event, value) {
        var newParameter = __assign({}, parameter);
        switch (value) {
            case PARAMETER_VALUE_TYPES.GENERATED:
                delete newParameter.value;
                onChange(__assign(__assign({}, newParameter), { generate: 'expression' }));
                break;
            case PARAMETER_VALUE_TYPES.VALUE:
                delete newParameter.generate;
                delete newParameter.from;
                onChange(__assign(__assign({}, newParameter), { value: '' }));
                break;
            case PARAMETER_VALUE_TYPES.NONE:
                delete newParameter.generate;
                delete newParameter.from;
                delete newParameter.value;
                onChange(newParameter);
                break;
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(FormGroup, { fieldId: "".concat(parameter.name, "-value-type"), label: t('Default value type') },
            React.createElement(FormPFSelect, { onSelect: handleChange, selected: valueType, toggleProps: { isDisabled: isEditDisabled } },
                React.createElement(SelectOption, { description: t('Value generated using an expression'), value: PARAMETER_VALUE_TYPES.GENERATED },
                    React.createElement("span", { "data-test-id": PARAMETER_VALUE_TYPES.GENERATED }, t('Generated (expression)'))),
                React.createElement(SelectOption, { description: t('Default value for this parameter'), value: PARAMETER_VALUE_TYPES.VALUE },
                    React.createElement("span", { "data-test-id": PARAMETER_VALUE_TYPES.VALUE }, t('Value'))),
                React.createElement(SelectOption, { description: t('No default value'), value: PARAMETER_VALUE_TYPES.NONE },
                    React.createElement("span", { "data-test-id": PARAMETER_VALUE_TYPES.NONE }, t('None'))))),
        valueType === PARAMETER_VALUE_TYPES.VALUE && (React.createElement(FormGroup, { className: "form-group-indented", fieldId: "".concat(parameter.name, "-value"), label: t('Value') },
            React.createElement(TextInput, { id: "".concat(parameter.name, "-value"), isDisabled: isEditDisabled, onChange: function (_event, value) { return onChange(__assign(__assign({}, parameter), { value: value })); }, value: parameter.value }))),
        valueType === PARAMETER_VALUE_TYPES.GENERATED && (React.createElement(FormGroup, { className: "form-group-indented", fieldId: "".concat(parameter.name, "-generated"), label: t('From') },
            React.createElement(TextInput, { id: "".concat(parameter.name, "-generated"), isDisabled: isEditDisabled, onChange: function (_event, expression) { return onChange(__assign(__assign({}, parameter), { from: expression })); }, value: parameter.from })))));
};
export default SelectParameterValueType;
//# sourceMappingURL=ParameterValueEditor.js.map