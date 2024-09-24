import React from 'react';
import { Button, FormSelect, FormSelectOption } from '@patternfly/react-core';
import { MinusCircleIcon } from '@patternfly/react-icons';
export var AddDeviceFormSelect = function (_a) {
    var id = _a.id, label = _a.label, onAdd = _a.onAdd, onDelete = _a.onDelete, options = _a.options;
    return (React.createElement(React.Fragment, null,
        React.createElement(FormSelect, { className: "kubevirt-boot-order__add-device-select", id: id, onChange: function (_, value) { return onAdd(value); }, value: "" },
            React.createElement(FormSelectOption, { label: label, value: "" }),
            options.map(function (option) { return (React.createElement(FormSelectOption, { key: option.value.name, label: "".concat(option.value.name, " (").concat(option.typeLabel, ")"), value: option.value.name })); })),
        React.createElement(Button, { className: "kubevirt-boot-order__add-device-delete-btn", onClick: onDelete, variant: "link" },
            React.createElement(MinusCircleIcon, null))));
};
//# sourceMappingURL=add-device-form-select.js.map