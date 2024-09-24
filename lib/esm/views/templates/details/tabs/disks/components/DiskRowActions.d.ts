import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type DiskRowActionsProps = {
    diskName: string;
    isDisabled?: boolean;
    onUpdate: (updatedVM: V1VirtualMachine) => Promise<void>;
    vm: V1VirtualMachine;
};
declare const DiskRowActions: FC<DiskRowActionsProps>;
export default DiskRowActions;
