import { SourceTypes } from '@kubevirt-utils/components/DiskModal/utils/types';
import { DiskSourceOptionGroup, DiskSourceOptionGroupItem } from './types';
export declare const diskSourceSnapshotVolumeNameFieldID = "snapshot-name-select";
export declare const diskSourceSnapshotVolumeNamespaceFieldID = "snapshot-project-select";
export declare const diskSourcePVCNameFieldID = "pvc-name-select";
export declare const diskSourcePVCNamespaceFieldID = "pvc-project-select";
export declare const diskSourceUploadFieldID = "disk-source-upload";
export declare const diskSourceURLFieldID = "disk-source-url";
export declare const ephemeralDiskSizeFieldID = "ephemeral-disk-size";
export declare const diskSourceFieldID = "disk-source";
export declare const diskSourceEphemeralFieldID = "disk-source-container";
export declare const optionLabelMapper: {
    [key in SourceTypes]: string;
};
export declare const attachExistingGroupOptions: DiskSourceOptionGroup;
export declare const blankOption: DiskSourceOptionGroupItem;
