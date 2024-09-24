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
import * as React from 'react';
import { K8sIoApiCoreV1TolerationEffectEnum } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, ButtonVariant, FormSelect, FormSelectOption, GridItem, TextInput, } from '@patternfly/react-core';
import { MinusCircleIcon } from '@patternfly/react-icons';
var TolerationEditRow = function (_a) {
    var label = _a.label, onChange = _a.onChange, onDelete = _a.onDelete;
    var effect = label.effect, id = label.id, key = label.key, value = label.value;
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement(GridItem, { span: 4 },
            React.createElement(TextInput, { id: "toleration-".concat(id, "-key-input"), isRequired: true, onChange: function (_event, newKey) { return onChange(__assign(__assign({}, label), { key: newKey })); }, placeholder: t('Taint key'), type: "text", value: key })),
        React.createElement(GridItem, { span: 4 },
            React.createElement(TextInput, { id: "toleration-".concat(id, "-value-input"), isRequired: true, onChange: function (_event, newValue) { return onChange(__assign(__assign({}, label), { value: newValue })); }, placeholder: t('Taint value'), type: "text", value: value })),
        React.createElement(GridItem, { span: 3 },
            React.createElement(FormSelect, { onChange: function (_event, newEffect) {
                    return onChange(__assign(__assign({}, label), { effect: newEffect }));
                }, id: "toleration-".concat(id, "-effect-select"), isRequired: true, value: effect }, Object.values(K8sIoApiCoreV1TolerationEffectEnum).map(function (effectOption) { return (React.createElement(FormSelectOption, { key: effectOption, label: effectOption, value: effectOption })); }))),
        React.createElement(GridItem, { span: 1 },
            React.createElement(Button, { id: "toleration-".concat(id, "-delete-btn"), onClick: function () { return onDelete(id); }, variant: ButtonVariant.plain },
                React.createElement(MinusCircleIcon, null)))));
};
export default TolerationEditRow;
//# sourceMappingURL=TolerationEditRow.js.map