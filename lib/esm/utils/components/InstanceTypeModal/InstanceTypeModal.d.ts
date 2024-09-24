import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { InstanceTypeUnion } from '@virtualmachines/details/tabs/configuration/utils/types';
declare type InstanceTypeModalProps = {
    allInstanceTypes: InstanceTypeUnion[];
    instanceType: InstanceTypeUnion;
    instanceTypeVM: V1VirtualMachine;
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (updatedVM: V1VirtualMachine, instanceType: InstanceTypeUnion) => Promise<V1VirtualMachine>;
};
declare const InstanceTypeModal: FC<InstanceTypeModalProps>;
export default InstanceTypeModal;
