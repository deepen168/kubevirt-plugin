export var UPLOAD_STATUS;
(function (UPLOAD_STATUS) {
    UPLOAD_STATUS["CANCELED"] = "CANCELED";
    UPLOAD_STATUS["ERROR"] = "ERROR";
    UPLOAD_STATUS["PENDING"] = "PENDING";
    UPLOAD_STATUS["SUCCESS"] = "SUCCESS";
    UPLOAD_STATUS["UPLOADING"] = "UPLOADING";
})(UPLOAD_STATUS || (UPLOAD_STATUS = {}));
export var CDI_UPLOAD_URL_BUILDER = function (uploadProxyURL) {
    return "https://".concat(uploadProxyURL, "/v1beta1/upload-form-async");
};
export var CDI_UPLOAD_POD_ANNOTATION = 'cdi.kubevirt.io/storage.pod.phase';
export var CDI_UPLOAD_POD_NAME_ANNOTATION = 'cdi.kubevirt.io/storage.uploadPodName';
export var CDI_PHASE_PVC_ANNOTATION = 'cdi.kubevirt.io/storage.pod.phase';
export var CDI_BOUND_PVC_ANNOTATION = 'cdi.kubevirt.io/storage.condition.bound';
export var CDI_BIND_REQUESTED_ANNOTATION = 'cdi.kubevirt.io/storage.bind.immediate.requested';
export var CDI_CLONE_TOKEN_ANNOTAION = 'cdi.kubevirt.io/storage.clone.token';
export var CDI_PVC_PHASE_RUNNING = 'Running';
export var CDI_UPLOAD_OS_URL_PARAM = 'os';
export var CDI_KUBEVIRT_IO = 'cdi.kubevirt.io';
export var STORAGE_IMPORT_POD_NAME = 'storage.import.importPodName';
export var STORAGE_IMPORT_POD_LABEL = "".concat(CDI_KUBEVIRT_IO, "/").concat(STORAGE_IMPORT_POD_NAME);
export var STORAGE_CLASS_CONFIG_MAP_NAME = 'kubevirt-storage-class-defaults';
// Different releases, different locations. Respect the order when resolving. Otherwise the configMap name/namespace is considered as well-known.
export var STORAGE_CLASS_CONFIG_MAP_NAMESPACES = [
    'kubevirt-hyperconverged',
    'openshift-cnv',
    'openshift',
    'kubevirt-native',
];
export var LABEL_CDROM_SOURCE = 'kubevirt.ui/cdrom';
export var TEMPLATE_OS_LABEL = 'os.template.kubevirt.io';
export var TEMPLATE_OS_NAME_ANNOTATION = 'name.os.template.kubevirt.io';
export var VM_TEMPLATE_NAME_PARAMETER = '${NAME}'; // eslint-disable-line no-template-curly-in-string
export var CDI_UPLOAD_SUPPORTED_TYPES_URL = 'https://access.redhat.com/documentation/en-us/openshift_container_platform/4.9/html/virtualization/virtual-machines#virt-cdi-supported-operations-matrix_virt-importing-virtual-machine-images-datavolumes';
export var uploadErrorType;
(function (uploadErrorType) {
    uploadErrorType["ALLOCATE"] = "allocate";
    uploadErrorType["CDI_INIT"] = "cdi_init";
    uploadErrorType["CERT"] = "cert";
    uploadErrorType["MISSING"] = "missing";
    uploadErrorType["PVC_SIZE"] = "pvc_size";
})(uploadErrorType || (uploadErrorType = {}));
export var dropdownUnits = {
    Gi: 'GiB',
    Mi: 'MiB',
    Ti: 'TiB',
};
//# sourceMappingURL=consts.js.map