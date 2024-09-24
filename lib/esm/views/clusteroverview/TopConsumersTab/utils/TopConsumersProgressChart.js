import * as React from 'react';
import { Progress, ProgressMeasureLocation, ProgressSize } from '@patternfly/react-core';
import './TopConsumersProgressChart.scss';
var TopConsumersProgressChart = function (_a) {
    var labelUnit = _a.labelUnit, labelValue = _a.labelValue, maxValue = _a.maxValue, title = _a.title, value = _a.value;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "kv-top-consumers-card__progress-chart--title" }, title),
        React.createElement(Progress, { "aria-label": "kv-top-consumers-card-chart", label: "".concat(labelValue, " ").concat(labelUnit), max: maxValue, measureLocation: ProgressMeasureLocation.outside, size: ProgressSize.sm, value: value })));
};
export default TopConsumersProgressChart;
//# sourceMappingURL=TopConsumersProgressChart.js.map