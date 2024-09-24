import * as React from 'react';
import { IoK8sApiCoreV1Node } from '@kubevirt-ui/kubevirt-api/kubernetes/models';
declare type NodeCheckerAlertProps = {
    nodesLoaded: boolean;
    prefferedQualifiedNodes?: IoK8sApiCoreV1Node[];
    qualifiedNodes: IoK8sApiCoreV1Node[];
};
declare const NodeCheckerAlert: React.FC<NodeCheckerAlertProps>;
export default NodeCheckerAlert;
