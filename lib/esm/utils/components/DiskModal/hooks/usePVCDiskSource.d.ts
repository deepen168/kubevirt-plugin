import { IoK8sApiCoreV1PersistentVolumeClaim } from '@kubevirt-ui/kubevirt-api/kubernetes';
declare const usePVCDiskSource: (pvcName: string, pvcNamespace: string) => import("@openshift-console/dynamic-plugin-sdk").WatchK8sResult<IoK8sApiCoreV1PersistentVolumeClaim>;
export default usePVCDiskSource;
