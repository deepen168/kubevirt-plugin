import { GreenCheckCircleIcon, RedExclamationCircleIcon, YellowExclamationTriangleIcon, } from '@openshift-console/dynamic-plugin-sdk';
export var snapshotStatuses = {
    Failed: 'Failed',
    InProgress: 'InProgress',
    Succeeded: 'Succeeded',
};
export var iconMapper = {
    default: GreenCheckCircleIcon,
    Error: RedExclamationCircleIcon,
    Failed: RedExclamationCircleIcon,
    InProgress: YellowExclamationTriangleIcon,
    'Not ready': YellowExclamationTriangleIcon,
    Succeeded: GreenCheckCircleIcon,
};
// https://kubevirt.io/user-guide/operations/snapshot_restore_api/#snapshot-a-virtualmachine
export var deadlineUnits;
(function (deadlineUnits) {
    deadlineUnits["Hours"] = "h";
    deadlineUnits["Miliseconds"] = "ms";
    deadlineUnits["Minutes"] = "m";
    deadlineUnits["Seconds"] = "s";
})(deadlineUnits || (deadlineUnits = {}));
//# sourceMappingURL=consts.js.map