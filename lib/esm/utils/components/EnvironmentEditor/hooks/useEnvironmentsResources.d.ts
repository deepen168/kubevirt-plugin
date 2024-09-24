import { IoK8sApiCoreV1ConfigMap, IoK8sApiCoreV1Secret, IoK8sApiCoreV1ServiceAccount } from '@kubevirt-ui/kubevirt-api/kubernetes/models';
declare type UseEnvironmentsResourcesType = {
    configMaps: IoK8sApiCoreV1ConfigMap[];
    error: any;
    loaded: boolean;
    secrets: IoK8sApiCoreV1Secret[];
    serviceAccounts: IoK8sApiCoreV1ServiceAccount[];
};
declare const useEnvironmentsResources: (namespace: string) => UseEnvironmentsResourcesType;
export default useEnvironmentsResources;
