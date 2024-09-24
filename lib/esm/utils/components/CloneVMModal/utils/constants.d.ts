import { ProgressStepVariant } from '@patternfly/react-core';
export declare const TEMPLATE_VM_NAME_LABEL = "vm.kubevirt.io/name";
export declare const DOC_URL_ENABLING_USER_CLONE_PERMISSIONS = "https://docs.openshift.com/container-platform/latest/virt/virtual_machines/cloning_vms/virt-enabling-user-permissions-to-clone-datavolumes.html";
export declare enum CLONING_STATUSES {
    CREATING_TARGET_VM = "CreatingTargetVM",
    FAILED = "Failed",
    RESTORE_IN_PROGRESS = "RestoreInProgress",
    SNAPSHOT_IN_PROGRESS = "SnapshotInProgress",
    SUCCEEDED = "Succeeded",
    UNKNOWN = "Unknown"
}
export declare const STATUS_TO_PROGRESS_VARIANT: {
    CreatingTargetVM: ProgressStepVariant;
    Failed: ProgressStepVariant;
    RestoreInProgress: ProgressStepVariant;
    SnapshotInProgress: ProgressStepVariant;
    Succeeded: ProgressStepVariant;
    Unknown: ProgressStepVariant;
};
