var _a, _b, _c, _d, _e;
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
export var TEMPLATE_TYPE_LABEL = 'template.kubevirt.io/type';
export var TEMPLATE_DEFAULT_VARIANT_LABEL = 'template.kubevirt.io/default-os-variant';
export var TEMPLATE_TYPE_VM = 'vm';
export var TEMPLATE_TYPE_BASE = 'base';
export var TEMPLATE_FLAVOR_LABEL = 'flavor.template.kubevirt.io';
export var TEMPLATE_WORKLOAD_LABEL = 'workload.template.kubevirt.io';
export var TEMPLATE_BASE_IMAGE_NAME_PARAMETER = 'SRC_PVC_NAME';
export var TEMPLATE_BASE_IMAGE_NAMESPACE_PARAMETER = 'SRC_PVC_NAMESPACE';
export var TEMPLATE_VM_COMMON_NAMESPACE = 'openshift';
export var TEMPLATE_DATA_SOURCE_NAME_PARAMETER = 'DATA_SOURCE_NAME';
export var TEMPLATE_DATA_SOURCE_NAMESPACE_PARAMETER = 'DATA_SOURCE_NAMESPACE';
export var LABEL_USED_TEMPLATE_NAME = 'vm.kubevirt.io/template';
export var LABEL_USED_TEMPLATE_NAMESPACE = 'vm.kubevirt.io/template.namespace';
export var TEMPLATE_VERSION_LABEL = 'vm.kubevirt.io/template.version';
export var APP_NAME_LABEL = 'app.kubernetes.io/name';
export var CUSTOM_TEMPLATES = 'custom-templates';
export var DATA_SOURCE_CRONJOB_LABEL = 'cdi.kubevirt.io/dataImportCron';
export var LINUX = 'linux';
export var OS_NAME_TYPES_NOT_SUPPORTED;
(function (OS_NAME_TYPES_NOT_SUPPORTED) {
    OS_NAME_TYPES_NOT_SUPPORTED["debian"] = "debian";
    OS_NAME_TYPES_NOT_SUPPORTED["ubuntu"] = "ubuntu";
})(OS_NAME_TYPES_NOT_SUPPORTED || (OS_NAME_TYPES_NOT_SUPPORTED = {}));
export var OS_NAME_TYPES;
(function (OS_NAME_TYPES) {
    OS_NAME_TYPES["centos"] = "centos";
    OS_NAME_TYPES["fedora"] = "fedora";
    OS_NAME_TYPES["other"] = "other";
    OS_NAME_TYPES["rhel"] = "rhel";
    OS_NAME_TYPES["windows"] = "windows";
})(OS_NAME_TYPES || (OS_NAME_TYPES = {}));
export var FLAVORS;
(function (FLAVORS) {
    FLAVORS["large"] = "large";
    FLAVORS["medium"] = "medium";
    FLAVORS["small"] = "small";
    FLAVORS["tiny"] = "tiny";
})(FLAVORS || (FLAVORS = {}));
export var SUPPORT_TYPES;
(function (SUPPORT_TYPES) {
    SUPPORT_TYPES["Full"] = "Full";
    SUPPORT_TYPES["Limited"] = "Limited";
})(SUPPORT_TYPES || (SUPPORT_TYPES = {}));
export var WORKLOADS;
(function (WORKLOADS) {
    WORKLOADS["desktop"] = "desktop";
    WORKLOADS["highperformance"] = "highperformance";
    WORKLOADS["server"] = "server";
})(WORKLOADS || (WORKLOADS = {}));
export var WORKLOADS_LABELS = (_a = {},
    _a[WORKLOADS.desktop] = t('Desktop'),
    _a[WORKLOADS.highperformance] = t('High performance'),
    _a[WORKLOADS.server] = t('Server'),
    _a);
export var WORKLOADS_DESCRIPTIONS = (_b = {},
    _b[WORKLOADS.desktop] = t('Small scale consumption, recommended for using the graphical console'),
    _b[WORKLOADS.highperformance] = t('Optimized for High resource consumption workloads'),
    _b[WORKLOADS.server] = t('Balances performance, compatible with a broad range of workloads'),
    _b);
export var OS_NAME_LABELS = (_c = {},
    _c[OS_NAME_TYPES.centos] = 'CentOS',
    _c[OS_NAME_TYPES.fedora] = 'Fedora',
    _c[OS_NAME_TYPES.other] = 'Other',
    _c[OS_NAME_TYPES.rhel] = 'RHEL',
    _c[OS_NAME_TYPES.windows] = 'Windows',
    _c);
export var OS_NAMES = [
    {
        id: OS_NAME_TYPES.rhel,
        title: OS_NAME_LABELS.rhel,
    },
    {
        id: OS_NAME_TYPES.fedora,
        title: OS_NAME_LABELS.fedora,
    },
    {
        id: OS_NAME_TYPES.centos,
        title: OS_NAME_LABELS.centos,
    },
    {
        id: OS_NAME_TYPES.windows,
        title: OS_NAME_LABELS.windows,
    },
    {
        id: OS_NAME_TYPES.other,
        title: OS_NAME_LABELS.other,
    },
];
export var BOOT_SOURCE;
(function (BOOT_SOURCE) {
    BOOT_SOURCE["CONTAINER_DISK"] = "CONTAINER_DISK";
    BOOT_SOURCE["DATA_SOURCE"] = "DATA_SOURCE";
    BOOT_SOURCE["DATA_SOURCE_AUTO_IMPORT"] = "DATA_SOURCE_AUTO_IMPORT";
    BOOT_SOURCE["NONE"] = "NONE";
    BOOT_SOURCE["PVC"] = "PVC";
    BOOT_SOURCE["REGISTRY"] = "REGISTRY";
    BOOT_SOURCE["URL"] = "URL";
})(BOOT_SOURCE || (BOOT_SOURCE = {}));
// t('PVC')
// t('PVC (auto import)')
// t('URL')
// t('Registry')
// t('Container disk')
// t('No boot source')
export var BOOT_SOURCE_LABELS = (_d = {},
    _d[BOOT_SOURCE.CONTAINER_DISK] = 'Container disk',
    _d[BOOT_SOURCE.DATA_SOURCE] = 'PVC',
    _d[BOOT_SOURCE.DATA_SOURCE_AUTO_IMPORT] = 'PVC (auto import)',
    _d[BOOT_SOURCE.NONE] = 'No boot source',
    _d[BOOT_SOURCE.PVC] = 'PVC',
    _d[BOOT_SOURCE.REGISTRY] = 'Registry',
    _d[BOOT_SOURCE.URL] = 'URL',
    _d);
export var OS_IMAGE_LINKS = (_e = {},
    _e[OS_NAME_TYPES.centos] = 'https://cloud.centos.org/centos/',
    _e[OS_NAME_TYPES.fedora] = 'https://alt.fedoraproject.org/cloud/',
    _e[OS_NAME_TYPES.other] = 'https://alt.fedoraproject.org/cloud/',
    _e[OS_NAME_TYPES.rhel] = 'https://access.redhat.com/downloads/content/479/ver=/rhel---8/',
    _e[OS_NAME_TYPES.windows] = 'https://www.microsoft.com/en-us/software-download/windows10ISO',
    _e);
export var GENERATE_VM_PRETTY_NAME_ANNOTATION = 'openshift.kubevirt.io/pronounceable-suffix-for-name-expression';
export var HIDE_DEPRECATED_TEMPLATES = 'hideDeprecatedTemplates';
export var HIDE_DEPRECATED_TEMPLATES_KEY = 'hide-deprecated-templates';
//# sourceMappingURL=constants.js.map