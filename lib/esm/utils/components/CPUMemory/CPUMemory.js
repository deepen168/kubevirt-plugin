import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { vCPUCount } from '@kubevirt-utils/resources/template/utils';
import { getCPU, getMemory } from '@kubevirt-utils/resources/vm';
import { readableSizeUnit } from '@kubevirt-utils/utils/units';
import { Skeleton } from '@patternfly/react-core';
import { isRunning } from '@virtualmachines/utils';
import './CPUMemory.scss';
var CPUMemory = function (_a) {
    var vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var isVMRunning = isRunning(vm);
    if ((isVMRunning && !vmi) || !vm)
        return React.createElement(Skeleton, { className: "pf-m-width-sm" });
    var cpu = vCPUCount(getCPU(vm) || getCPU(vmi));
    var memory = readableSizeUnit(getMemory(vm) || getMemory(vmi));
    return (React.createElement("span", { "data-test-id": "virtual-machine-overview-details-cpu-memory", id: "virtual-machine-overview-details-cpu-memory" }, t('{{cpu}} CPU | {{memory}} Memory', { cpu: cpu, memory: memory })));
};
export default CPUMemory;
//# sourceMappingURL=CPUMemory.js.map