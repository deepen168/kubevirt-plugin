import React from 'react';
import ActionsDropdown from '@kubevirt-utils/components/ActionsDropdown/ActionsDropdown';
import useUserPreferenceActionsProvider from './hooks/useUserPreferenceActionsProvider';
var UserPreferenceActions = function (_a) {
    var isKebabToggle = _a.isKebabToggle, preference = _a.preference;
    var actions = useUserPreferenceActionsProvider(preference);
    return (React.createElement(ActionsDropdown, { actions: actions, id: "virtual-machine-preference-actions", isKebabToggle: isKebabToggle }));
};
export default UserPreferenceActions;
//# sourceMappingURL=UserPreferenceActions.js.map