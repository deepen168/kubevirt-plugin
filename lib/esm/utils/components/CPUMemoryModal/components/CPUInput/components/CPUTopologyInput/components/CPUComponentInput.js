import React from 'react';
import { getCPUComponentTitle } from '@kubevirt-utils/components/CPUMemoryModal/components/CPUInput/components/CPUTopologyInput/utils/utils';
import { getUpdatedCPU, } from '@kubevirt-utils/components/CPUMemoryModal/components/CPUInput/utils/utils';
import { GridItem, NumberInput, Text } from '@patternfly/react-core';
var CPUComponentInput = function (_a) {
    var cpu = _a.cpu, cpuComponent = _a.cpuComponent, isDisabled = _a.isDisabled, setCPU = _a.setCPU;
    return (React.createElement(React.Fragment, null,
        React.createElement(GridItem, { span: 3 },
            React.createElement(Text, { disabled: isDisabled }, getCPUComponentTitle(cpuComponent))),
        React.createElement(GridItem, { span: 9 },
            React.createElement(NumberInput, { onChange: function (e) {
                    var _a;
                    var newNumber = +((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.value);
                    setCPU(getUpdatedCPU(cpu, newNumber, cpuComponent));
                }, inputName: "cpu-sockets-input", isDisabled: isDisabled, min: 1, onMinus: function () { return setCPU(getUpdatedCPU(cpu, +(cpu === null || cpu === void 0 ? void 0 : cpu[cpuComponent]) - 1, cpuComponent)); }, onPlus: function () { return setCPU(getUpdatedCPU(cpu, +(cpu === null || cpu === void 0 ? void 0 : cpu[cpuComponent]) + 1, cpuComponent)); }, value: cpu === null || cpu === void 0 ? void 0 : cpu[cpuComponent] }))));
};
export default CPUComponentInput;
//# sourceMappingURL=CPUComponentInput.js.map