import { FC } from 'react';
import { V1beta1VirtualMachineSnapshot } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type SnapshotActionsMenuProps = {
    isRestoreDisabled: boolean;
    snapshot: V1beta1VirtualMachineSnapshot;
};
declare const SnapshotActionsMenu: FC<SnapshotActionsMenuProps>;
export default SnapshotActionsMenu;
