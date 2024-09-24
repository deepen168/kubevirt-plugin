import { FC } from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
declare type TemplateBootloaderModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (updatedVM: V1Template) => Promise<V1Template | void>;
    template: V1Template;
};
declare const TemplateBootloaderModal: FC<TemplateBootloaderModalProps>;
export default TemplateBootloaderModal;
