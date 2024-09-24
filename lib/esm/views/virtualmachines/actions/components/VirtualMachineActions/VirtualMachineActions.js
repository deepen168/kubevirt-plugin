import React, { memo } from 'react';
import ActionsDropdown from '@kubevirt-utils/components/ActionsDropdown/ActionsDropdown';
import './VirtualMachineActions.scss';
var VirtualMachineActions = function (_a) {
    var actions = _a.actions, isKebabToggle = _a.isKebabToggle;
    return (React.createElement(ActionsDropdown, { actions: actions, className: "VirtualMachineActions", id: "virtual-machine-actions", isKebabToggle: isKebabToggle }));
};
export default memo(VirtualMachineActions);
//# sourceMappingURL=VirtualMachineActions.js.map