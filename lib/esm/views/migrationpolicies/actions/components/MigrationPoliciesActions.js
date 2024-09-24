import React from 'react';
import ActionsDropdown from '@kubevirt-utils/components/ActionsDropdown/ActionsDropdown';
import useMigrationPoliciesActionsProvider from '../hooks/useMigrationPoliciesActionsProvider';
var MigrationPoliciesActions = function (_a) {
    var isKebabToggle = _a.isKebabToggle, mp = _a.mp;
    var actions = useMigrationPoliciesActionsProvider(mp)[0];
    return (React.createElement(ActionsDropdown, { actions: actions, id: "migration-policies-actions", isKebabToggle: isKebabToggle }));
};
export default MigrationPoliciesActions;
//# sourceMappingURL=MigrationPoliciesActions.js.map