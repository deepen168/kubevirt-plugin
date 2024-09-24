import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getTemplateVirtualMachineObject, vCPUCount } from '@kubevirt-utils/resources/template';
import { getMemoryCPU } from '@kubevirt-utils/resources/vm';
import { readableSizeUnit } from '@kubevirt-utils/utils/units';
export var useVirtualMachineTemplatesCPUMemory = function (template) {
    var t = useKubevirtTranslation().t;
    var _a = getMemoryCPU(getTemplateVirtualMachineObject(template)), cpu = _a.cpu, memory = _a.memory;
    return "".concat(vCPUCount(cpu), " CPU | ").concat(readableSizeUnit(memory), " ").concat(t('Memory'));
};
//# sourceMappingURL=useVirtualMachineTemplatesCPUMemory.js.map