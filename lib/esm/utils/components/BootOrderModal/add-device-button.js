import * as React from 'react';
import { Button, Text, TextVariants } from '@patternfly/react-core';
import { PlusCircleIcon } from '@patternfly/react-icons';
export var AddDeviceButton = function (_a) {
    var disabledMessage = _a.disabledMessage, id = _a.id, isDisabled = _a.isDisabled, message = _a.message, onClick = _a.onClick;
    return isDisabled ? (React.createElement(Text, { component: TextVariants.p }, disabledMessage)) : (React.createElement(Button, { className: "pf-m-link--align-left", icon: React.createElement(PlusCircleIcon, null), id: id, onClick: onClick, variant: "link" }, message));
};
//# sourceMappingURL=add-device-button.js.map