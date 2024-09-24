import React from 'react';
import classNames from 'classnames';
import { useAccessReview } from '@openshift-console/dynamic-plugin-sdk';
import { Button, ButtonVariant, SplitItem, Tooltip } from '@patternfly/react-core';
import '../VMActionsIconBar.scss';
var ActionIconButton = function (_a) {
    var action = _a.action, Icon = _a.Icon, iconClassname = _a.iconClassname, isHidden = _a.isHidden;
    var actionAllowed = useAccessReview(action === null || action === void 0 ? void 0 : action.accessReview)[0];
    var handleClick = function () {
        if (typeof (action === null || action === void 0 ? void 0 : action.cta) === 'function') {
            action === null || action === void 0 ? void 0 : action.cta();
        }
    };
    return (!isHidden && (React.createElement(SplitItem, null,
        React.createElement(Tooltip, { content: action === null || action === void 0 ? void 0 : action.label },
            React.createElement(Button, { className: "vm-actions-icon-bar__button", "data-test-id": "".concat(action === null || action === void 0 ? void 0 : action.id, "-button"), isDisabled: !actionAllowed, onClick: handleClick, variant: ButtonVariant.link },
                React.createElement(Icon, { className: classNames(iconClassname, 'vm-actions-icon-bar__icon') }))))));
};
export default ActionIconButton;
//# sourceMappingURL=ActionIconButton.js.map