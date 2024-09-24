import * as React from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
declare type NodeSelectorModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (updatedTemplate: V1Template) => Promise<V1Template | void>;
    template: V1Template;
};
declare const NodeSelectorModal: React.FC<NodeSelectorModalProps>;
export default NodeSelectorModal;
