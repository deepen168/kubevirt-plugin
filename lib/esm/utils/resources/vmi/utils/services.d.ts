import { IoK8sApiCoreV1Service } from '@kubevirt-ui/kubevirt-api/kubernetes/models';
export declare const getServicesForVmi: (services: IoK8sApiCoreV1Service[], vmiLabels: {
    [key: string]: string;
}) => IoK8sApiCoreV1Service[];
