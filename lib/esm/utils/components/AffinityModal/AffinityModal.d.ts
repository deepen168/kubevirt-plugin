import * as React from 'react';
import { IoK8sApiCoreV1Node } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type AffinityModalProps = {
    isOpen: boolean;
    nodes: IoK8sApiCoreV1Node[];
    nodesLoaded: boolean;
    onClose: () => void;
    onSubmit: (updatedVM: V1VirtualMachine) => Promise<V1VirtualMachine | void>;
    vm: V1VirtualMachine;
};
declare const AffinityModal: React.FC<AffinityModalProps>;
export default AffinityModal;
