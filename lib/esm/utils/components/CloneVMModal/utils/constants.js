import { ProgressStepVariant } from '@patternfly/react-core';
export var TEMPLATE_VM_NAME_LABEL = 'vm.kubevirt.io/name';
export var DOC_URL_ENABLING_USER_CLONE_PERMISSIONS = 'https://docs.openshift.com/container-platform/latest/virt/virtual_machines/cloning_vms/virt-enabling-user-permissions-to-clone-datavolumes.html';
export var CLONING_STATUSES;
(function (CLONING_STATUSES) {
    CLONING_STATUSES["CREATING_TARGET_VM"] = "CreatingTargetVM";
    CLONING_STATUSES["FAILED"] = "Failed";
    CLONING_STATUSES["RESTORE_IN_PROGRESS"] = "RestoreInProgress";
    CLONING_STATUSES["SNAPSHOT_IN_PROGRESS"] = "SnapshotInProgress";
    CLONING_STATUSES["SUCCEEDED"] = "Succeeded";
    CLONING_STATUSES["UNKNOWN"] = "Unknown";
})(CLONING_STATUSES || (CLONING_STATUSES = {}));
export var STATUS_TO_PROGRESS_VARIANT = {
    CreatingTargetVM: ProgressStepVariant.info,
    Failed: ProgressStepVariant.danger,
    RestoreInProgress: ProgressStepVariant.info,
    SnapshotInProgress: ProgressStepVariant.info,
    Succeeded: ProgressStepVariant.success,
    Unknown: ProgressStepVariant.danger,
};
//# sourceMappingURL=constants.js.map