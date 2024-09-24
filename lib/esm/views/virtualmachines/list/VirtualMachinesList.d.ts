import { FC } from 'react';
import '@kubevirt-utils/styles/list-managment-group.scss';
import './VirtualMachinesList.scss';
declare type VirtualMachinesListProps = {
    kind: string;
    namespace: string;
};
declare const VirtualMachinesList: FC<VirtualMachinesListProps>;
export default VirtualMachinesList;
