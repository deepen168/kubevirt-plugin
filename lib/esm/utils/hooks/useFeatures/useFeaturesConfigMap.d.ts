import { IoK8sApiCoreV1ConfigMap } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { WatchK8sResult } from '@openshift-console/dynamic-plugin-sdk';
declare type UseFeaturesConfigMap = () => {
    featuresConfigMapData: WatchK8sResult<IoK8sApiCoreV1ConfigMap>;
    isAdmin: boolean;
};
declare const useFeaturesConfigMap: UseFeaturesConfigMap;
export default useFeaturesConfigMap;
