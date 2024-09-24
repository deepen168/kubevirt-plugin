import * as React from 'react';
import { Grid, GridItem } from '@patternfly/react-core';
import RunningVMsChartLegendLabel from './RunningVMsChartLegendLabel';
import './RunningVMsChartLegend.scss';
var RunningVMsChartLegend = function (_a) {
    var legendItems = _a.legendItems;
    var gridItems = [];
    legendItems.forEach(function (item) {
        var component = (React.createElement(GridItem, { key: item.name, span: 6 },
            React.createElement(RunningVMsChartLegendLabel, { item: item })));
        gridItems.push(component);
    });
    return (React.createElement("div", { className: "kv-running-vms-card__chart-legend" },
        React.createElement(Grid, { hasGutter: true }, gridItems)));
};
export default RunningVMsChartLegend;
//# sourceMappingURL=RunningVMsChartLegend.js.map