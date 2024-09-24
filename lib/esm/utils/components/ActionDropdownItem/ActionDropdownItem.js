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
import classNames from 'classnames';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { useAccessReview } from '@openshift-console/dynamic-plugin-sdk';
import { DropdownItem, TooltipPosition } from '@patternfly/react-core';
import './action-dropdown-item.scss';
var ActionDropdownItem = function (_a) {
    var action = _a.action, setIsOpen = _a.setIsOpen;
    var t = useKubevirtTranslation().t;
    var actionAllowed = useAccessReview(action === null || action === void 0 ? void 0 : action.accessReview)[0];
    var isCloneDisabled = !actionAllowed && (action === null || action === void 0 ? void 0 : action.id) === 'vm-action-clone';
    var handleClick = function () {
        if (typeof (action === null || action === void 0 ? void 0 : action.cta) === 'function') {
            action === null || action === void 0 ? void 0 : action.cta();
            setIsOpen(false);
        }
    };
    return (React.createElement(DropdownItem, __assign({ "data-test-id": "".concat(action === null || action === void 0 ? void 0 : action.id), description: action === null || action === void 0 ? void 0 : action.description, isDisabled: (action === null || action === void 0 ? void 0 : action.disabled) || !actionAllowed, key: action === null || action === void 0 ? void 0 : action.id, onClick: handleClick }, (isCloneDisabled && {
        tooltipProps: {
            content: t("You don't have permission to perform this action"),
            position: TooltipPosition.left,
        },
    }), { className: classNames({ ActionDropdownItem__disabled: isCloneDisabled }) }), action === null || action === void 0 ? void 0 :
        action.label,
        (action === null || action === void 0 ? void 0 : action.icon) && (React.createElement(React.Fragment, null,
            ' ',
            React.createElement("span", { className: "text-muted" }, action.icon)))));
};
export default ActionDropdownItem;
//# sourceMappingURL=ActionDropdownItem.js.map