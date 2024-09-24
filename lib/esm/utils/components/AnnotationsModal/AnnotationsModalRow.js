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
import React, { memo } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, GridItem, TextInput } from '@patternfly/react-core';
import { MinusCircleIcon } from '@patternfly/react-icons';
export var AnnotationsModalRow = memo(function (_a) {
    var annotation = _a.annotation, onChange = _a.onChange, onDelete = _a.onDelete;
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement(GridItem, { span: 5 },
            React.createElement(TextInput, { "aria-label": t('annotation key'), autoFocus: true, className: "annotation-form-input", isRequired: true, maxLength: 255, onChange: function (_event, newKey) { return onChange(__assign(__assign({}, annotation), { key: newKey })); }, placeholder: t('annotation key'), size: 1, type: "text", value: annotation.key })),
        React.createElement(GridItem, { span: 5 },
            React.createElement(TextInput, { "aria-label": t('annotation value'), className: "annotation-form-input", isRequired: true, maxLength: 255, onChange: function (_event, newValue) { return onChange(__assign(__assign({}, annotation), { value: newValue })); }, placeholder: t('annotation value'), type: "text", value: annotation.value })),
        React.createElement(GridItem, { span: 2 },
            React.createElement(Button, { onClick: function () { return onDelete(); }, variant: "plain" },
                React.createElement(MinusCircleIcon, null)))));
});
AnnotationsModalRow.displayName = 'AnnotationModalRow';
//# sourceMappingURL=AnnotationsModalRow.js.map