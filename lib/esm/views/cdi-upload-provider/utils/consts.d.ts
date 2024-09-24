export declare enum UPLOAD_STATUS {
    CANCELED = "CANCELED",
    ERROR = "ERROR",
    PENDING = "PENDING",
    SUCCESS = "SUCCESS",
    UPLOADING = "UPLOADING"
}
export declare const CDI_UPLOAD_URL_BUILDER: (uploadProxyURL: any) => string;
export declare const CDI_UPLOAD_POD_ANNOTATION = "cdi.kubevirt.io/storage.pod.phase";
export declare const CDI_UPLOAD_POD_NAME_ANNOTATION = "cdi.kubevirt.io/storage.uploadPodName";
export declare const CDI_PHASE_PVC_ANNOTATION = "cdi.kubevirt.io/storage.pod.phase";
export declare const CDI_BOUND_PVC_ANNOTATION = "cdi.kubevirt.io/storage.condition.bound";
export declare const CDI_BIND_REQUESTED_ANNOTATION = "cdi.kubevirt.io/storage.bind.immediate.requested";
export declare const CDI_CLONE_TOKEN_ANNOTAION = "cdi.kubevirt.io/storage.clone.token";
export declare const CDI_PVC_PHASE_RUNNING = "Running";
export declare const CDI_UPLOAD_OS_URL_PARAM = "os";
export declare const CDI_KUBEVIRT_IO = "cdi.kubevirt.io";
export declare const STORAGE_IMPORT_POD_NAME = "storage.import.importPodName";
export declare const STORAGE_IMPORT_POD_LABEL: string;
export declare const STORAGE_CLASS_CONFIG_MAP_NAME = "kubevirt-storage-class-defaults";
export declare const STORAGE_CLASS_CONFIG_MAP_NAMESPACES: string[];
export declare const LABEL_CDROM_SOURCE = "kubevirt.ui/cdrom";
export declare const TEMPLATE_OS_LABEL = "os.template.kubevirt.io";
export declare const TEMPLATE_OS_NAME_ANNOTATION = "name.os.template.kubevirt.io";
export declare const VM_TEMPLATE_NAME_PARAMETER = "${NAME}";
export declare const CDI_UPLOAD_SUPPORTED_TYPES_URL = "https://access.redhat.com/documentation/en-us/openshift_container_platform/4.9/html/virtualization/virtual-machines#virt-cdi-supported-operations-matrix_virt-importing-virtual-machine-images-datavolumes";
export declare enum uploadErrorType {
    ALLOCATE = "allocate",
    CDI_INIT = "cdi_init",
    CERT = "cert",
    MISSING = "missing",
    PVC_SIZE = "pvc_size"
}
export declare const dropdownUnits: {
    Gi: string;
    Mi: string;
    Ti: string;
};
