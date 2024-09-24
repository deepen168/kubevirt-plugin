import { FC } from 'react';
import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './disklist.scss';
declare type DiskListProps = {
    customize?: boolean;
    onDiskUpdate?: (updatedVM: V1VirtualMachine) => Promise<V1VirtualMachine>;
    vm: V1VirtualMachine;
    vmi?: V1VirtualMachineInstance;
};
declare const DiskList: FC<DiskListProps>;
export default DiskList;
