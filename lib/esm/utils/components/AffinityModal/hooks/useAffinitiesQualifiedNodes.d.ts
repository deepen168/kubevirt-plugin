import { IoK8sApiCoreV1Node } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { AffinityRowData } from '../utils/types';
export declare const useAffinitiesQualifiedNodes: (nodes: IoK8sApiCoreV1Node[], isNodesLoaded: boolean, affinities: AffinityRowData[], filter: (nodes: IoK8sApiCoreV1Node[][]) => IoK8sApiCoreV1Node[]) => IoK8sApiCoreV1Node[];
