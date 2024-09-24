var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import VirtualMachineRestoreModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineRestoreModel';
import VirtualMachineSnapshotModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineSnapshotModel';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
export var getVolumeSnapshotStatusesPartition = function (volumeSnaoshotStatuses) {
    var supportedVolumes = volumeSnaoshotStatuses === null || volumeSnaoshotStatuses === void 0 ? void 0 : volumeSnaoshotStatuses.filter(function (status) { return status === null || status === void 0 ? void 0 : status.enabled; });
    var unsupportedVolumes = volumeSnaoshotStatuses === null || volumeSnaoshotStatuses === void 0 ? void 0 : volumeSnaoshotStatuses.filter(function (status) { return !(status === null || status === void 0 ? void 0 : status.enabled); });
    return {
        supportedVolumes: supportedVolumes,
        unsupportedVolumes: unsupportedVolumes,
    };
};
export var validateSnapshotDeadline = function (deadline) {
    if ((deadline === null || deadline === void 0 ? void 0 : deadline.length) > 0) {
        if (!Number(deadline)) {
            return t('Deadline must be a number');
        }
        if (Number(deadline) <= 0) {
            return t('Deadline must be greater than 0');
        }
    }
    return undefined;
};
export var getEmptyVMSnapshotResource = function (vm) {
    var _a, _b;
    var snapshotResource = {
        apiVersion: "".concat(VirtualMachineSnapshotModel.apiGroup, "/").concat(VirtualMachineSnapshotModel.apiVersion),
        kind: VirtualMachineSnapshotModel.kind,
        metadata: {
            name: '',
            namespace: (_a = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _a === void 0 ? void 0 : _a.namespace,
        },
        spec: {
            source: {
                apiGroup: VirtualMachineModel.apiGroup,
                kind: VirtualMachineModel.kind,
                name: (_b = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _b === void 0 ? void 0 : _b.name,
            },
        },
    };
    return snapshotResource;
};
export var getVMRestoreSnapshotResource = function (snapshot) {
    var restoreResource = {
        apiVersion: "".concat(VirtualMachineRestoreModel.apiGroup, "/").concat(VirtualMachineRestoreModel.apiVersion),
        kind: VirtualMachineRestoreModel.kind,
        metadata: {
            name: "restore-".concat(snapshot.metadata.name, "-").concat(new Date().getTime()),
            namespace: snapshot.metadata.namespace,
            ownerReferences: __spreadArray([], (snapshot.metadata.ownerReferences || []), true),
        },
        spec: {
            target: {
                apiGroup: VirtualMachineModel.apiGroup,
                kind: VirtualMachineModel.kind,
                name: snapshot.spec.source.name,
            },
            virtualMachineSnapshotName: snapshot.metadata.name,
        },
    };
    return restoreResource;
};
//# sourceMappingURL=helpers.js.map