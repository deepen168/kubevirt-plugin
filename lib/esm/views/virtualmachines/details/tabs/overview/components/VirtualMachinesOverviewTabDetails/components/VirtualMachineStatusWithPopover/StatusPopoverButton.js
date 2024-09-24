import React from 'react';
import { Button, ButtonVariant } from '@patternfly/react-core';
import { getVMStatusIcon } from '@virtualmachines/utils';
var StatusPopoverButton = function (_a) {
    var vmPrintableStatus = _a.vmPrintableStatus;
    if (!vmPrintableStatus)
        return null;
    var Icon = getVMStatusIcon(vmPrintableStatus);
    return (React.createElement("span", null,
        React.createElement(Icon, null),
        ' ',
        React.createElement(Button, { isInline: true, variant: ButtonVariant.link }, vmPrintableStatus)));
};
export default StatusPopoverButton;
//# sourceMappingURL=StatusPopoverButton.js.map