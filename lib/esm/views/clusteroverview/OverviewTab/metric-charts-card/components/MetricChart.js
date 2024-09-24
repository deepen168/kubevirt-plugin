import React from 'react';
import useResponsiveCharts from '@kubevirt-utils/components/Charts/hooks/useResponsiveCharts';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartVoronoiContainer, } from '@patternfly/react-charts';
import chart_color_black_200 from '@patternfly/react-tokens/dist/esm/chart_color_black_200';
import chart_color_blue_100 from '@patternfly/react-tokens/dist/esm/chart_color_blue_100';
import useXAxisTicks from '../utils/hooks/useXAxisTicks';
import useYAxisTicks from '../utils/hooks/useYAxisTicks';
import { formatPopoverLabel, getLabelUnit } from '../utils/utils';
import './MetricChart.scss';
var MetricChart = function (_a) {
    var metric = _a.metric, metricChartData = _a.metricChartData;
    var chartData = metricChartData.chartData, domain = metricChartData.domain, unit = metricChartData.unit;
    var _b = useResponsiveCharts(), height = _b.height, ref = _b.ref, width = _b.width;
    var displayUnit = getLabelUnit(metric, unit);
    var _c = useXAxisTicks(chartData), xAxisTicks = _c[0], xAxisTickFormat = _c[1];
    var _d = useYAxisTicks(metricChartData), yAxisTickValues = _d[0], yAxisTickFormat = _d[1];
    return (React.createElement("div", { className: "overview-metric-chart", ref: ref },
        React.createElement(Chart, { containerComponent: React.createElement(ChartVoronoiContainer, { constrainToVisibleArea: true, labels: formatPopoverLabel(displayUnit) }), domain: domain, height: height, padding: { bottom: 35, left: 100, right: 10, top: 35 }, scale: { x: 'time', y: 'linear' }, width: width },
            React.createElement(ChartAxis, { style: {
                    grid: {
                        stroke: chart_color_black_200.value,
                    },
                }, axisComponent: React.createElement(React.Fragment, null), dependentAxis: true, tickFormat: yAxisTickFormat(metric, unit), tickValues: yAxisTickValues }),
            React.createElement(ChartAxis, { style: {
                    axis: {
                        stroke: chart_color_black_200.value,
                    },
                }, fixLabelOverlap: true, tickFormat: xAxisTickFormat, tickValues: xAxisTicks }),
            React.createElement(ChartGroup, null,
                React.createElement(ChartArea, { style: {
                        data: {
                            stroke: chart_color_blue_100.value,
                        },
                    }, data: chartData })))));
};
export default MetricChart;
//# sourceMappingURL=MetricChart.js.map