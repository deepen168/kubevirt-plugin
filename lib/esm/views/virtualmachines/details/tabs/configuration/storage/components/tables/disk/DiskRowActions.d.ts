import { FC } from 'react';
import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { DiskRowDataLayout } from '@kubevirt-utils/resources/vm/utils/disk/constants';
declare type DiskRowActionsProps = {
    customize?: boolean;
    obj: DiskRowDataLayout;
    onDiskUpdate?: (updatedVM: V1VirtualMachine) => Promise<V1VirtualMachine>;
    vm: V1VirtualMachine;
    vmi?: V1VirtualMachineInstance;
};
declare const DiskRowActions: FC<DiskRowActionsProps>;
export default DiskRowActions;
