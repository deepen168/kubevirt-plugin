import { Fragment } from 'react';
import { getVMStatus } from '@kubevirt-utils/resources/shared';
import { VM_STATUS } from '@kubevirt-utils/resources/vm/utils/vmStatus';
import { RedExclamationCircleIcon } from '@openshift-console/dynamic-plugin-sdk';
import { InProgressIcon, PausedIcon, SyncAltIcon } from '@patternfly/react-icons';
import { ERROR } from './constants';
var PRIMARY_STATUSES = [VM_STATUS.Running, VM_STATUS.Paused, VM_STATUS.Migrating, ERROR];
var ERROR_STATUSES = [
    VM_STATUS.CrashLoopBackOff,
    VM_STATUS.ErrorUnschedulable,
    VM_STATUS.ErrImagePull,
    VM_STATUS.ImagePullBackOff,
    VM_STATUS.ErrorPvcNotFound,
    VM_STATUS.ErrorDataVolumeNotFound,
    VM_STATUS.DataVolumeError,
    VM_STATUS.Unknown,
    VM_STATUS.WaitingForVolumeBinding,
];
export var vmStatusIcon = {
    Deleting: Fragment,
    Error: RedExclamationCircleIcon,
    Migrating: InProgressIcon,
    Paused: PausedIcon,
    Provisioning: Fragment,
    Running: SyncAltIcon,
    Starting: Fragment,
    Stopped: Fragment,
    Stopping: Fragment,
    Terminating: Fragment,
};
var initializeStatusCountsObject = function () {
    return Object.keys(VM_STATUS).reduce(function (acc, status) {
        acc[status] = 0;
        return acc;
    }, {});
};
export var getVMStatuses = function (vms) {
    var statusCounts = initializeStatusCountsObject();
    vms.forEach(function (vm) {
        var status = getVMStatus(vm);
        statusCounts[status] = statusCounts[status] + 1;
    });
    statusCounts[ERROR] = ERROR_STATUSES.reduce(function (acc, state) {
        var count = acc + ((statusCounts === null || statusCounts === void 0 ? void 0 : statusCounts[state]) || 0);
        delete statusCounts[state];
        return count;
    }, 0);
    var primaryStatuses = PRIMARY_STATUSES.reduce(function (acc, state) {
        acc[state] = (statusCounts === null || statusCounts === void 0 ? void 0 : statusCounts[state]) || 0;
        delete statusCounts[state];
        return acc;
    }, {});
    return { additionalStatuses: statusCounts, primaryStatuses: primaryStatuses };
};
//# sourceMappingURL=utils.js.map