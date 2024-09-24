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
import React, { useState } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Checkbox, ExpandableSection, FormGroup, TextInput } from '@patternfly/react-core';
import ParameterValueEditor from './ParameterValueEditor';
var ParameterEditor = function (_a) {
    var isEditDisabled = _a.isEditDisabled, onChange = _a.onChange, parameter = _a.parameter;
    var t = useKubevirtTranslation().t;
    var _b = useState(true), isExpanded = _b[0], setExpanded = _b[1];
    return (React.createElement(ExpandableSection, { toggleContent: React.createElement(React.Fragment, null,
            React.createElement("strong", null,
                t('Name'),
                " "),
            " ",
            parameter.name), isExpanded: isExpanded, isIndented: true, onToggle: function (_, expand) { return setExpanded(expand); } },
        React.createElement(FormGroup, { fieldId: "".concat(parameter.name, "-required") },
            React.createElement(Checkbox, { id: "".concat(parameter.name, "-required"), isChecked: parameter.required, isDisabled: isEditDisabled, label: t('Required'), onChange: function (_event, required) { return onChange(__assign(__assign({}, parameter), { required: required })); } })),
        React.createElement(FormGroup, { fieldId: "".concat(parameter.name, "-description"), label: t('Description') },
            React.createElement(TextInput, { id: "".concat(parameter.name, "-description"), isDisabled: isEditDisabled, onChange: function (_event, description) { return onChange(__assign(__assign({}, parameter), { description: description })); }, value: parameter.description })),
        React.createElement(ParameterValueEditor, { isEditDisabled: isEditDisabled, onChange: onChange, parameter: parameter })));
};
export default ParameterEditor;
//# sourceMappingURL=ParameterEditor.js.map