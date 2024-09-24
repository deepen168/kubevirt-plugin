import { FC } from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import '@kubevirt-utils/components/CPUMemoryModal/cpu-memory-modal.scss';
declare type CPUMemoryModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (updatedVMTemplate: V1Template) => Promise<V1Template | void>;
    template: V1Template;
};
declare const CPUMemoryModal: FC<CPUMemoryModalProps>;
export default CPUMemoryModal;
