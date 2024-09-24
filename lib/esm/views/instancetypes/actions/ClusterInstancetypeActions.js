import React from 'react';
import ActionsDropdown from '@kubevirt-utils/components/ActionsDropdown/ActionsDropdown';
import useClusterInstancetypeActionsProvider from './hooks/useClusterInstancetypeActionsProvider';
var ClusterInstancetypeActions = function (_a) {
    var instanceType = _a.instanceType, isKebabToggle = _a.isKebabToggle;
    var actions = useClusterInstancetypeActionsProvider(instanceType)[0];
    return (React.createElement(ActionsDropdown, { actions: actions, id: "virtual-machine-cluster-instance-type-actions", isKebabToggle: isKebabToggle }));
};
export default ClusterInstancetypeActions;
//# sourceMappingURL=ClusterInstancetypeActions.js.map