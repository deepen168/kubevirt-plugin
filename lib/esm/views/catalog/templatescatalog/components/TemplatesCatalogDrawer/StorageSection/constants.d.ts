import { V1Disk } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const PVC_SOURCE_NAME = "pvc-clone";
export declare const HTTP_SOURCE_NAME = "http";
export declare const REGISTRY_SOURCE_NAME = "registry";
export declare const DEFAULT_SOURCE = "default";
export declare const BLANK_SOURCE_NAME = "blank";
export declare const UPLOAD_SOURCE_NAME = "upload";
export declare const CONTAINER_DISK_SOURCE_NAME = "container-disk";
export declare const PVC_EPHEMERAL_SOURCE_NAME = "pvc";
export declare type SOURCE_OPTIONS_IDS = typeof BLANK_SOURCE_NAME | typeof CONTAINER_DISK_SOURCE_NAME | typeof DEFAULT_SOURCE | typeof HTTP_SOURCE_NAME | typeof PVC_EPHEMERAL_SOURCE_NAME | typeof PVC_SOURCE_NAME | typeof REGISTRY_SOURCE_NAME | typeof UPLOAD_SOURCE_NAME;
export declare const CD_SOURCES: SOURCE_OPTIONS_IDS[];
export declare const DISK_SOURCES_WITH_DEFAULT: SOURCE_OPTIONS_IDS[];
export declare const INSTALLATION_CDROM_NAME = "installation-cdrom";
export declare const INSTALLATION_CDROM_DISK: V1Disk;
export declare const CUSTOMIZE_TEMPLATE_TITLE: any;
export declare const sourceOptions: {
    blank: {
        description: any;
        label: any;
        type: string;
    };
    "container-disk": {
        description: any;
        label: any;
        type: string;
    };
    default: {
        description: any;
        label: any;
        type: string;
    };
    http: {
        description: any;
        label: any;
        type: string;
    };
    "pvc-clone": {
        description: any;
        label: any;
        type: string;
    };
    registry: {
        description: any;
        label: any;
        type: string;
    };
    upload: {
        description: any;
        label: any;
        type: string;
    };
};
