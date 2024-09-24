import * as React from 'react';
import { IoK8sApiCoreV1Node } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { AffinityRowData } from '../../utils/types';
declare type AffinityListProps = {
    affinities: AffinityRowData[];
    nodesLoaded: boolean;
    onAffinityClickAdd: () => void;
    onDelete: (affinity: AffinityRowData) => void;
    onEdit: (affinity: AffinityRowData) => void;
    prefferedQualifiedNodes: IoK8sApiCoreV1Node[];
    qualifiedNodes: IoK8sApiCoreV1Node[];
};
declare const AffinityList: React.FC<AffinityListProps>;
export default AffinityList;
