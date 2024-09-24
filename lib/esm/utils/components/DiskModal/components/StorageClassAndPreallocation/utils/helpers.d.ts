import { IoK8sApiStorageV1StorageClass } from '@kubevirt-ui/kubevirt-api/kubernetes/models';
import { EnhancedSelectOptionProps } from '@kubevirt-utils/components/FilterSelect/utils/types';
export declare const getDefaultStorageClass: (storageClasses: IoK8sApiStorageV1StorageClass[]) => IoK8sApiStorageV1StorageClass;
export declare const getSCSelectOptions: (storageClasses: IoK8sApiStorageV1StorageClass[]) => EnhancedSelectOptionProps[];
