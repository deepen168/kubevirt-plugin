import { Dispatch, FC, SetStateAction } from 'react';
import { IoK8sApiCoreV1Node } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { AffinityRowData } from '../../utils/types';
declare type AffinityEditModalProps = {
    focusedAffinity: AffinityRowData;
    isOpen: boolean;
    nodes: IoK8sApiCoreV1Node[];
    nodesLoaded: boolean;
    onCancel: () => void;
    onSubmit: (affinity: AffinityRowData) => void;
    setFocusedAffinity: Dispatch<SetStateAction<AffinityRowData>>;
    title: string;
};
declare const AffinityEditModal: FC<AffinityEditModalProps>;
export default AffinityEditModal;
