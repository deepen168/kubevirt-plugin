import React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import xbytes from 'xbytes';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { PrometheusEndpoint, usePrometheusPoll } from '@openshift-console/dynamic-plugin-sdk';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartVoronoiContainer, } from '@patternfly/react-charts';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_blue_400 from '@patternfly/react-tokens/dist/esm/chart_color_blue_400';
import useDuration from '@virtualmachines/details/tabs/metrics/hooks/useDuration';
import ComponentReady from '../ComponentReady/ComponentReady';
import useResponsiveCharts from '../hooks/useResponsiveCharts';
import { getUtilizationQueries } from '../utils/queries';
import { MILLISECONDS_MULTIPLIER, queriesToLink, tickFormat, TICKS_COUNT } from '../utils/utils';
var NetworkThresholdChart = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var vmi = _a.vmi;
    var _k = useDuration(), currentTime = _k.currentTime, duration = _k.duration, timespan = _k.timespan;
    var queries = React.useMemo(function () { return getUtilizationQueries({ duration: duration, obj: vmi }); }, [vmi, duration]);
    var _l = useResponsiveCharts(), height = _l.height, ref = _l.ref, width = _l.width;
    var networkIn = usePrometheusPoll({
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.QUERY_RANGE,
        endTime: currentTime,
        namespace: (_b = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
        query: queries === null || queries === void 0 ? void 0 : queries.NETWORK_IN_USAGE,
        timespan: timespan,
    })[0];
    var networkOut = usePrometheusPoll({
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.QUERY_RANGE,
        endTime: currentTime,
        namespace: (_c = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _c === void 0 ? void 0 : _c.namespace,
        query: queries === null || queries === void 0 ? void 0 : queries.NETWORK_OUT_USAGE,
        timespan: timespan,
    })[0];
    var networkInData = (_f = (_e = (_d = networkIn === null || networkIn === void 0 ? void 0 : networkIn.data) === null || _d === void 0 ? void 0 : _d.result) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.values;
    var networkOutData = (_j = (_h = (_g = networkOut === null || networkOut === void 0 ? void 0 : networkOut.data) === null || _g === void 0 ? void 0 : _g.result) === null || _h === void 0 ? void 0 : _h[0]) === null || _j === void 0 ? void 0 : _j.values;
    var chartDataIn = networkInData === null || networkInData === void 0 ? void 0 : networkInData.map(function (_a) {
        var x = _a[0], y = _a[1];
        return { name: 'Network In', x: new Date(x * MILLISECONDS_MULTIPLIER), y: Number(y) };
    });
    var chartDataOut = networkOutData === null || networkOutData === void 0 ? void 0 : networkOutData.map(function (_a) {
        var x = _a[0], y = _a[1];
        return { name: 'Network Out', x: new Date(x * MILLISECONDS_MULTIPLIER), y: Number(y) };
    });
    var isReady = !isEmpty(chartDataOut) || !isEmpty(chartDataIn);
    return (React.createElement(ComponentReady, { isReady: isReady },
        React.createElement("div", { className: "util-threshold-chart", ref: ref },
            React.createElement(Link, { to: queriesToLink([queries === null || queries === void 0 ? void 0 : queries.NETWORK_IN_USAGE, queries === null || queries === void 0 ? void 0 : queries.NETWORK_OUT_USAGE]) },
                React.createElement(Chart, { containerComponent: React.createElement(ChartVoronoiContainer, { labels: function (_a) {
                            var datum = _a.datum;
                            return "".concat(datum === null || datum === void 0 ? void 0 : datum.name, ": ").concat(xbytes(datum === null || datum === void 0 ? void 0 : datum.y, { fixed: 2, iec: true }));
                        }, constrainToVisibleArea: true }), domain: {
                        x: [currentTime - timespan, currentTime],
                    }, height: height, padding: 35, scale: { x: 'time', y: 'linear' }, width: width },
                    React.createElement(ChartAxis, { style: {
                            tickLabels: { padding: 2 },
                            ticks: { stroke: 'transparent' },
                        }, axisComponent: React.createElement(React.Fragment, null), tickCount: TICKS_COUNT, tickFormat: tickFormat(duration, currentTime) }),
                    React.createElement(ChartGroup, null,
                        React.createElement(ChartArea, { style: {
                                data: {
                                    stroke: chart_color_blue_300.value,
                                },
                            }, data: chartDataOut }),
                        React.createElement(ChartArea, { style: {
                                data: {
                                    stroke: chart_color_blue_400.value,
                                },
                            }, data: chartDataIn })))))));
};
export default NetworkThresholdChart;
//# sourceMappingURL=NetworkThresholdChart.js.map