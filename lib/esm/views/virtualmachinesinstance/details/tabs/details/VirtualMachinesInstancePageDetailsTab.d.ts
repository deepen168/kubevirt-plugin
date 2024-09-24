import { FC } from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './virtual-machines-instance-details-tab.scss';
declare type VirtualMachinesInstancePageDetailsTabProps = {
    obj: V1VirtualMachineInstance;
};
declare const VirtualMachinesInstancePageDetailsTab: FC<VirtualMachinesInstancePageDetailsTabProps>;
export default VirtualMachinesInstancePageDetailsTab;
