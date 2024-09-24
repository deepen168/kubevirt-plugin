import { V1beta1DataSource, V1beta1DataVolume } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { IoK8sApiCoreV1PersistentVolumeClaim } from '@kubevirt-ui/kubevirt-api/kubernetes';
declare type UseUnderlyingPVC = (dataSource: V1beta1DataSource) => {
    dv: V1beta1DataVolume;
    pvc: IoK8sApiCoreV1PersistentVolumeClaim;
    sourceExists: boolean;
};
declare const useUnderlyingPVC: UseUnderlyingPVC;
export default useUnderlyingPVC;
