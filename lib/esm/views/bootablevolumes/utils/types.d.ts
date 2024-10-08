import { V1beta1DataSource } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { IoK8sApiCoreV1PersistentVolumeClaim } from '@kubevirt-ui/kubevirt-api/kubernetes';
export declare type BootableVolumeMetadata = {
    annotations: {
        [key: string]: string;
    };
    labels: {
        [key: string]: string;
    };
};
export declare type BootableResource = IoK8sApiCoreV1PersistentVolumeClaim | V1beta1DataSource;
