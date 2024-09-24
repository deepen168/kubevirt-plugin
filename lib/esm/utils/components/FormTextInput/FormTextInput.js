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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { forwardRef } from 'react';
import { TextInput } from '@patternfly/react-core';
export var FormTextInput = forwardRef(function (_a, ref) {
    var onChange = _a.onChange, props = __rest(_a, ["onChange"]);
    var onChangeForward = function (event) { return onChange === null || onChange === void 0 ? void 0 : onChange(event); };
    return (React.createElement(TextInput, __assign({}, props, { onChange: function (event, _value) { return onChangeForward(event, _value); }, ref: ref })));
});
// We need to fake the displayName to match what PatternFly expects.
// This is because PatternFly uses it to filter children in certain aspects.
// This is a stupid approach, but it's not like we can change that.
FormTextInput.displayName = 'TextInput';
//# sourceMappingURL=FormTextInput.js.map