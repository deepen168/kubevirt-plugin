import { IoK8sApiCoreV1Node } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { IDLabel } from '../utils/types';
export declare const useNodeLabelQualifier: <T extends IDLabel = IDLabel>(nodes: IoK8sApiCoreV1Node[], isNodesLoaded: boolean, constraints: T[]) => IoK8sApiCoreV1Node[];
