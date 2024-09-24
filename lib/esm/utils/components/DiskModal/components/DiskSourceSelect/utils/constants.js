var _a;
import { SourceTypes } from '@kubevirt-utils/components/DiskModal/utils/types';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
export var diskSourceSnapshotVolumeNameFieldID = 'snapshot-name-select';
export var diskSourceSnapshotVolumeNamespaceFieldID = 'snapshot-project-select';
export var diskSourcePVCNameFieldID = 'pvc-name-select';
export var diskSourcePVCNamespaceFieldID = 'pvc-project-select';
export var diskSourceUploadFieldID = 'disk-source-upload';
export var diskSourceURLFieldID = 'disk-source-url';
export var ephemeralDiskSizeFieldID = 'ephemeral-disk-size';
export var diskSourceFieldID = 'disk-source';
export var diskSourceEphemeralFieldID = 'disk-source-container';
export var optionLabelMapper = (_a = {},
    _a[SourceTypes.BLANK] = t('Empty disk (blank)'),
    _a[SourceTypes.CLONE_PVC] = t('Clone volume'),
    _a[SourceTypes.DATA_SOURCE] = t('Use DataSource'),
    _a[SourceTypes.EPHEMERAL] = t('Ephemeral disk (Container image)'),
    _a[SourceTypes.HTTP] = t('From URL'),
    _a[SourceTypes.OTHER] = t('Other'),
    _a[SourceTypes.PVC] = t('Volume'),
    _a[SourceTypes.REGISTRY] = t('From Registry'),
    _a[SourceTypes.UPLOAD] = t('Upload'),
    _a[SourceTypes.VOLUME_SNAPSHOT] = t('Volume snapshot'),
    _a);
export var attachExistingGroupOptions = {
    groupLabel: t('Use existing'),
    items: [
        {
            description: t('Any changes are lost upon reboot'),
            id: SourceTypes.EPHEMERAL,
            label: optionLabelMapper[SourceTypes.EPHEMERAL],
        },
        {
            description: t('Add a volume already available on the cluster.'),
            id: SourceTypes.PVC,
            label: optionLabelMapper[SourceTypes.PVC],
        },
        {
            description: t('Add a snapshot available on the cluster to the VirtualMachine.'),
            id: SourceTypes.VOLUME_SNAPSHOT,
            label: optionLabelMapper[SourceTypes.VOLUME_SNAPSHOT],
        },
        {
            description: t('Clone a volume available on the cluster and add it to the VirtualMachine. '),
            id: SourceTypes.CLONE_PVC,
            label: optionLabelMapper[SourceTypes.CLONE_PVC],
        },
    ],
};
export var blankOption = {
    description: t('Create a disk with no contents.'),
    id: SourceTypes.BLANK,
    label: optionLabelMapper[SourceTypes.BLANK],
};
//# sourceMappingURL=constants.js.map