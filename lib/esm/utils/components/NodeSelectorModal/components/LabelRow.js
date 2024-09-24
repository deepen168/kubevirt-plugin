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
import PlainIconButton from '@kubevirt-utils/components/HardwareDevices/form/PlainIconButton';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup, GridItem, TextInput } from '@patternfly/react-core';
import { MinusCircleIcon } from '@patternfly/react-icons';
var LabelRow = function (_a) {
    var label = _a.label, onChange = _a.onChange, onDelete = _a.onDelete;
    var t = useKubevirtTranslation().t;
    var id = label.id, key = label.key, value = label.value;
    var handlePasteLabelKey = function (event) {
        event.preventDefault();
        var text = event.clipboardData.getData('text');
        var strings = text.split('=');
        if (strings.length > 1)
            return onChange(__assign(__assign({}, label), { key: strings[0], value: strings[1] }));
        return onChange(__assign(__assign({}, label), { key: text }));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(GridItem, { span: 6 },
            React.createElement(FormGroup, { fieldId: "label-".concat(id, "-key-input"), label: t('Key') },
                React.createElement(TextInput, { "aria-label": t('selector key'), id: "label-".concat(id, "-key-input"), isRequired: true, onChange: function (_event, newKey) { return onChange(__assign(__assign({}, label), { key: newKey })); }, onPaste: handlePasteLabelKey, placeholder: t('Key'), type: "text", value: key }))),
        React.createElement(GridItem, { span: 5 },
            React.createElement(FormGroup, { fieldId: "label-".concat(id, "-value-input"), label: t('Value') },
                React.createElement(TextInput, { "aria-label": t('selector value'), id: "label-".concat(id, "-value-input"), isRequired: true, onChange: function (_event, newValue) { return onChange(__assign(__assign({}, label), { value: newValue })); }, placeholder: t('Value'), type: "text", value: value }))),
        React.createElement(PlainIconButton, { fieldId: "label-".concat(id, "-delete-btn"), icon: React.createElement(MinusCircleIcon, null), onClick: function () { return onDelete(id); } })));
};
export default LabelRow;
//# sourceMappingURL=LabelRow.js.map