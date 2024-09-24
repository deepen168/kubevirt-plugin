import { IoK8sApiCoreV1Node } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { K8sIoApiCoreV1Affinity } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { AffinityLabel, AffinityRowData } from './types';
export declare const getRowsDataFromAffinity: (affinity: K8sIoApiCoreV1Affinity) => AffinityRowData[];
export declare const getAffinityFromRowsData: (affinityRows: AffinityRowData[]) => K8sIoApiCoreV1Affinity | null;
export declare const has: (object: any, key: any) => any;
export declare const get: (obj: any, path: any, defaultValue?: undefined) => any;
export declare const withOperatorPredicate: <T extends AffinityLabel = AffinityLabel>(store: any, label: T) => any;
export declare const unionWith: (objects: any[], others: any[]) => any[];
export declare const intersectionWith: (objects: any[], others: any[]) => any[];
export declare const getAvailableAffinityID: (affinities: AffinityRowData[]) => string;
export declare const isTermsInvalid: (terms: AffinityLabel[]) => boolean;
export declare const getIntersectedQualifiedNodes: ({ expressionNodes, expressions, fieldNodes, fields, }: {
    expressionNodes: IoK8sApiCoreV1Node[];
    expressions: AffinityLabel[];
    fieldNodes: IoK8sApiCoreV1Node[];
    fields: AffinityLabel[];
}) => any[];
