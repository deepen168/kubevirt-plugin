import { IoK8sApiBatchV1Job, IoK8sApiCoreV1ConfigMap } from '@kubevirt-ui/kubevirt-api/kubernetes';
declare const useCheckupsNetworkData: () => {
    configMaps: IoK8sApiCoreV1ConfigMap[];
    error: any;
    jobs: IoK8sApiBatchV1Job[];
    loading: boolean;
};
export default useCheckupsNetworkData;
