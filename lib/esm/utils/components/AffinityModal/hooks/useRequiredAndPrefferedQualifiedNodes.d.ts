import { IoK8sApiCoreV1Node } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { AffinityRowData } from '../utils/types';
declare type UseRequiredAndPrefferedQualifiedNodes = (nodes: IoK8sApiCoreV1Node[], nodesLoaded: boolean, affinities: AffinityRowData[]) => [IoK8sApiCoreV1Node[], IoK8sApiCoreV1Node[]];
export declare const useRequiredAndPrefferedQualifiedNodes: UseRequiredAndPrefferedQualifiedNodes;
export {};
