import { IoK8sApiCoreV1ConfigMap } from '@kubevirt-ui/kubevirt-api/kubernetes';
declare type Feature = {
    canEdit: boolean;
    externalLink: string;
    featureEnabled: boolean;
    id: string;
    label: string;
    loading: boolean;
    toggleFeature: (val: boolean) => Promise<IoK8sApiCoreV1ConfigMap>;
};
declare type UsePreviewFeaturesData = () => {
    canEditAll: boolean;
    features: Feature[];
    isEnabledAll: boolean;
    loading: boolean;
    togglers: ((val: boolean) => Promise<IoK8sApiCoreV1ConfigMap>)[];
};
declare const usePreviewFeaturesData: UsePreviewFeaturesData;
export default usePreviewFeaturesData;
