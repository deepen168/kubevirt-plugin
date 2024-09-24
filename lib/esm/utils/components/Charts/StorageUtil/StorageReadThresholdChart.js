import React from 'react';
import xbytes from 'xbytes';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { PrometheusEndpoint, usePrometheusPoll } from '@openshift-console/dynamic-plugin-sdk';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartVoronoiContainer, } from '@patternfly/react-charts';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import useDuration from '@virtualmachines/details/tabs/metrics/hooks/useDuration';
import ComponentReady from '../ComponentReady/ComponentReady';
import useResponsiveCharts from '../hooks/useResponsiveCharts';
import { getUtilizationQueries } from '../utils/queries';
import { MILLISECONDS_MULTIPLIER, tickFormat, TICKS_COUNT } from '../utils/utils';
var GIB_IN_BYTES = 1024;
var StorageReadThresholdChart = function (_a) {
    var _b, _c, _d, _e;
    var vmi = _a.vmi;
    var _f = useDuration(), currentTime = _f.currentTime, duration = _f.duration, timespan = _f.timespan;
    var queries = React.useMemo(function () { return getUtilizationQueries({ duration: duration, obj: vmi }); }, [vmi, duration]);
    var _g = useResponsiveCharts(), height = _g.height, ref = _g.ref, width = _g.width;
    var data = usePrometheusPoll({
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.QUERY_RANGE,
        endTime: currentTime,
        namespace: (_b = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
        query: queries === null || queries === void 0 ? void 0 : queries.FILESYSTEM_READ_USAGE,
        timespan: timespan,
    })[0];
    var storageWriteData = (_e = (_d = (_c = data === null || data === void 0 ? void 0 : data.data) === null || _c === void 0 ? void 0 : _c.result) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.values;
    var chartData = storageWriteData === null || storageWriteData === void 0 ? void 0 : storageWriteData.map(function (_a) {
        var x = _a[0], y = _a[1];
        return { x: new Date(x * MILLISECONDS_MULTIPLIER), y: Number(y) / GIB_IN_BYTES };
    });
    return (React.createElement(ComponentReady, { isReady: !isEmpty(chartData) },
        React.createElement("div", { className: "util-threshold-chart", ref: ref },
            React.createElement(Chart, { containerComponent: React.createElement(ChartVoronoiContainer, { labels: function (_a) {
                        var datum = _a.datum;
                        return "Data read: ".concat(xbytes(datum === null || datum === void 0 ? void 0 : datum.y, { fixed: 2, iec: true }));
                    }, constrainToVisibleArea: true }), domain: {
                    x: [currentTime - timespan, currentTime],
                }, height: height, padding: 35, scale: { x: 'time', y: 'linear' }, width: width },
                React.createElement(ChartAxis, { style: {
                        ticks: { stroke: 'transparent' },
                    }, axisComponent: React.createElement(React.Fragment, null), tickCount: TICKS_COUNT, tickFormat: tickFormat(duration, currentTime) }),
                React.createElement(ChartGroup, null,
                    React.createElement(ChartArea, { style: {
                            data: {
                                stroke: chart_color_blue_300.value,
                            },
                        }, data: chartData }))))));
};
export default StorageReadThresholdChart;
//# sourceMappingURL=StorageReadThresholdChart.js.map