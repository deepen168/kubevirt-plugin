import React from 'react';
import CPUTopologyHelperText from '@kubevirt-utils/components/CPUMemoryModal/components/CPUInput/components/CPUTopologyInput/components/TotalCPUHelperText/CPUTopologyHelperText';
import { CPUComponent } from '@kubevirt-utils/components/CPUMemoryModal/components/CPUInput/utils/utils';
import { Grid } from '@patternfly/react-core';
import CPUComponentInput from './components/CPUComponentInput';
var CPUTopologyInput = function (_a) {
    var cpu = _a.cpu, hide = _a.hide, isDisabled = _a.isDisabled, setCPU = _a.setCPU;
    if (hide)
        return null;
    return (React.createElement(Grid, { hasGutter: true },
        React.createElement(CPUComponentInput, { cpu: cpu, cpuComponent: CPUComponent.cores, isDisabled: isDisabled, setCPU: setCPU }),
        React.createElement(CPUComponentInput, { cpu: cpu, cpuComponent: CPUComponent.sockets, isDisabled: isDisabled, setCPU: setCPU }),
        React.createElement(CPUComponentInput, { cpu: cpu, cpuComponent: CPUComponent.threads, isDisabled: isDisabled, setCPU: setCPU }),
        React.createElement(CPUTopologyHelperText, { cpu: cpu })));
};
export default CPUTopologyInput;
//# sourceMappingURL=CPUTopologyInput.js.map