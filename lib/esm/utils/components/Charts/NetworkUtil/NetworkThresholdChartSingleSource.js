import React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import xbytes from 'xbytes';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Chart, ChartAxis, ChartGroup, ChartLegendTooltip, ChartLine, ChartThemeColor, createContainer, } from '@patternfly/react-charts';
import chart_color_black_200 from '@patternfly/react-tokens/dist/esm/chart_color_black_200';
import useDuration from '@virtualmachines/details/tabs/metrics/hooks/useDuration';
import ComponentReady from '../ComponentReady/ComponentReady';
import useResponsiveCharts from '../hooks/useResponsiveCharts';
import { findNetworkMaxYValue, formatNetworkYTick, getNetworkTickValues, MILLISECONDS_MULTIPLIER, tickFormat, TICKS_COUNT, } from '../utils/utils';
var NetworkThresholdSingleSourceChart = function (_a) {
    var _b;
    var data = _a.data, link = _a.link;
    var _c = useDuration(), currentTime = _c.currentTime, duration = _c.duration, timespan = _c.timespan;
    var _d = useResponsiveCharts(), height = _d.height, ref = _d.ref, width = _d.width;
    var chartData = !isEmpty(data) &&
        (data === null || data === void 0 ? void 0 : data.map(function (obj) {
            var _a;
            return (_a = ((obj === null || obj === void 0 ? void 0 : obj.values) || [])) === null || _a === void 0 ? void 0 : _a.map(function (_a) {
                var _b;
                var x = _a[0], y = _a[1];
                return {
                    name: (_b = obj === null || obj === void 0 ? void 0 : obj.metric) === null || _b === void 0 ? void 0 : _b.interface,
                    x: new Date(x * MILLISECONDS_MULTIPLIER),
                    y: Number(y),
                };
            });
        }));
    var isReady = !isEmpty(chartData);
    var Ymax = findNetworkMaxYValue(chartData);
    var CursorVoronoiContainer = createContainer('voronoi', 'cursor');
    var legendData = !isEmpty(chartData) &&
        (chartData === null || chartData === void 0 ? void 0 : chartData.map(function (newChartdata, index) {
            var _a, _b;
            return { childName: (_a = newChartdata === null || newChartdata === void 0 ? void 0 : newChartdata[index]) === null || _a === void 0 ? void 0 : _a.name, name: (_b = newChartdata === null || newChartdata === void 0 ? void 0 : newChartdata[index]) === null || _b === void 0 ? void 0 : _b.name };
        }));
    return (React.createElement(ComponentReady, { isReady: isReady, linkToMetrics: link },
        React.createElement("div", { className: "util-threshold-chart", ref: ref },
            React.createElement(Link, { to: link },
                React.createElement(Chart, { containerComponent: React.createElement(CursorVoronoiContainer, { labelComponent: React.createElement(ChartLegendTooltip, { title: function (datum) { var _a, _b, _c; return ((_a = datum === null || datum === void 0 ? void 0 : datum.x) === null || _a === void 0 ? void 0 : _a.getHours()) + ':' + ((_c = String((_b = datum === null || datum === void 0 ? void 0 : datum.x) === null || _b === void 0 ? void 0 : _b.getMinutes())) === null || _c === void 0 ? void 0 : _c.padStart(2, '0')); }, legendData: legendData }), labels: function (_a) {
                            var datum = _a.datum;
                            return "".concat(xbytes(datum === null || datum === void 0 ? void 0 : datum.y, {
                                fixed: 2,
                                iec: true,
                            }), "ps");
                        }, cursorDimension: "x", mouseFollowTooltips: true, voronoiDimension: "x" }), domain: {
                        x: [currentTime - timespan, currentTime],
                        y: [0, (_b = getNetworkTickValues(Ymax + 1)) === null || _b === void 0 ? void 0 : _b.length],
                    }, height: height, padding: { bottom: 60, left: 70, right: 60, top: 30 }, scale: { x: 'time', y: 'linear' }, themeColor: ChartThemeColor.multiUnordered, width: width },
                    React.createElement(ChartAxis, { style: {
                            grid: {
                                stroke: chart_color_black_200.value,
                            },
                        }, dependentAxis: true, tickFormat: formatNetworkYTick, tickValues: getNetworkTickValues(Ymax) }),
                    React.createElement(ChartAxis, { style: {
                            tickLabels: { padding: 2 },
                            ticks: { stroke: 'transparent' },
                        }, axisComponent: React.createElement(React.Fragment, null), tickCount: TICKS_COUNT, tickFormat: tickFormat(duration, currentTime) }),
                    React.createElement(ChartGroup, null, isReady &&
                        (chartData === null || chartData === void 0 ? void 0 : chartData.map(function (newChartdata) {
                            var _a, _b;
                            return (React.createElement(ChartLine, { data: newChartdata, key: (_a = newChartdata === null || newChartdata === void 0 ? void 0 : newChartdata[0]) === null || _a === void 0 ? void 0 : _a.name, name: (_b = newChartdata === null || newChartdata === void 0 ? void 0 : newChartdata[0]) === null || _b === void 0 ? void 0 : _b.name, themeColor: ChartThemeColor.multiUnordered }));
                        }))))))));
};
export default NetworkThresholdSingleSourceChart;
//# sourceMappingURL=NetworkThresholdChartSingleSource.js.map