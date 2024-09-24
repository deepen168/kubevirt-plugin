import { IoK8sApiCoreV1PersistentVolumeClaim } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { V1DataVolumeTemplateSpec, V1Disk, V1Volume } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare type DiskRawData = {
    dataVolumeTemplate?: V1DataVolumeTemplateSpec;
    disk: V1Disk;
    pvc?: IoK8sApiCoreV1PersistentVolumeClaim;
    volume: V1Volume;
};
export declare type DiskRowDataLayout = {
    drive: string;
    interface: string;
    isBootDisk: boolean;
    isEnvDisk: boolean;
    metadata: {
        name: string;
    };
    name: string;
    namespace?: string;
    size: string;
    source: string;
    sourceStatus?: string;
    storageClass: string;
};
export declare type DiskType = 'cdrom' | 'disk' | 'lun';
export declare const diskTypes: Record<string, DiskType>;
export declare const diskTypesLabels: {
    cdrom: string;
    disk: string;
    lun: string;
};
export declare const WINDOWS_DRIVERS_DISK = "windows-drivers-disk";
export declare const VIRTIO_WIN_IMAGE = "virtio-win-image";
export declare const VIRTIO_WIN_CONFIG_MAP_NAME = "virtio-win";
export declare const VIRTIO_WIN_CONFIG_MAP_NAMESPACES: string[];
export declare const DEFAULT_WINDOWS_DRIVERS_DISK_IMAGE = "registry.redhat.io/container-native-virtualization/virtio-win";
