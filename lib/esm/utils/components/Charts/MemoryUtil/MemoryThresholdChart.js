import React, { useMemo } from 'react';
import { Link } from 'react-router-dom-v5-compat';
import xbytes from 'xbytes';
import { getMemorySize } from '@kubevirt-utils/components/CPUMemoryModal/utils/CpuMemoryUtils';
import { getMemory } from '@kubevirt-utils/resources/vm';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { PrometheusEndpoint, usePrometheusPoll } from '@openshift-console/dynamic-plugin-sdk';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartThreshold, ChartVoronoiContainer, } from '@patternfly/react-charts';
import chart_color_black_200 from '@patternfly/react-tokens/dist/esm/chart_color_black_200';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_orange_300 from '@patternfly/react-tokens/dist/esm/chart_color_orange_300';
import useDuration from '@virtualmachines/details/tabs/metrics/hooks/useDuration';
import ComponentReady from '../ComponentReady/ComponentReady';
import useResponsiveCharts from '../hooks/useResponsiveCharts';
import { getUtilizationQueries } from '../utils/queries';
import { findMaxYValue, MILLISECONDS_MULTIPLIER, queriesToLink, tickFormat, TICKS_COUNT, } from '../utils/utils';
var MemoryThresholdChart = function (_a) {
    var _b, _c, _d, _e;
    var vmi = _a.vmi;
    var _f = useDuration(), currentTime = _f.currentTime, duration = _f.duration, timespan = _f.timespan;
    var queries = useMemo(function () { return getUtilizationQueries({ duration: duration, obj: vmi }); }, [vmi, duration]);
    var _g = useResponsiveCharts(), height = _g.height, ref = _g.ref, width = _g.width;
    var memory = getMemorySize(getMemory(vmi));
    var data = usePrometheusPoll({
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.QUERY_RANGE,
        endTime: currentTime,
        namespace: (_b = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
        query: queries === null || queries === void 0 ? void 0 : queries.MEMORY_USAGE,
        timespan: timespan,
    })[0];
    var prometheusMemoryData = (_e = (_d = (_c = data === null || data === void 0 ? void 0 : data.data) === null || _c === void 0 ? void 0 : _c.result) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.values;
    var memoryAvailableBytes = xbytes.parseSize("".concat(memory === null || memory === void 0 ? void 0 : memory.size, " ").concat(memory === null || memory === void 0 ? void 0 : memory.unit, "B"));
    var chartData = prometheusMemoryData === null || prometheusMemoryData === void 0 ? void 0 : prometheusMemoryData.map(function (_a) {
        var x = _a[0], y = _a[1];
        return { name: 'Memory used', x: new Date(x * MILLISECONDS_MULTIPLIER), y: Number(y) };
    });
    var thresholdLine = new Array((chartData === null || chartData === void 0 ? void 0 : chartData.length) || 0).fill(0).map(function (_, index) {
        var _a;
        return ({
            name: 'Memory available',
            x: (_a = chartData === null || chartData === void 0 ? void 0 : chartData[index]) === null || _a === void 0 ? void 0 : _a.x,
            y: memoryAvailableBytes,
        });
    });
    var isReady = !isEmpty(chartData) || !isEmpty(thresholdLine);
    var linkToMetrics = queriesToLink(queries === null || queries === void 0 ? void 0 : queries.MEMORY_USAGE);
    var yMax = findMaxYValue(thresholdLine);
    return (React.createElement(ComponentReady, { isReady: isReady, linkToMetrics: linkToMetrics },
        React.createElement("div", { className: "util-threshold-chart", ref: ref },
            React.createElement(Link, { to: linkToMetrics },
                React.createElement(Chart, { containerComponent: React.createElement(ChartVoronoiContainer, { labels: function (_a) {
                            var datum = _a.datum;
                            return "".concat(datum === null || datum === void 0 ? void 0 : datum.name, ": ").concat(xbytes(datum === null || datum === void 0 ? void 0 : datum.y, {
                                fixed: 2,
                                iec: true,
                            }));
                        }, constrainToVisibleArea: true }), domain: {
                        x: [currentTime - timespan, currentTime],
                    }, height: height, padding: { bottom: 35, left: 70, right: 35, top: 35 }, scale: { x: 'time', y: 'linear' }, width: width },
                    React.createElement(ChartAxis, { style: {
                            tickLabels: { padding: 2 },
                            ticks: { stroke: 'transparent' },
                        }, axisComponent: React.createElement(React.Fragment, null), tickCount: TICKS_COUNT, tickFormat: tickFormat(duration, currentTime) }),
                    React.createElement(ChartAxis, { style: {
                            grid: {
                                stroke: chart_color_black_200.value,
                            },
                        }, dependentAxis: true, tickFormat: function (tick) { return xbytes(tick, { fixed: 2, iec: true }); }, tickValues: [0, yMax] }),
                    React.createElement(ChartGroup, null,
                        React.createElement(ChartArea, { style: {
                                data: {
                                    stroke: chart_color_blue_300.value,
                                },
                            }, data: chartData })),
                    React.createElement(ChartThreshold, { style: {
                            data: {
                                stroke: chart_color_orange_300.value,
                                strokeDasharray: 10,
                            },
                        }, data: thresholdLine }))))));
};
export default MemoryThresholdChart;
//# sourceMappingURL=MemoryThresholdChart.js.map