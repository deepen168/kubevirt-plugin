import { IoK8sApiCoreV1PersistentVolumeClaim } from '@kubevirt-ui/kubevirt-api/kubernetes';
declare type UsePVCs = (namespace: string) => [IoK8sApiCoreV1PersistentVolumeClaim[], boolean, any];
declare const usePVCs: UsePVCs;
export default usePVCs;
