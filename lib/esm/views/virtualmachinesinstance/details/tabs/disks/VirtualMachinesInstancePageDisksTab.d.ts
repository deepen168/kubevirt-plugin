import { FC } from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './VirtualMachinesInstancePageDisksTab.scss';
declare type VirtualMachinesInstancePageDisksTabProps = {
    obj: V1VirtualMachineInstance;
};
declare const VirtualMachinesInstancePageDisksTab: FC<VirtualMachinesInstancePageDisksTabProps>;
export default VirtualMachinesInstancePageDisksTab;
