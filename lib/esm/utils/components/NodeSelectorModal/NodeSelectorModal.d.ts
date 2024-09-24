import { FC } from 'react';
import { IoK8sApiCoreV1Node } from '@kubevirt-ui/kubevirt-api/kubernetes/models';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type NodeSelectorModalProps = {
    isOpen: boolean;
    nodes?: IoK8sApiCoreV1Node[];
    nodesLoaded?: boolean;
    onClose: () => void;
    onSubmit: (updatedVM: V1VirtualMachine) => Promise<V1VirtualMachine | void>;
    vm: V1VirtualMachine;
};
declare const NodeSelectorModal: FC<NodeSelectorModalProps>;
export default NodeSelectorModal;
