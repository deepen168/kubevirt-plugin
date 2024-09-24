import React from 'react';
import ActionsDropdown from '@kubevirt-utils/components/ActionsDropdown/ActionsDropdown';
import useBootableVolumesActions from './hooks/useBootableVolumesActions';
var BootableVolumesActions = function (_a) {
    var preferences = _a.preferences, source = _a.source;
    var actions = useBootableVolumesActions(source, preferences)[0];
    return React.createElement(ActionsDropdown, { actions: actions, id: "bootable-volumes-actions", isKebabToggle: true });
};
export default BootableVolumesActions;
//# sourceMappingURL=BootableVolumesActions.js.map