import React from 'react';
import { CPUComponent, getUpdatedCPU, } from '@kubevirt-utils/components/CPUMemoryModal/components/CPUInput/utils/utils';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Grid, GridItem, NumberInput, Text } from '@patternfly/react-core';
import './VCPUInput.scss';
var VCPUInput = function (_a) {
    var cpu = _a.cpu, isDisabled = _a.isDisabled, setCPU = _a.setCPU;
    var t = useKubevirtTranslation().t;
    var handleButtonInput = function (newCPU) {
        setCPU(newCPU);
    };
    return (React.createElement(Grid, { className: "vcpu-input", hasGutter: true },
        React.createElement(GridItem, { span: 3 },
            React.createElement(Text, { disabled: isDisabled }, t('vCPU'))),
        React.createElement(GridItem, { span: 9 },
            React.createElement(NumberInput, { onChange: function (e) {
                    var _a;
                    var newNumber = +((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.value);
                    setCPU(getUpdatedCPU(cpu, newNumber, CPUComponent.sockets));
                }, onMinus: function () {
                    return handleButtonInput(getUpdatedCPU(cpu, +(cpu === null || cpu === void 0 ? void 0 : cpu.sockets) - 1, CPUComponent.sockets));
                }, onPlus: function () {
                    return handleButtonInput(getUpdatedCPU(cpu, +(cpu === null || cpu === void 0 ? void 0 : cpu.sockets) + 1, CPUComponent.sockets));
                }, inputName: "cpu-input", isDisabled: isDisabled, min: 1, value: cpu === null || cpu === void 0 ? void 0 : cpu.sockets }))));
};
export default VCPUInput;
//# sourceMappingURL=VCPUInput.js.map