import { FC } from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type DisksTableProps = {
    vmi: V1VirtualMachineInstance;
};
declare const DisksTable: FC<DisksTableProps>;
export default DisksTable;
