import * as React from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
declare type TolerationsModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (updatedTemplate: V1Template) => Promise<V1Template | void>;
    template: V1Template;
};
declare const TolerationsModal: React.FC<TolerationsModalProps>;
export default TolerationsModal;
