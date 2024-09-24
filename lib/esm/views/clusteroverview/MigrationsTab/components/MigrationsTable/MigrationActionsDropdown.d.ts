import { FC } from 'react';
import { V1VirtualMachineInstanceMigration } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type MigrationActionsDropdownProps = {
    isKebabToggle?: boolean;
    vmim: V1VirtualMachineInstanceMigration;
};
declare const MigrationActionsDropdown: FC<MigrationActionsDropdownProps>;
export default MigrationActionsDropdown;
