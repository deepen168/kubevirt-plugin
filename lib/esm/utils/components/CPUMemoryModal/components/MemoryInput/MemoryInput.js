import React from 'react';
import { memorySizesTypes } from '@kubevirt-utils/components/CPUMemoryModal/utils/CpuMemoryUtils';
import FormPFSelect from '@kubevirt-utils/components/FormPFSelect/FormPFSelect';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { toIECUnit } from '@kubevirt-utils/utils/units';
import { NumberInput, SelectList, SelectOption, Title, TitleSizes } from '@patternfly/react-core';
import './MemoryInput.scss';
var MemoryInput = function (_a) {
    var memory = _a.memory, memoryUnit = _a.memoryUnit, setMemory = _a.setMemory, setMemoryUnit = _a.setMemoryUnit;
    var t = useKubevirtTranslation().t;
    return (React.createElement("div", { className: "input-memory" },
        React.createElement(Title, { className: "input-memory__title", headingLevel: "h6", size: TitleSizes.md }, t('Memory')),
        React.createElement(NumberInput, { onChange: function (e) {
                var _a;
                var newNumber = +((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.value);
                setMemory(function (mem) { return (newNumber > 0 ? newNumber : mem); });
            }, inputName: "memory-input", min: 1, onMinus: function () { return setMemory(function (mem) { return +mem - 1; }); }, onPlus: function () { return setMemory(function (mem) { return +mem + 1; }); }, value: memory }),
        React.createElement(FormPFSelect, { selected: memoryUnit, selectedLabel: toIECUnit(memoryUnit), toggleProps: { className: 'input-memory--dropdown' } },
            React.createElement(SelectList, null, memorySizesTypes.map(function (value) { return (React.createElement(SelectOption, { key: value, onClick: function () { return setMemoryUnit(value); }, value: value }, toIECUnit(value))); })))));
};
export default MemoryInput;
//# sourceMappingURL=MemoryInput.js.map