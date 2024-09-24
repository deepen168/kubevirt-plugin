/// <reference types="react" />
export declare const DEFAULT_DISK_SIZE = "30Gi";
export declare const DEFAULT_CDROM_DISK_SIZE = "10Gi";
export declare const DiskModalBySource: {
    blank: import("react").FC<import("../utils/types").V1SubDiskModalProps>;
    pvc: import("react").FC<import("../utils/types").V1SubDiskModalProps>;
    containerDisk: import("react").FC<import("../utils/types").V1SubDiskModalProps>;
    http: import("react").FC<import("../utils/types").V1SubDiskModalProps>;
    persistentVolumeClaim: import("react").FC<import("../utils/types").V1SubDiskModalProps>;
    registry: import("react").FC<import("../utils/types").V1SubDiskModalProps>;
    upload: import("react").FC<import("../utils/types").V1SubDiskModalProps>;
    snapshot: import("react").FC<import("../utils/types").V1SubDiskModalProps>;
};
export declare const modalsBySource: {
    blank: import("react").FC<import("../utils/types").V1SubDiskModalProps>;
    pvc: import("react").FC<import("../utils/types").V1SubDiskModalProps>;
    containerDisk: import("react").FC<import("../utils/types").V1SubDiskModalProps>;
    http: import("react").FC<import("../utils/types").V1SubDiskModalProps>;
    persistentVolumeClaim: import("react").FC<import("../utils/types").V1SubDiskModalProps>;
    registry: import("react").FC<import("../utils/types").V1SubDiskModalProps>;
    upload: import("react").FC<import("../utils/types").V1SubDiskModalProps>;
    snapshot: import("react").FC<import("../utils/types").V1SubDiskModalProps>;
};
