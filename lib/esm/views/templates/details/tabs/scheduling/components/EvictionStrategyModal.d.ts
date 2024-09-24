import { FC } from 'react';
import { V1Template } from '@kubevirt-utils/models';
declare type EvictionStrategyModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (updatedVM: V1Template) => Promise<V1Template | void>;
    template: V1Template;
};
declare const EvictionStrategyModal: FC<EvictionStrategyModalProps>;
export default EvictionStrategyModal;
