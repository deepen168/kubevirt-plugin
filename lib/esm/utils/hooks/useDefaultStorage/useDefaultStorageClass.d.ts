import { IoK8sApiStorageV1StorageClass } from '@kubevirt-ui/kubevirt-api/kubernetes/models';
declare type UseDefaultStorageClass = () => [
    {
        clusterDefaultStorageClass: IoK8sApiStorageV1StorageClass;
        sortedStorageClasses: string[];
        storageClasses: IoK8sApiStorageV1StorageClass[];
        virtDefaultStorageClass: IoK8sApiStorageV1StorageClass;
    },
    boolean
];
declare const useDefaultStorageClass: UseDefaultStorageClass;
export default useDefaultStorageClass;
