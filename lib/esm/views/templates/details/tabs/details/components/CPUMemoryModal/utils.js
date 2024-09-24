import { getMemorySize } from '@kubevirt-utils/components/CPUMemoryModal/utils/CpuMemoryUtils';
import { getTemplateVirtualMachineObject } from '@kubevirt-utils/resources/template';
import { getCPU, getMemory } from '@kubevirt-utils/resources/vm';
export var getDefaultCPUMemoryValues = function (template) {
    var vmObject = getTemplateVirtualMachineObject(template);
    var defaultCPU = getCPU(vmObject);
    var defaultMemory = getMemorySize(getMemory(vmObject));
    var size = defaultMemory.size, unit = defaultMemory.unit;
    return { defaultCPU: defaultCPU, defaultMemory: { defaultMemorySize: size, defaultMemoryUnit: unit } };
};
//# sourceMappingURL=utils.js.map