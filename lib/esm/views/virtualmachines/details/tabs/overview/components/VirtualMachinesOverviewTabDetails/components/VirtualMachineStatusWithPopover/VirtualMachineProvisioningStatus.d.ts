import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './virtualmachine-provisioning-status.scss';
declare type VirtualMachineProvisioningStatusProps = {
    vm: V1VirtualMachine;
};
declare const VirtualMachineProvisioningStatus: FC<VirtualMachineProvisioningStatusProps>;
export default VirtualMachineProvisioningStatus;
