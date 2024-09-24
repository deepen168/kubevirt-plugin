import { FC } from 'react';
import { V1Template } from '@kubevirt-utils/models';
declare type DedicatedResourcesModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (updatedTemplate: V1Template) => Promise<V1Template | void>;
    template: V1Template;
};
declare const DedicatedResourcesModal: FC<DedicatedResourcesModalProps>;
export default DedicatedResourcesModal;
