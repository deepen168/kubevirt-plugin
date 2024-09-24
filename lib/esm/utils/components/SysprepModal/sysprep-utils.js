import { ConfigMapModel } from '@kubevirt-ui/kubevirt-api/console';
import { getDisks, getVolumes } from '@kubevirt-utils/resources/vm';
import { generatePrettyName } from '@kubevirt-utils/utils/utils';
import { InterfaceTypes } from '../DiskModal/utils/types';
import { SYSPREP } from './consts';
export var AUTOUNATTEND = 'autounattend.xml';
export var UNATTEND = 'unattend.xml';
export var WINDOWS = 'windows';
export var sysprepDisk = function () { return ({ cdrom: { bus: InterfaceTypes.SATA }, name: SYSPREP }); };
export var sysprepVolume = function (sysprepName) { return ({
    name: SYSPREP,
    sysprep: {
        configMap: { name: sysprepName },
    },
}); };
export var addSysprepConfig = function (vm, newSysprepName) {
    getVolumes(vm).push({
        name: SYSPREP,
        sysprep: {
            configMap: { name: newSysprepName },
        },
    });
    (getDisks(vm) || []).push(sysprepDisk());
};
export var removeSysprepConfig = function (vm, sysprepVolumeName) {
    vm.spec.template.spec.volumes = getVolumes(vm).filter(function (volume) { return sysprepVolumeName !== volume.name; });
    vm.spec.template.spec.domain.devices.disks = getDisks(vm).filter(function (disk) { return sysprepVolumeName !== disk.name; });
};
export var generateSysprepConfigMapName = function () { return generatePrettyName('sysprep-config'); };
export var generateNewSysprepConfig = function (_a) {
    var data = _a.data, sysprepName = _a.sysprepName;
    return ({
        apiVersion: ConfigMapModel.apiVersion,
        data: data,
        kind: ConfigMapModel.kind,
        metadata: {
            name: sysprepName || generateSysprepConfigMapName(),
        },
    });
};
export var getSysprepConfigMapName = function (volume) { var _a, _b; return (_b = (_a = volume === null || volume === void 0 ? void 0 : volume.sysprep) === null || _a === void 0 ? void 0 : _a.configMap) === null || _b === void 0 ? void 0 : _b.name; };
//# sourceMappingURL=sysprep-utils.js.map