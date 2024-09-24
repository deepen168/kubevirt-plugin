import React from 'react';
import CPUDescription from '@kubevirt-utils/components/CPUDescription/CPUDescription';
import { CpuMemHelperTextResources } from '@kubevirt-utils/components/CPUDescription/utils/utils';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { vCPUCount } from '@kubevirt-utils/resources/template/utils';
import { getCPU, getMemory } from '@kubevirt-utils/resources/vm';
import { readableSizeUnit } from '@kubevirt-utils/utils/units';
var CPUMemory = function (_a) {
    var vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var cpu = vCPUCount(getCPU(vmi));
    var memory = readableSizeUnit(getMemory(vmi));
    return (React.createElement(VirtualMachineDescriptionItem, { bodyContent: React.createElement(CPUDescription, { cpu: getCPU(vmi), helperTextResource: CpuMemHelperTextResources.VMI }), descriptionData: t('{{cpu}} CPU | {{memory}} Memory', { cpu: cpu, memory: memory }), descriptionHeader: t('CPU | Memory'), isPopover: true }));
};
export default CPUMemory;
//# sourceMappingURL=CPUMemory.js.map