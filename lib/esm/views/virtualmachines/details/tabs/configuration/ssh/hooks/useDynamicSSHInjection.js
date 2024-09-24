import useBootableVolumes from '@kubevirt-utils/resources/bootableresources/hooks/useBootableVolumes';
import { getName } from '@kubevirt-utils/resources/shared';
import { getIsDynamicSSHInjectionEnabled } from '@kubevirt-utils/resources/vm';
import { getPVCSourceOrSourceRef } from '@kubevirt-utils/resources/vm/utils/source';
export var useDynamicSSHInjection = function (vm) {
    var _a = getPVCSourceOrSourceRef(vm), name = _a.name, namespace = _a.namespace;
    var bootableVolumes = useBootableVolumes(namespace).bootableVolumes;
    var bootableVolume = bootableVolumes === null || bootableVolumes === void 0 ? void 0 : bootableVolumes.find(function (bv) { return getName(bv) === name; });
    var isDynamicSSHInjectionEnabled = getIsDynamicSSHInjectionEnabled(vm, bootableVolume);
    return isDynamicSSHInjectionEnabled;
};
//# sourceMappingURL=useDynamicSSHInjection.js.map