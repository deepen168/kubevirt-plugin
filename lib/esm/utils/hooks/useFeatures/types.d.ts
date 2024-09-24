import { IoK8sApiCoreV1ConfigMap } from '@kubevirt-ui/kubevirt-api/kubernetes';
export declare type UseFeaturesValues = {
    canEdit: boolean;
    error: Error;
    featureEnabled: boolean;
    loading: boolean;
    toggleFeature: (val: boolean) => Promise<IoK8sApiCoreV1ConfigMap>;
};
