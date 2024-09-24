import React, { useMemo } from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { getVMIPod } from '@kubevirt-utils/resources/vmi';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { PrometheusEndpoint, usePrometheusPoll, } from '@openshift-console/dynamic-plugin-sdk';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartThreshold, ChartVoronoiContainer, } from '@patternfly/react-charts';
import chart_color_black_200 from '@patternfly/react-tokens/dist/esm/chart_color_black_200';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_orange_300 from '@patternfly/react-tokens/dist/esm/chart_color_orange_300';
import useDuration from '@virtualmachines/details/tabs/metrics/hooks/useDuration';
import ComponentReady from '../ComponentReady/ComponentReady';
import useResponsiveCharts from '../hooks/useResponsiveCharts';
import { getUtilizationQueries } from '../utils/queries';
import { findMaxYValue, MILLISECONDS_MULTIPLIER, queriesToLink, tickFormat, TICKS_COUNT, } from '../utils/utils';
var CPUThresholdChart = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var pods = _a.pods, vmi = _a.vmi;
    var vmiPod = useMemo(function () { return getVMIPod(vmi, pods); }, [pods, vmi]);
    var _k = useDuration(), currentTime = _k.currentTime, duration = _k.duration, timespan = _k.timespan;
    var _l = useResponsiveCharts(), height = _l.height, ref = _l.ref, width = _l.width;
    var queries = useMemo(function () { var _a; return getUtilizationQueries({ duration: duration, launcherPodName: (_a = vmiPod === null || vmiPod === void 0 ? void 0 : vmiPod.metadata) === null || _a === void 0 ? void 0 : _a.name, obj: vmi }); }, [vmi, vmiPod, duration]);
    var dataCPURequested = usePrometheusPoll({
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.QUERY_RANGE,
        endTime: currentTime,
        namespace: (_b = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
        query: queries.CPU_REQUESTED,
        timespan: timespan,
    })[0];
    var dataCPUUsage = usePrometheusPoll({
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.QUERY_RANGE,
        endTime: currentTime,
        namespace: (_c = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _c === void 0 ? void 0 : _c.namespace,
        query: queries === null || queries === void 0 ? void 0 : queries.CPU_USAGE,
        timespan: timespan,
    })[0];
    var cpuUsage = (_f = (_e = (_d = dataCPUUsage === null || dataCPUUsage === void 0 ? void 0 : dataCPUUsage.data) === null || _d === void 0 ? void 0 : _d.result) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.values;
    var cpuRequested = (_j = (_h = (_g = dataCPURequested === null || dataCPURequested === void 0 ? void 0 : dataCPURequested.data) === null || _g === void 0 ? void 0 : _g.result) === null || _h === void 0 ? void 0 : _h[0]) === null || _j === void 0 ? void 0 : _j.values;
    var chartData = cpuUsage === null || cpuUsage === void 0 ? void 0 : cpuUsage.map(function (_a) {
        var x = _a[0], y = _a[1];
        return { name: 'CPU usage', x: new Date(x * MILLISECONDS_MULTIPLIER), y: Number(y) };
    });
    var thresholdData = cpuRequested === null || cpuRequested === void 0 ? void 0 : cpuRequested.map(function (_a) {
        var x = _a[0], y = _a[1];
        return { name: 'CPU requested', x: new Date(x * MILLISECONDS_MULTIPLIER), y: Number(y) };
    });
    var isReady = !isEmpty(chartData) && !isEmpty(thresholdData);
    var linkToMetrics = queriesToLink(queries === null || queries === void 0 ? void 0 : queries.CPU_USAGE);
    var yMax = findMaxYValue(thresholdData);
    return (React.createElement(ComponentReady, { isReady: isReady, linkToMetrics: linkToMetrics },
        React.createElement("div", { className: "util-threshold-chart", ref: ref },
            React.createElement(Link, { to: linkToMetrics },
                React.createElement(Chart, { containerComponent: React.createElement(ChartVoronoiContainer, { labels: function (_a) {
                            var _b;
                            var datum = _a.datum;
                            return "".concat(datum === null || datum === void 0 ? void 0 : datum.name, ": ").concat((_b = datum === null || datum === void 0 ? void 0 : datum.y) === null || _b === void 0 ? void 0 : _b.toFixed(2), "'s");
                        }, constrainToVisibleArea: true }), domain: {
                        x: [currentTime - timespan, currentTime],
                    }, height: height, padding: { bottom: 35, left: 70, right: 35, top: 35 }, scale: { x: 'time', y: 'linear' }, width: width },
                    React.createElement(ChartAxis, { style: {
                            grid: {
                                stroke: chart_color_black_200.value,
                            },
                        }, dependentAxis: true, tickFormat: function (tick) { return tick === null || tick === void 0 ? void 0 : tick.toFixed(2); }, tickValues: [0, yMax] }),
                    React.createElement(ChartAxis, { style: {
                            tickLabels: { padding: 2 },
                            ticks: { stroke: 'transparent' },
                        }, axisComponent: React.createElement(React.Fragment, null), tickCount: TICKS_COUNT, tickFormat: tickFormat(duration, currentTime) }),
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
                        }, data: thresholdData }))))));
};
export default CPUThresholdChart;
//# sourceMappingURL=CPUThresholdChart.js.map