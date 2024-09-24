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
import { SelectOption } from '@patternfly/react-core';
import InlineFilterSelectOptionContent from './InlineFilterSelectOptionContent';
var InlineFilterSelectOption = function (_a) {
    var _b;
    var isFocused = _a.isFocused, option = _a.option;
    return (React.createElement(SelectOption, __assign({ "data-test-id": "select-option-".concat(option.value), id: "select-inline-filter-".concat((_b = option.value) === null || _b === void 0 ? void 0 : _b.replace(' ', '-')), isFocused: isFocused, value: option.value }, option),
        React.createElement(InlineFilterSelectOptionContent, { option: option })));
};
export default InlineFilterSelectOption;
//# sourceMappingURL=InlineFilterSelectOption.js.map