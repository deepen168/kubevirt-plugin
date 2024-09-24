import * as React from 'react';
import DurationDropdown from '@kubevirt-utils/components/DurationOption/DurationDropdown';
import DurationOption from '@kubevirt-utils/components/DurationOption/DurationOption';
import useDuration from '@virtualmachines/details/tabs/metrics/hooks/useDuration';
var TimeDropdown = function () {
    var _a = useDuration(), duration = _a.duration, setDuration = _a.setDuration;
    var onDurationSelect = function (value) {
        return setDuration(DurationOption.fromDropdownLabel(value).toString());
    };
    return (React.createElement("div", { className: "duration-select", "data-test-id": "duration-select" },
        React.createElement(DurationDropdown, { selectedDuration: duration, selectHandler: onDurationSelect })));
};
export default TimeDropdown;
//# sourceMappingURL=TimeDropdown.js.map