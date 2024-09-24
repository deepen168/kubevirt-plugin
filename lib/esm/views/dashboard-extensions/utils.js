var _a, _b;
import { TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import DataVolumeModel from '@kubevirt-ui/kubevirt-api/console/models/DataVolumeModel';
import VirtualMachineInstanceModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineInstanceModel';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
export { default as VirtualMachineModel } from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
export var diskImportKindMapping = (_a = {},
    _a[TemplateModel.kind] = TemplateModel,
    _a[VirtualMachineInstanceModel.kind] = VirtualMachineInstanceModel,
    _a[VirtualMachineModel.kind] = VirtualMachineModel,
    _a);
export var InventoryStatusGroup;
(function (InventoryStatusGroup) {
    InventoryStatusGroup["ERROR"] = "ERROR";
    InventoryStatusGroup["NOT_MAPPED"] = "NOT_MAPPED";
    InventoryStatusGroup["PROGRESS"] = "PROGRESS";
    InventoryStatusGroup["UNKNOWN"] = "UNKNOWN";
    InventoryStatusGroup["WARN"] = "WARN";
})(InventoryStatusGroup || (InventoryStatusGroup = {}));
export var printableVmStatus = {
    CrashLoopBackOff: 'CrashLoopBackOff',
    DataVolumeError: 'DataVolumeError',
    ErrImagePull: 'ErrImagePull',
    ErrorDataVolumeNotFound: 'ErrorDataVolumeNotFound',
    ErrorPvcNotFound: 'ErrorPvcNotFound',
    ErrorUnschedulable: 'ErrorUnschedulable',
    FailedUnschedulable: 'FailedUnschedulable',
    ImagePullBackOff: 'ImagePullBackOff',
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
export var VMStatusSimpleLabel;
(function (VMStatusSimpleLabel) {
    VMStatusSimpleLabel["Deleting"] = "Deleting";
    VMStatusSimpleLabel["Migrating"] = "Migrating";
    VMStatusSimpleLabel["Paused"] = "Paused";
    VMStatusSimpleLabel["Running"] = "Running";
    VMStatusSimpleLabel["Starting"] = "Starting";
    VMStatusSimpleLabel["Stopped"] = "Stopped";
    VMStatusSimpleLabel["Stopping"] = "Stopping";
})(VMStatusSimpleLabel || (VMStatusSimpleLabel = {}));
export var StatusSimpleLabel;
(function (StatusSimpleLabel) {
    StatusSimpleLabel["Completed"] = "Completed";
    StatusSimpleLabel["Error"] = "Error";
    StatusSimpleLabel["Importing"] = "Importing";
    StatusSimpleLabel["InProgress"] = "InProgress";
    StatusSimpleLabel["Other"] = "Other";
    StatusSimpleLabel["Pending"] = "Pending";
})(StatusSimpleLabel || (StatusSimpleLabel = {}));
export var printableStatusToLabel = (_b = {},
    _b[printableVmStatus.CrashLoopBackOff] = StatusSimpleLabel.Error,
    _b[printableVmStatus.DataVolumeError] = StatusSimpleLabel.Error,
    _b[printableVmStatus.ErrImagePull] = StatusSimpleLabel.Error,
    _b[printableVmStatus.ErrorDataVolumeNotFound] = StatusSimpleLabel.Error,
    _b[printableVmStatus.ErrorPvcNotFound] = StatusSimpleLabel.Error,
    _b[printableVmStatus.ErrorUnschedulable] = StatusSimpleLabel.Error,
    _b[printableVmStatus.FailedUnschedulable] = StatusSimpleLabel.Error,
    _b[printableVmStatus.ImagePullBackOff] = StatusSimpleLabel.Error,
    _b[printableVmStatus.Migrating] = VMStatusSimpleLabel.Migrating,
    _b[printableVmStatus.Paused] = VMStatusSimpleLabel.Paused,
    _b[printableVmStatus.Provisioning] = VMStatusSimpleLabel.Starting,
    _b[printableVmStatus.Running] = VMStatusSimpleLabel.Running,
    _b[printableVmStatus.Starting] = VMStatusSimpleLabel.Starting,
    _b[printableVmStatus.Stopped] = VMStatusSimpleLabel.Stopped,
    _b[printableVmStatus.Stopping] = VMStatusSimpleLabel.Stopping,
    _b[printableVmStatus.Terminating] = VMStatusSimpleLabel.Deleting,
    _b[printableVmStatus.Unknown] = StatusSimpleLabel.Other,
    _b[printableVmStatus.WaitingForVolumeBinding] = VMStatusSimpleLabel.Starting,
    _b);
export var getVmStatusLabelFromPrintable = function (printableStatus) {
    return (printableStatusToLabel === null || printableStatusToLabel === void 0 ? void 0 : printableStatusToLabel[printableStatus]) || StatusSimpleLabel.Other;
};
export var VIRTUALMACHINES_TEMPLATES_BASE_URL = 'virtualmachinetemplates';
export var getTimestamp = function (resource) { return new Date(resource.metadata.creationTimestamp); };
export var isDVActivity = function (resource) {
    var _a, _b, _c, _d;
    return ((_a = resource === null || resource === void 0 ? void 0 : resource.status) === null || _a === void 0 ? void 0 : _a.phase) === 'ImportInProgress' &&
        Object.keys(diskImportKindMapping).includes((_d = (_c = (_b = resource === null || resource === void 0 ? void 0 : resource.metadata) === null || _b === void 0 ? void 0 : _b.ownerReferences) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.kind);
};
export var k8sDVResource = {
    isList: true,
    kind: DataVolumeModel,
    prop: 'dvs',
};
//# sourceMappingURL=utils.js.map