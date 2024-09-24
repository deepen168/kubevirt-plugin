import { vmimStatuses } from '@kubevirt-utils/resources/vmim/statuses';
import { CheckCircleIcon, ExclamationCircleIcon, HourglassHalfIcon, InProgressIcon, PausedIcon, RunningIcon, UnknownIcon, } from '@patternfly/react-icons';
export var getMigrationPhaseIcon = function (phase) {
    switch (phase) {
        case vmimStatuses.Running:
            return RunningIcon;
        case vmimStatuses.Failed:
            return ExclamationCircleIcon;
        case vmimStatuses.Paused:
            return PausedIcon;
        case vmimStatuses.Pending:
            return HourglassHalfIcon;
        case vmimStatuses.Scheduling:
        case vmimStatuses.PreparingTarget:
            return InProgressIcon;
        case vmimStatuses.Scheduled:
        case vmimStatuses.Succeeded:
        case vmimStatuses.TargetReady:
            return CheckCircleIcon;
        default:
            return UnknownIcon;
    }
};
//# sourceMappingURL=utils.js.map