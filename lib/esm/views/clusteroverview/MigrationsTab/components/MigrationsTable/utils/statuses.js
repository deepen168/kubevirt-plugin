import { GreenCheckCircleIcon, RedExclamationCircleIcon, } from '@openshift-console/dynamic-plugin-sdk';
import { InProgressIcon, PausedIcon, SyncAltIcon } from '@patternfly/react-icons';
export var iconMapper = {
    Failed: RedExclamationCircleIcon,
    Paused: PausedIcon,
    Pending: InProgressIcon,
    PreparingTarget: InProgressIcon,
    Running: SyncAltIcon,
    Scheduled: InProgressIcon,
    Scheduling: InProgressIcon,
    Succeeded: GreenCheckCircleIcon,
    TargetReady: InProgressIcon,
};
//# sourceMappingURL=statuses.js.map