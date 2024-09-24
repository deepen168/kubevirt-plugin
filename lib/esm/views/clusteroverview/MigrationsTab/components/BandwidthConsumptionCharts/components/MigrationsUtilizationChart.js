import React from 'react';
import useResponsiveCharts from '@kubevirt-utils/components/Charts/hooks/useResponsiveCharts';
import { Chart, ChartAxis, ChartLine, createContainer } from '@patternfly/react-charts';
import { GridItem } from '@patternfly/react-core';
var MigrationsUtilizationChart = function (_a) {
    var chartData = _a.chartData, _b = _a.domain, domain = _b === void 0 ? null : _b, labels = _a.labels, _c = _a.tickFormat, tickFormat = _c === void 0 ? function (y) { return y; } : _c, _d = _a.tickValues, tickValues = _d === void 0 ? null : _d, title = _a.title;
    var _e = useResponsiveCharts(), height = _e.height, width = _e.width;
    var CursorVoronoiContainer = createContainer('voronoi', 'cursor');
    return (React.createElement(GridItem, { className: "co-utilization-card__item" },
        React.createElement("div", { className: "co-utilization-card__item-description" },
            React.createElement("h4", null, title)),
        React.createElement("div", null,
            React.createElement(Chart, { containerComponent: React.createElement(CursorVoronoiContainer, { activateData: false, cursorDimension: "x", key: title, labels: labels, mouseFollowTooltips: true, voronoiDimension: "x" }), domain: domain, height: height, padding: { bottom: 40, left: 80, right: 0, top: 40 }, scale: { x: 'time', y: 'linear' }, width: width },
                React.createElement(ChartAxis, { axisComponent: React.createElement(React.Fragment, null), dependentAxis: true, showGrid: true, tickFormat: tickFormat, tickValues: tickValues }),
                React.createElement(ChartLine, { data: chartData })))));
};
export default MigrationsUtilizationChart;
//# sourceMappingURL=MigrationsUtilizationChart.js.map