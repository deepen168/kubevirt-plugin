import React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import DurationDropdown from '@kubevirt-utils/components/DurationOption/DurationDropdown';
import DurationOption from '@kubevirt-utils/components/DurationOption/DurationOption';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useDuration from '../hooks/useDuration';
var TimeRange = function () {
    var t = useKubevirtTranslation().t;
    var _a = useDuration(), duration = _a.duration, setDuration = _a.setDuration;
    var onDurationSelect = function (value) {
        return setDuration(DurationOption.fromDropdownLabel(value).toString());
    };
    return (React.createElement("div", { className: "timerange--main" },
        React.createElement("span", { className: "timerange--main__text" },
            React.createElement("span", { className: "timerange--main__text--time-range" }, t('Time range')),
            React.createElement(DurationDropdown, { selectedDuration: duration, selectHandler: onDurationSelect })),
        React.createElement(Link, { to: '/monitoring/dashboards/grafana-dashboard-kubevirt-top-consumers' }, t('Virtualization dashboard'))));
};
export default TimeRange;
//# sourceMappingURL=TimeRange.js.map