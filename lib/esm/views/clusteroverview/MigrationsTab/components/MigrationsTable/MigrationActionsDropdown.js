import React from 'react';
import ActionsDropdown from '@kubevirt-utils/components/ActionsDropdown/ActionsDropdown';
import useVirtualMachineInstanceMigrationActionsProvider from './hooks/useVirtualMachineInstanceMigrationActionsProvider';
var MigrationActionsDropdown = function (_a) {
    var isKebabToggle = _a.isKebabToggle, vmim = _a.vmim;
    var actions = useVirtualMachineInstanceMigrationActionsProvider(vmim)[0];
    return (React.createElement(ActionsDropdown, { actions: actions, id: "virtual-machine-instance-migration-actions", isKebabToggle: isKebabToggle }));
};
export default MigrationActionsDropdown;
//# sourceMappingURL=MigrationActionsDropdown.js.map