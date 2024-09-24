import React, { useMemo } from 'react';
import { Link } from 'react-router-dom-v5-compat';
import xbytes from 'xbytes';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { PrometheusEndpoint, usePrometheusPoll } from '@openshift-console/dynamic-plugin-sdk';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartVoronoiContainer, } from '@patternfly/react-charts';
import chart_color_black_200 from '@patternfly/react-tokens/dist/esm/chart_color_black_200';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import useDuration from '@virtualmachines/details/tabs/metrics/hooks/useDuration';
import ComponentReady from '../ComponentReady/ComponentReady';
import useResponsiveCharts from '../hooks/useResponsiveCharts';
import { getUtilizationQueries } from '../utils/queries';
import { findMaxYValue, formatMemoryYTick, getPrometheusData, MILLISECONDS_MULTIPLIER, queriesToLink, tickFormat, TICKS_COUNT, } from '../utils/utils';
var MigrationThresholdChartDiskRate = function (_a) {
    var _b;
    var vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var _c = useDuration(), currentTime = _c.currentTime, duration = _c.duration, timespan = _c.timespan;
    var queries = useMemo(function () { return getUtilizationQueries({ duration: duration, obj: vmi }); }, [vmi, duration]);
    var _d = useResponsiveCharts(), height = _d.height, ref = _d.ref, width = _d.width;
    var diskRate = usePrometheusPoll({
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.QUERY_RANGE,
        endTime: currentTime,
        namespace: (_b = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
        query: queries === null || queries === void 0 ? void 0 : queries.MIGRATION_DISK_TRANSFER_RATE,
        timespan: timespan,
    })[0];
    var dataProcessed = useMemo(function () { return getPrometheusData(diskRate); }, [diskRate]);
    var chartDataProcessed = dataProcessed === null || dataProcessed === void 0 ? void 0 : dataProcessed.map(function (_a) {
        var x = _a[0], y = _a[1];
        return { name: t('Data Processed'), x: new Date(x * MILLISECONDS_MULTIPLIER), y: Number(y) };
    });
    var isReady = !isEmpty(chartDataProcessed);
    var yMax = findMaxYValue(chartDataProcessed);
    var linkToMetrics = queriesToLink(queries.MIGRATION_DISK_TRANSFER_RATE);
    return (React.createElement(ComponentReady, { isReady: isReady, linkToMetrics: linkToMetrics },
        React.createElement("div", { className: "util-threshold-chart", ref: ref },
            React.createElement(Link, { to: linkToMetrics },
                React.createElement(Chart, { containerComponent: React.createElement(ChartVoronoiContainer, { labels: function (_a) {
                            var datum = _a.datum;
                            return "".concat(datum === null || datum === void 0 ? void 0 : datum.name, ": ").concat(xbytes(datum === null || datum === void 0 ? void 0 : datum.y, { fixed: 2, iec: true }));
                        }, constrainToVisibleArea: true }), domain: {
                        x: [currentTime - timespan, currentTime],
                        y: [0, yMax],
                    }, height: height, padding: 35, scale: { x: 'time', y: 'linear' }, width: width },
                    React.createElement(ChartAxis, { style: {
                            grid: {
                                stroke: chart_color_black_200.value,
                            },
                        }, dependentAxis: true, tickFormat: formatMemoryYTick(yMax, 2), tickValues: [0, yMax] }),
                    React.createElement(ChartAxis, { style: {
                            tickLabels: { padding: 2 },
                            ticks: { stroke: 'transparent' },
                        }, axisComponent: React.createElement(React.Fragment, null), tickCount: TICKS_COUNT, tickFormat: tickFormat(duration, currentTime) }),
                    React.createElement(ChartGroup, null,
                        React.createElement(ChartArea, { style: {
                                data: {
                                    stroke: chart_color_blue_300.value,
                                },
                            }, data: chartDataProcessed })))))));
};
export default MigrationThresholdChartDiskRate;
//# sourceMappingURL=MigrationThresholdChartDiskRate.js.map