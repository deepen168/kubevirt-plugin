import produce from 'immer';
import { generateSysprepConfigMapName, sysprepDisk, sysprepVolume, } from '@kubevirt-utils/components/SysprepModal/sysprep-utils';
import { ensurePath } from '@kubevirt-utils/utils/utils';
export var produceVMNetworks = function (vm, updateNetwork) {
    return produce(vm, function (draftVM) {
        ensurePath(draftVM, ['spec.template.spec.domain.devices']);
        if (!draftVM.spec.template.spec.domain.devices.interfaces)
            draftVM.spec.template.spec.domain.devices.interfaces = [];
        if (!draftVM.spec.template.spec.networks)
            draftVM.spec.template.spec.networks = [];
        updateNetwork(draftVM);
    });
};
export var produceVMDisks = function (vm, updateDisks) {
    return produce(vm, function (draftVM) {
        ensurePath(draftVM, ['spec.template.spec.domain.devices']);
        if (!draftVM.spec.template.spec.domain.devices.disks)
            draftVM.spec.template.spec.domain.devices.disks = [];
        if (!draftVM.spec.template.spec.volumes)
            draftVM.spec.template.spec.volumes = [];
        if (!draftVM.spec.dataVolumeTemplates)
            draftVM.spec.dataVolumeTemplates = [];
        updateDisks(draftVM);
    });
};
export var produceVMDevices = function (vm, updateDevices) {
    return produce(vm, function (draftVM) {
        ensurePath(draftVM, ['spec.template.spec.domain.devices']);
        if (!draftVM.spec.template.spec.domain.devices.gpus)
            draftVM.spec.template.spec.domain.devices.gpus = [];
        if (!draftVM.spec.template.spec.domain.devices.hostDevices)
            draftVM.spec.template.spec.domain.devices.hostDevices = [];
        updateDevices(draftVM);
    });
};
export var produceVMSysprep = function (vm, sysprepName) {
    return produceVMDisks(vm, function (vmDraft) {
        var _a;
        if (!((_a = vmDraft.spec.template.spec.domain.devices.disks) === null || _a === void 0 ? void 0 : _a.find(function (disk) { return disk.name === sysprepDisk.name; }))) {
            vmDraft.spec.template.spec.domain.devices.disks.push(sysprepDisk());
            vmDraft.spec.template.spec.volumes.push(sysprepVolume(sysprepName || generateSysprepConfigMapName()));
        }
    });
};
//# sourceMappingURL=vm-produce.js.map