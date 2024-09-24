import React from 'react';
import ActionsDropdown from '@kubevirt-utils/components/ActionsDropdown/ActionsDropdown';
import useVirtualMachineTemplatesActions, { EDIT_TEMPLATE_ID, } from './hooks/useVirtualMachineTemplatesActions';
var VirtualMachineTemplatesActions = function (_a) {
    var isKebabToggle = _a.isKebabToggle, template = _a.template;
    var _b = useVirtualMachineTemplatesActions(template), actions = _b[0], onLazyActions = _b[1];
    var filteredActions = actions.filter(function (action) { return action.id !== EDIT_TEMPLATE_ID; });
    return (React.createElement(ActionsDropdown, { actions: isKebabToggle ? actions : filteredActions, isKebabToggle: isKebabToggle, onLazyClick: onLazyActions }));
};
export default VirtualMachineTemplatesActions;
//# sourceMappingURL=VirtualMachineTemplatesActions.js.map