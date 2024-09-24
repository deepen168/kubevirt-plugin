import { FC } from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import './clone-template-modal.scss';
declare type CloneTemplateModalProps = {
    isOpen: boolean;
    obj: V1Template;
    onClose: () => void;
    onTemplateCloned?: (clonedTemplate: V1Template) => void;
};
declare const CloneTemplateModal: FC<CloneTemplateModalProps>;
export default CloneTemplateModal;
