import * as React from 'react';
import { IoK8sApiCoreV1Node } from '@kubevirt-ui/kubevirt-api/kubernetes/models';
import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type TolerationsModalProps = {
    isOpen: boolean;
    nodes?: IoK8sApiCoreV1Node[];
    nodesLoaded?: boolean;
    onClose: () => void;
    onSubmit: (updatedVM: V1VirtualMachine) => Promise<V1VirtualMachine | void>;
    vm?: V1VirtualMachine;
    vmi?: V1VirtualMachineInstance;
};
declare const TolerationsModal: React.FC<TolerationsModalProps>;
export default TolerationsModal;
