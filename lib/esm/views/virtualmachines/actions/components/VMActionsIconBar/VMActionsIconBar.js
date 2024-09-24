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
import { Split } from '@patternfly/react-core';
import ActionIconButton from '@virtualmachines/actions/components/VMActionsIconBar/components/ActionIconButton';
import { getVMActionIconsDetails } from '@virtualmachines/actions/components/VMActionsIconBar/utils/utils';
var VMActionsIconBar = function (_a) {
    var vm = _a.vm;
    return (React.createElement(Split, { className: "vm-actions-icon-bar" }, getVMActionIconsDetails(vm).map(function (actionDetails) {
        var _a;
        return (React.createElement(ActionIconButton, __assign({}, actionDetails, { key: (_a = actionDetails === null || actionDetails === void 0 ? void 0 : actionDetails.action) === null || _a === void 0 ? void 0 : _a.id })));
    })));
};
export default VMActionsIconBar;
//# sourceMappingURL=VMActionsIconBar.js.map