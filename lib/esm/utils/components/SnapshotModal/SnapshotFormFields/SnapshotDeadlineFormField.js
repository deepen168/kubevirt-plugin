import React, { useState } from 'react';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup, FormSelect, FormSelectOption, Grid, GridItem, TextInput, ValidatedOptions, } from '@patternfly/react-core';
import { deadlineUnits } from '../../../../views/virtualmachines/details/tabs/snapshots/utils/consts';
import { validateSnapshotDeadline } from '../../../../views/virtualmachines/details/tabs/snapshots/utils/helpers';
var SnapshotDeadlineFormField = function (_a) {
    var deadline = _a.deadline, deadlineUnit = _a.deadlineUnit, setDeadline = _a.setDeadline, setDeadlineUnit = _a.setDeadlineUnit, setIsError = _a.setIsError;
    var t = useKubevirtTranslation().t;
    var _b = useState(undefined), deadlineError = _b[0], setDeadlineError = _b[1];
    var handleDeadlineChange = function (value, event) {
        event.preventDefault();
        var error = validateSnapshotDeadline(value);
        setIsError(!!error);
        setDeadlineError(error);
        setDeadline(value);
    };
    var handleDeadlineUnitChange = function (value, event) {
        event.preventDefault();
        setDeadlineUnit(value);
    };
    var validated = deadlineError ? ValidatedOptions.error : ValidatedOptions.default;
    return (React.createElement(FormGroup, { fieldId: "deadline", label: t('Deadline') },
        React.createElement(Grid, { hasGutter: true },
            React.createElement(GridItem, { span: 8 },
                React.createElement(TextInput, { id: "deadline", onChange: function (event, value) { return handleDeadlineChange(value, event); }, type: "text", value: deadline })),
            React.createElement(GridItem, { span: 4 },
                React.createElement(FormSelect, { id: "deadline-unit", onChange: function (event, value) { return handleDeadlineUnitChange(value, event); }, value: deadlineUnit }, Object.entries(deadlineUnits).map(function (_a) {
                    var key = _a[0], value = _a[1];
                    return (React.createElement(FormSelectOption, { key: key, label: "".concat(key, " (").concat(value, ")"), value: value }));
                })))),
        React.createElement(FormGroupHelperText, { validated: validated }, deadlineError)));
};
export default SnapshotDeadlineFormField;
//# sourceMappingURL=SnapshotDeadlineFormField.js.map