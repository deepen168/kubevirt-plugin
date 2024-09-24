import { ErrorIcon } from '@kubevirt-utils/components/ErrorIcon/ErrorIcon';
import { getVMRestoringStatus, getVMSnapshottingStatus, getVMStatus, } from '@kubevirt-utils/resources/shared';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { HourglassHalfIcon, InProgressIcon, MigrationIcon, OffIcon, PausedIcon, SyncAltIcon, UnknownIcon, } from '@patternfly/react-icons';
// https://github.com/kubevirt/api/blob/9689e71fe2bed9e7da5f165760bbbf6981cc1087/core/v1/types.go#L1277
export var printableVMStatus = {
    Migrating: 'Migrating',
    Paused: 'Paused',
    Provisioning: 'Provisioning',
    Running: 'Running',
    Starting: 'Starting',
    Stopped: 'Stopped',
    Stopping: 'Stopping',
    Terminating: 'Terminating',
    Unknown: 'Unknown',
    WaitingForVolumeBinding: 'WaitingForVolumeBinding',
};
export var errorPrintableVMStatus = {
    CrashLoopBackOff: 'CrashLoopBackOff',
    DataVolumeError: 'DataVolumeError',
    ErrImagePull: 'ErrImagePull',
    ErrorDataVolumeNotFound: 'ErrorDataVolumeNotFound',
    ErrorPvcNotFound: 'ErrorPvcNotFound',
    ErrorUnschedulable: 'ErrorUnschedulable',
    ImagePullBackOff: 'ImagePullBackOff',
};
export var isErrorPrintableStatus = function (printableStatus) {
    return Object.values(errorPrintableVMStatus).includes(printableStatus);
};
export var getVMStatusIcon = function (status) {
    switch (status) {
        case printableVMStatus.Stopped:
            return OffIcon;
        case printableVMStatus.Provisioning:
        case printableVMStatus.WaitingForVolumeBinding:
            return HourglassHalfIcon;
        case printableVMStatus.Starting:
        case printableVMStatus.Stopping:
        case printableVMStatus.Terminating:
            return InProgressIcon;
        case printableVMStatus.Running:
            return SyncAltIcon;
        case printableVMStatus.Paused:
            return PausedIcon;
        case printableVMStatus.Migrating:
            return MigrationIcon;
        case errorPrintableVMStatus[status]:
            return ErrorIcon;
        default:
            return UnknownIcon;
    }
};
export var isStopped = function (vm) {
    return getVMStatus(vm) === printableVMStatus.Stopped;
};
export var isPaused = function (vm) {
    return getVMStatus(vm) === printableVMStatus.Paused;
};
export var isRestoring = function (vm) { return !isEmpty(getVMRestoringStatus(vm)); };
export var isSnapshotting = function (vm) {
    return !isEmpty(getVMSnapshottingStatus(vm));
};
//# sourceMappingURL=virtualMachineStatuses.js.map