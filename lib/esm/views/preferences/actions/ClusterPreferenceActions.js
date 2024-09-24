import React from 'react';
import ActionsDropdown from '@kubevirt-utils/components/ActionsDropdown/ActionsDropdown';
import useClusterPreferenceActionsProvider from './hooks/useClusterPreferenceActionsProvider';
var ClusterPreferenceActions = function (_a) {
    var isKebabToggle = _a.isKebabToggle, preference = _a.preference;
    var actions = useClusterPreferenceActionsProvider(preference)[0];
    return (React.createElement(ActionsDropdown, { actions: actions, id: "virtual-machine-cluster-preference-actions", isKebabToggle: isKebabToggle }));
};
export default ClusterPreferenceActions;
//# sourceMappingURL=ClusterPreferenceActions.js.map