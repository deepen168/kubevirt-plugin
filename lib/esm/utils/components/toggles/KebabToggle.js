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
import { MenuToggle } from '@patternfly/react-core';
import { EllipsisVIcon } from '@patternfly/react-icons';
var KebabToggle = function (props) { return function (toggleRef) {
    return (React.createElement(MenuToggle, __assign({ ref: toggleRef }, props, { variant: "plain" }),
        React.createElement(EllipsisVIcon, null)));
}; };
export default KebabToggle;
//# sourceMappingURL=KebabToggle.js.map