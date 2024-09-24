export declare const TEMPLATE_TYPE_LABEL = "template.kubevirt.io/type";
export declare const TEMPLATE_DEFAULT_VARIANT_LABEL = "template.kubevirt.io/default-os-variant";
export declare const TEMPLATE_TYPE_VM = "vm";
export declare const TEMPLATE_TYPE_BASE = "base";
export declare const TEMPLATE_FLAVOR_LABEL = "flavor.template.kubevirt.io";
export declare const TEMPLATE_WORKLOAD_LABEL = "workload.template.kubevirt.io";
export declare const TEMPLATE_BASE_IMAGE_NAME_PARAMETER = "SRC_PVC_NAME";
export declare const TEMPLATE_BASE_IMAGE_NAMESPACE_PARAMETER = "SRC_PVC_NAMESPACE";
export declare const TEMPLATE_VM_COMMON_NAMESPACE = "openshift";
export declare const TEMPLATE_DATA_SOURCE_NAME_PARAMETER = "DATA_SOURCE_NAME";
export declare const TEMPLATE_DATA_SOURCE_NAMESPACE_PARAMETER = "DATA_SOURCE_NAMESPACE";
export declare const LABEL_USED_TEMPLATE_NAME = "vm.kubevirt.io/template";
export declare const LABEL_USED_TEMPLATE_NAMESPACE = "vm.kubevirt.io/template.namespace";
export declare const TEMPLATE_VERSION_LABEL = "vm.kubevirt.io/template.version";
export declare const APP_NAME_LABEL = "app.kubernetes.io/name";
export declare const CUSTOM_TEMPLATES = "custom-templates";
export declare const DATA_SOURCE_CRONJOB_LABEL = "cdi.kubevirt.io/dataImportCron";
export declare const LINUX = "linux";
export declare enum OS_NAME_TYPES_NOT_SUPPORTED {
    debian = "debian",
    ubuntu = "ubuntu"
}
export declare enum OS_NAME_TYPES {
    centos = "centos",
    fedora = "fedora",
    other = "other",
    rhel = "rhel",
    windows = "windows"
}
export declare enum FLAVORS {
    large = "large",
    medium = "medium",
    small = "small",
    tiny = "tiny"
}
export declare enum SUPPORT_TYPES {
    Full = "Full",
    Limited = "Limited"
}
export declare enum WORKLOADS {
    desktop = "desktop",
    highperformance = "highperformance",
    server = "server"
}
export declare const WORKLOADS_LABELS: {
    desktop: any;
    highperformance: any;
    server: any;
};
export declare const WORKLOADS_DESCRIPTIONS: {
    desktop: any;
    highperformance: any;
    server: any;
};
export declare const OS_NAME_LABELS: {
    centos: string;
    fedora: string;
    other: string;
    rhel: string;
    windows: string;
};
export declare const OS_NAMES: {
    id: OS_NAME_TYPES;
    title: string;
}[];
export declare enum BOOT_SOURCE {
    CONTAINER_DISK = "CONTAINER_DISK",
    DATA_SOURCE = "DATA_SOURCE",
    DATA_SOURCE_AUTO_IMPORT = "DATA_SOURCE_AUTO_IMPORT",
    NONE = "NONE",
    PVC = "PVC",
    REGISTRY = "REGISTRY",
    URL = "URL"
}
export declare const BOOT_SOURCE_LABELS: {
    CONTAINER_DISK: string;
    DATA_SOURCE: string;
    DATA_SOURCE_AUTO_IMPORT: string;
    NONE: string;
    PVC: string;
    REGISTRY: string;
    URL: string;
};
export declare const OS_IMAGE_LINKS: {
    centos: string;
    fedora: string;
    other: string;
    rhel: string;
    windows: string;
};
export declare const GENERATE_VM_PRETTY_NAME_ANNOTATION = "openshift.kubevirt.io/pronounceable-suffix-for-name-expression";
export declare const HIDE_DEPRECATED_TEMPLATES = "hideDeprecatedTemplates";
export declare const HIDE_DEPRECATED_TEMPLATES_KEY = "hide-deprecated-templates";
