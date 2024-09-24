import * as React from 'react';
import classNames from 'classnames';
import { Popover, PopoverPosition } from '@patternfly/react-core';
import { HelpIcon } from '@patternfly/react-icons';
import './HelpTextIcon.scss';
var HelpTextIcon = function (_a) {
    var bodyContent = _a.bodyContent, _b = _a.className, className = _b === void 0 ? 'help-text-icon__popover' : _b, _c = _a.helpIconClassName, helpIconClassName = _c === void 0 ? '' : _c, _d = _a.position, position = _d === void 0 ? PopoverPosition.top : _d;
    return (React.createElement(Popover, { "aria-label": 'Help', bodyContent: bodyContent, className: className, position: position },
        React.createElement(HelpIcon, { className: classNames('help-icon__cursor', helpIconClassName) })));
};
export default HelpTextIcon;
//# sourceMappingURL=HelpTextIcon.js.map