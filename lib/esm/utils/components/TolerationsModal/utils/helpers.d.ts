import { IoK8sApiCoreV1Node } from '@kubevirt-ui/kubevirt-api/kubernetes';
export declare const getNodeTaintQualifier: <T extends unknown = any>(nodes: IoK8sApiCoreV1Node[], isNodesLoaded: boolean, constraints: T[]) => IoK8sApiCoreV1Node[];
