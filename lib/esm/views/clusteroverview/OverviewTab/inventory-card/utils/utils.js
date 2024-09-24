import { KUBEVIRT_OS_IMAGES_NS, OPENSHIFT_OS_IMAGES_NS } from '@kubevirt-utils/constants/constants';
import { getVMStatus } from '@kubevirt-utils/resources/shared';
import { isUpstream } from '@kubevirt-utils/utils/utils';
import { RedExclamationCircleIcon, YellowExclamationTriangleIcon, } from '@openshift-console/dynamic-plugin-sdk';
import { InProgressIcon, OffIcon, PausedIcon, SyncAltIcon } from '@patternfly/react-icons';
import { flattenTemplates } from './flattenTemplates';
export var getOSImagesNS = function () {
    return isUpstream ? KUBEVIRT_OS_IMAGES_NS : OPENSHIFT_OS_IMAGES_NS;
};
export var getTemplates = function (resources) {
    var vmTemplates = resources === null || resources === void 0 ? void 0 : resources.vmTemplates;
    var vms = resources === null || resources === void 0 ? void 0 : resources.vms;
    return flattenTemplates({ vms: vms, vmTemplates: vmTemplates }) || [];
};
export var getVMStatusCounts = function (vms) {
    var statusCounts = {};
    vms.forEach(function (vm) {
        var status = getVMStatus(vm);
        var count = statusCounts[status] || 0;
        statusCounts[status] = count + 1;
    });
    return statusCounts;
};
export var iconMap = {
    CrashLoopBackOff: RedExclamationCircleIcon,
    DataVolumeError: RedExclamationCircleIcon,
    Deleting: InProgressIcon,
    ErrImagePull: RedExclamationCircleIcon,
    ErrorDataVolumeNotFound: RedExclamationCircleIcon,
    ErrorPvcNotFound: RedExclamationCircleIcon,
    ErrorUnschedulable: RedExclamationCircleIcon,
    ImagePullBackOff: RedExclamationCircleIcon,
    Migrating: InProgressIcon,
    Paused: PausedIcon,
    Provisioning: InProgressIcon,
    Running: SyncAltIcon,
    Starting: InProgressIcon,
    Stopped: OffIcon,
    Stopping: InProgressIcon,
    Terminating: InProgressIcon,
    Unknown: YellowExclamationTriangleIcon,
};
export var getVMStatusIcon = function (status) {
    return iconMap[status] || iconMap.Unknown;
};
//# sourceMappingURL=utils.js.map