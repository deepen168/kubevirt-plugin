import React, { useMemo } from 'react';
import { Link } from 'react-router-dom-v5-compat';
import xbytes from 'xbytes';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { PrometheusEndpoint, usePrometheusPoll } from '@openshift-console/dynamic-plugin-sdk';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartVoronoiContainer, } from '@patternfly/react-charts';
import chart_color_black_200 from '@patternfly/react-tokens/dist/esm/chart_color_black_200';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_green_300 from '@patternfly/react-tokens/dist/esm/chart_color_green_300';
import chart_color_orange_300 from '@patternfly/react-tokens/dist/esm/chart_color_orange_300';
import useDuration from '@virtualmachines/details/tabs/metrics/hooks/useDuration';
import ComponentReady from '../ComponentReady/ComponentReady';
import useResponsiveCharts from '../hooks/useResponsiveCharts';
import { getUtilizationQueries } from '../utils/queries';
import { findMigrationMaxYValue, formatMemoryYTick, getPrometheusData, MILLISECONDS_MULTIPLIER, queriesToLink, tickFormat, TICKS_COUNT, } from '../utils/utils';
var MigrationThresholdChart = function (_a) {
    var _b, _c, _d;
    var vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var _e = useDuration(), currentTime = _e.currentTime, duration = _e.duration, timespan = _e.timespan;
    var queries = useMemo(function () { return getUtilizationQueries({ duration: duration, obj: vmi }); }, [vmi, duration]);
    var _f = useResponsiveCharts(), height = _f.height, ref = _f.ref, width = _f.width;
    var migrationDataProcessed = usePrometheusPoll({
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.QUERY_RANGE,
        endTime: currentTime,
        namespace: (_b = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
        query: queries === null || queries === void 0 ? void 0 : queries.MIGRATION_DATA_PROCESSED,
        timespan: timespan,
    })[0];
    var migrationDataRemaining = usePrometheusPoll({
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.QUERY_RANGE,
        endTime: currentTime,
        namespace: (_c = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _c === void 0 ? void 0 : _c.namespace,
        query: queries === null || queries === void 0 ? void 0 : queries.MIGRATION_DATA_REMAINING,
        timespan: timespan,
    })[0];
    var migrationDataDirtyRate = usePrometheusPoll({
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.QUERY_RANGE,
        endTime: currentTime,
        namespace: (_d = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _d === void 0 ? void 0 : _d.namespace,
        query: queries === null || queries === void 0 ? void 0 : queries.MIGRATION_MEMORY_DIRTY_RATE,
        timespan: timespan,
    })[0];
    var dataProcessed = useMemo(function () { return getPrometheusData(migrationDataProcessed); }, [migrationDataProcessed]);
    var dataRemaining = useMemo(function () { return getPrometheusData(migrationDataRemaining); }, [migrationDataRemaining]);
    var dataDirtyRate = useMemo(function () { return getPrometheusData(migrationDataDirtyRate); }, [migrationDataDirtyRate]);
    var chartDataProcessed = dataProcessed === null || dataProcessed === void 0 ? void 0 : dataProcessed.map(function (_a) {
        var x = _a[0], y = _a[1];
        return { name: t('Data Processed'), x: new Date(x * MILLISECONDS_MULTIPLIER), y: Number(y) };
    });
    var chartDataRemaining = dataRemaining === null || dataRemaining === void 0 ? void 0 : dataRemaining.map(function (_a) {
        var x = _a[0], y = _a[1];
        return { name: t('Data Remaining'), x: new Date(x * MILLISECONDS_MULTIPLIER), y: Number(y) };
    });
    var chartDataDirtyRate = dataDirtyRate === null || dataDirtyRate === void 0 ? void 0 : dataDirtyRate.map(function (_a) {
        var x = _a[0], y = _a[1];
        return { name: t('Memory Dirty Rate'), x: new Date(x * MILLISECONDS_MULTIPLIER), y: Number(y) };
    });
    var isReady = !isEmpty(chartDataProcessed) || !isEmpty(chartDataRemaining) || !isEmpty(chartDataDirtyRate);
    var yMax = findMigrationMaxYValue(chartDataProcessed, chartDataRemaining, chartDataDirtyRate);
    var linkToMetrics = queriesToLink([
        queries === null || queries === void 0 ? void 0 : queries.MIGRATION_DATA_REMAINING,
        queries.MIGRATION_DATA_PROCESSED,
        queries.MIGRATION_MEMORY_DIRTY_RATE,
    ]);
    return (React.createElement(ComponentReady, { isReady: isReady, linkToMetrics: linkToMetrics },
        React.createElement("div", { className: "util-threshold-chart", ref: ref },
            React.createElement(Link, { to: linkToMetrics },
                React.createElement(Chart, { containerComponent: React.createElement(ChartVoronoiContainer, { labels: function (_a) {
                            var datum = _a.datum;
                            return "".concat(datum === null || datum === void 0 ? void 0 : datum.name, ": ").concat(xbytes(datum === null || datum === void 0 ? void 0 : datum.y, { fixed: 2, iec: true }));
                        }, constrainToVisibleArea: true }), domain: {
                        x: [currentTime - timespan, currentTime],
                        y: [0, yMax],
                    }, legendData: [
                        { name: t('Data Processed') },
                        { name: t('Data Remaining'), symbol: { fill: chart_color_green_300.value } },
                        { name: t('Memory Dirty Rate'), symbol: { fill: chart_color_orange_300.value } },
                    ], height: height, legendOrientation: "horizontal", legendPosition: "bottom", padding: { bottom: 55, left: 35, right: 35, top: 25 }, scale: { x: 'time', y: 'linear' }, width: width },
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
                            }, data: chartDataProcessed }),
                        React.createElement(ChartArea, { style: {
                                data: {
                                    stroke: chart_color_green_300.value,
                                },
                            }, data: chartDataRemaining }),
                        React.createElement(ChartArea, { style: {
                                data: {
                                    stroke: chart_color_orange_300 === null || chart_color_orange_300 === void 0 ? void 0 : chart_color_orange_300.value,
                                },
                            }, data: chartDataDirtyRate })))))));
};
export default MigrationThresholdChart;
//# sourceMappingURL=MigrationThresholdChart.js.map