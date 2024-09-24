import { ExclamationCircleIcon, InProgressIcon, OffIcon, PausedIcon, SyncAltIcon, UnknownIcon, } from '@patternfly/react-icons';
export var vmiStatuses = {
    Failed: 'Failed',
    Migrating: 'Migrating',
    Paused: 'Paused',
    Provisioning: 'Provisioning',
    Running: 'Running',
    Starting: 'Starting',
    Stopped: 'Stopped',
    Stopping: 'Stopping',
    Terminating: 'Terminating',
    Unknown: 'Unknown',
};
export var osNames = ['centos', 'fedora', 'windows', 'rhel', 'other'];
var iconHandler = {
    get: function (mapper, prop) {
        var icon = mapper[prop === null || prop === void 0 ? void 0 : prop.toLowerCase()];
        if (icon)
            return icon;
        return InProgressIcon;
    },
};
var iconMapper = {
    error: ExclamationCircleIcon,
    failed: ExclamationCircleIcon,
    paused: PausedIcon,
    running: SyncAltIcon,
    stopped: OffIcon,
    unknown: UnknownIcon,
};
export var icon = new Proxy(iconMapper, iconHandler);
//# sourceMappingURL=status.js.map