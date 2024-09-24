var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { VirtualMachineModel } from 'src/views/dashboard-extensions/utils';
import { getName, getNamespace } from '@kubevirt-utils/resources/shared';
import { DESCRIPTION_ANNOTATION, getBootloader, getCPU, getDataVolumeTemplates, getDevices, getDisks, getDomainFeatures, getHostname, getInterfaces, getMemory, getVolumes, getWorkload, } from '@kubevirt-utils/resources/vm';
import { k8sPatch, k8sUpdate } from '@openshift-console/dynamic-plugin-sdk';
import { printableVMStatus } from '@virtualmachines/utils';
export var updateStartStrategy = function (checked, vm) {
    k8sPatch({
        data: [
            {
                op: 'replace',
                path: "/spec/template/spec/startStrategy",
                value: checked ? printableVMStatus.Paused : null,
            },
        ],
        model: VirtualMachineModel,
        resource: vm,
    });
};
export var updateBootLoader = function (updatedVM, vm) {
    var _a, _b;
    var bootLoaderBeforeUpdate = getBootloader(vm);
    var isEfiSecure = (_b = (_a = getBootloader(updatedVM)) === null || _a === void 0 ? void 0 : _a.efi) === null || _b === void 0 ? void 0 : _b.secureBoot;
    var domainFeatures = getDomainFeatures(vm);
    var hasSMMFeatureDefined = (domainFeatures === null || domainFeatures === void 0 ? void 0 : domainFeatures.smm) !== undefined;
    return k8sPatch({
        data: __spreadArray([
            {
                op: bootLoaderBeforeUpdate ? 'replace' : 'add',
                path: "/spec/template/spec/domain/firmware",
                value: { bootloader: getBootloader(updatedVM) },
            }
        ], (isEfiSecure
            ? [
                {
                    op: hasSMMFeatureDefined ? 'replace' : 'add',
                    path: "/spec/template/spec/domain/features/smm",
                    value: { enabled: true },
                },
            ]
            : []), true),
        model: VirtualMachineModel,
        resource: updatedVM,
    });
};
export var updatedBootOrder = function (updatedVM) {
    return k8sPatch({
        data: [
            {
                op: 'replace',
                path: "/spec/template/spec/domain/devices/disks",
                value: getDisks(updatedVM),
            },
            {
                op: 'replace',
                path: "/spec/template/spec/domain/devices/interfaces",
                value: getInterfaces(updatedVM),
            },
        ],
        model: VirtualMachineModel,
        resource: updatedVM,
    });
};
export var updateMetadata = function (updatedVM, data, type) {
    return k8sPatch({
        data: [
            {
                op: 'replace',
                path: "/metadata/".concat(type),
                value: data,
            },
        ],
        model: VirtualMachineModel,
        resource: updatedVM,
    });
};
export var updateAnnotation = function (updatedVM, data) {
    return updateMetadata(updatedVM, data, 'annotations');
};
export var updateLabels = function (updatedVM, data) {
    return updateMetadata(updatedVM, data, 'labels');
};
export var updateHardwareDevices = function (type, vm) {
    var _a;
    return k8sPatch({
        data: [
            {
                op: 'replace',
                path: "/spec/template/spec/domain/devices/".concat(type),
                value: (_a = getDevices(vm)) === null || _a === void 0 ? void 0 : _a[type],
            },
        ],
        model: VirtualMachineModel,
        resource: vm,
    });
};
export var onSubmitYAML = function (updatedVM) {
    return k8sUpdate({
        data: updatedVM,
        model: VirtualMachineModel,
        name: getName(updatedVM),
        ns: getNamespace(updatedVM),
    });
};
export var updateGuestSystemAccessLog = function (updatedVM, checked) {
    return k8sPatch({
        data: [
            {
                op: 'replace',
                path: "/spec/template/spec/domain/devices/logSerialConsole",
                value: checked,
            },
        ],
        model: VirtualMachineModel,
        resource: updatedVM,
    });
};
export var updateDescription = function (updatedVM, updatedDescription) {
    return k8sPatch({
        data: [
            {
                op: 'replace',
                path: "/metadata/annotations/".concat(DESCRIPTION_ANNOTATION),
                value: updatedDescription,
            },
        ],
        model: VirtualMachineModel,
        resource: updatedVM,
    });
};
export var updateWorkload = function (updatedVM, newWorkload) {
    var vmWorkload = getWorkload(updatedVM);
    if (vmWorkload === newWorkload)
        return;
    return k8sPatch({
        data: [
            {
                op: 'replace',
                path: "/spec/template/metadata/annotations/vm.kubevirt.io~1workload",
                value: newWorkload,
            },
        ],
        model: VirtualMachineModel,
        resource: updatedVM,
    });
};
export var updatedVirtualMachine = function (updatedVM) {
    return k8sPatch({
        data: [
            {
                op: 'replace',
                path: "/spec/template/spec/domain/cpu",
                value: getCPU(updatedVM),
            },
            {
                op: 'replace',
                path: "/spec/template/spec/domain/memory/guest",
                value: getMemory(updatedVM),
            },
        ],
        model: VirtualMachineModel,
        resource: updatedVM,
    });
};
export var updatedInstanceType = function (updatedVM, instanceType) {
    return k8sPatch({
        data: [
            {
                op: 'replace',
                path: "/spec/instancetype",
                value: { kind: instanceType.kind, name: instanceType.metadata.name },
            },
        ],
        model: VirtualMachineModel,
        resource: updatedVM,
    });
};
export var updatedHostname = function (updatedVM) {
    return k8sPatch({
        data: [
            {
                op: 'replace',
                path: "/spec/template/spec/hostname",
                value: getHostname(updatedVM),
            },
        ],
        model: VirtualMachineModel,
        resource: updatedVM,
    });
};
export var updateHeadlessMode = function (updatedVM, checked) {
    return k8sPatch({
        data: [
            {
                op: 'replace',
                path: "/spec/template/spec/domain/devices/autoattachGraphicsDevice",
                value: checked ? false : null,
            },
        ],
        model: VirtualMachineModel,
        resource: updatedVM,
    });
};
export var updateDisks = function (updatedVM) {
    return k8sPatch({
        data: [
            {
                op: 'replace',
                path: "/spec/template/spec/domain/devices/disks",
                value: getDisks(updatedVM),
            },
            {
                op: 'replace',
                path: "/spec/template/spec/volumes",
                value: getVolumes(updatedVM),
            },
            {
                op: 'replace',
                path: "/spec/dataVolumeTemplates",
                value: getDataVolumeTemplates(updatedVM),
            },
        ],
        model: VirtualMachineModel,
        resource: updatedVM,
    });
};
export var updateVolumes = function (updatedVM) {
    return k8sPatch({
        data: [
            {
                op: 'replace',
                path: "/spec/template/spec/volumes",
                value: getVolumes(updatedVM),
            },
        ],
        model: VirtualMachineModel,
        resource: updatedVM,
    });
};
//# sourceMappingURL=utils.js.map