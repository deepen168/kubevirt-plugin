var _a;
import { InterfaceTypes } from '@kubevirt-utils/components/DiskModal/utils/types';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
export var PVC_SOURCE_NAME = 'pvc-clone';
export var HTTP_SOURCE_NAME = 'http';
export var REGISTRY_SOURCE_NAME = 'registry';
export var DEFAULT_SOURCE = 'default';
export var BLANK_SOURCE_NAME = 'blank';
export var UPLOAD_SOURCE_NAME = 'upload';
export var CONTAINER_DISK_SOURCE_NAME = 'container-disk';
export var PVC_EPHEMERAL_SOURCE_NAME = 'pvc';
export var CD_SOURCES = [
    HTTP_SOURCE_NAME,
    PVC_SOURCE_NAME,
    CONTAINER_DISK_SOURCE_NAME,
    UPLOAD_SOURCE_NAME,
];
export var DISK_SOURCES_WITH_DEFAULT = [
    DEFAULT_SOURCE,
    PVC_SOURCE_NAME,
    REGISTRY_SOURCE_NAME,
    HTTP_SOURCE_NAME,
    UPLOAD_SOURCE_NAME,
    BLANK_SOURCE_NAME,
];
export var INSTALLATION_CDROM_NAME = 'installation-cdrom';
export var INSTALLATION_CDROM_DISK = {
    bootOrder: 1,
    cdrom: {
        bus: InterfaceTypes.SATA,
    },
    name: INSTALLATION_CDROM_NAME,
};
export var CUSTOMIZE_TEMPLATE_TITLE = t('Customize template parameters');
export var sourceOptions = (_a = {},
    _a[BLANK_SOURCE_NAME] = {
        description: t('Create a new blank PVC'),
        label: t('Blank'),
        type: BLANK_SOURCE_NAME,
    },
    _a[CONTAINER_DISK_SOURCE_NAME] = {
        description: t('Import content via container registry.'),
        label: t('Registry (ContainerDisk)'),
        type: CONTAINER_DISK_SOURCE_NAME,
    },
    _a[DEFAULT_SOURCE] = {
        description: t('Use the default Template disk source'),
        label: t('Template default'),
        type: DEFAULT_SOURCE,
    },
    _a[HTTP_SOURCE_NAME] = {
        description: t('Import content via URL (HTTP or HTTPS endpoint).'),
        label: t('URL (creates PVC)'),
        type: HTTP_SOURCE_NAME,
    },
    _a[PVC_SOURCE_NAME] = {
        description: t('Select an existing persistent volume claim already available on the cluster and clone it.'),
        label: t('PVC (clone PVC)'),
        type: PVC_SOURCE_NAME,
    },
    _a[REGISTRY_SOURCE_NAME] = {
        description: t('Import content via container registry.'),
        label: t('Registry (creates PVC)'),
        type: REGISTRY_SOURCE_NAME,
    },
    _a[UPLOAD_SOURCE_NAME] = {
        description: t('Upload a new file to a PVC. A new PVC will be created.'),
        label: t('Upload (Upload a new file to a PVC)'),
        type: UPLOAD_SOURCE_NAME,
    },
    _a);
//# sourceMappingURL=constants.js.map