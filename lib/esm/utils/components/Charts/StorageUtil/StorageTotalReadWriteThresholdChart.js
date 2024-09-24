import React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import xbytes from 'xbytes';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
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
var StorageTotalReadWriteThresholdChart = function (_a) {
    var _b, _c, _d, _e;
    var vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var _f = useDuration(), currentTime = _f.currentTime, duration = _f.duration, timespan = _f.timespan;
    var queries = React.useMemo(function () { return getUtilizationQueries({ duration: duration, obj: vmi }); }, [vmi, duration]);
    var _g = useResponsiveCharts(), height = _g.height, ref = _g.ref, width = _g.width;
    var data = usePrometheusPoll({
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.QUERY_RANGE,
        endTime: currentTime,
        namespace: (_b = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
        query: queries === null || queries === void 0 ? void 0 : queries.FILESYSTEM_TOTAL_USAGE,
        timespan: timespan,
    })[0];
    var storageWriteData = (_e = (_d = (_c = data === null || data === void 0 ? void 0 : data.data) === null || _c === void 0 ? void 0 : _c.result) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.values;
    var chartData = storageWriteData === null || storageWriteData === void 0 ? void 0 : storageWriteData.map(function (_a) {
        var x = _a[0], y = _a[1];
        return { x: new Date(x * MILLISECONDS_MULTIPLIER), y: Number(y) };
    });
    var yMax = findMaxYValue(chartData);
    var thresholdData = storageWriteData === null || storageWriteData === void 0 ? void 0 : storageWriteData.map(function (_a) {
        var x = _a[0];
        return { x: new Date(x * MILLISECONDS_MULTIPLIER), y: yMax };
    });
    var linkToMetrics = queriesToLink(queries.FILESYSTEM_TOTAL_USAGE);
    return (React.createElement(ComponentReady, { isReady: !isEmpty(chartData), linkToMetrics: linkToMetrics },
        React.createElement("div", { className: "util-threshold-chart", ref: ref },
            React.createElement(Link, { to: linkToMetrics },
                React.createElement(Chart, { containerComponent: React.createElement(ChartVoronoiContainer, { labels: function (_a) {
                            var datum = _a.datum;
                            return t('Data transfer: {{input}}', {
                                input: xbytes(datum === null || datum === void 0 ? void 0 : datum.y, { fixed: 2, iec: true }),
                            });
                        }, constrainToVisibleArea: true }), domain: {
                        x: [currentTime - timespan, currentTime],
                        y: [0, yMax],
                    }, height: height, padding: { bottom: 35, left: 70, right: 35, top: 35 }, scale: { x: 'time', y: 'linear' }, width: width },
                    React.createElement(ChartAxis, { style: {
                            grid: {
                                stroke: chart_color_black_200.value,
                            },
                        }, dependentAxis: true, tickFormat: function (tick) { return xbytes(tick, { fixed: 2, iec: true }); }, tickValues: [0, yMax] }),
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
export default StorageTotalReadWriteThresholdChart;
//# sourceMappingURL=StorageTotalReadWriteThresholdChart.js.map