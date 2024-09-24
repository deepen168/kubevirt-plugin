import React from 'react';
import ActionsDropdown from '@kubevirt-utils/components/ActionsDropdown/ActionsDropdown';
import useUserInstancetypeActionsProvider from './hooks/useUserInstancetypeActionsProvider';
var UserInstancetypeActions = function (_a) {
    var instanceType = _a.instanceType, isKebabToggle = _a.isKebabToggle;
    var actions = useUserInstancetypeActionsProvider(instanceType)[0];
    return (React.createElement(ActionsDropdown, { actions: actions, id: "virtual-machine-user-instance-type-actions", isKebabToggle: isKebabToggle }));
};
export default UserInstancetypeActions;
//# sourceMappingURL=UserInstancetypeActions.js.map