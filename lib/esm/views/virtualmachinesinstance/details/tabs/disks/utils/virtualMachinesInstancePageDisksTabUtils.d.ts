import { V1beta1PersistentVolumeClaim, V1Disk } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { RowFilter } from '@openshift-console/dynamic-plugin-sdk';
export declare type DiskPresentation = {
    drive: string;
    interface: string;
    metadata: {
        [key: string]: any;
    };
    name: string;
    namespace?: string;
    size?: string;
    source: string;
    storageClass?: string;
};
export declare type FileSystemPresentation = {
    diskName: string;
    fileSystemType: string;
    mountPoint: string;
    totalBytes: number;
    usedBytes: number;
};
export declare type DiskRaw = V1Disk & {
    pvc?: V1beta1PersistentVolumeClaim;
};
export declare const diskTypes: {
    cdrom: string;
    disk: string;
    floppy: string;
    LUN: string;
};
export declare const convertBytes: (bytes: number) => import("byte-size").ByteSizeResult;
export declare const diskStructureCreator: (disks: DiskRaw[]) => DiskPresentation[];
export declare const filters: RowFilter[];
