import { useMemo } from 'react';
import { getPrometheusData } from '@kubevirt-utils/components/Charts/utils/utils';
import DurationOption from '@kubevirt-utils/components/DurationOption/DurationOption';
import { ALL_NAMESPACES_SESSION_KEY } from '@kubevirt-utils/hooks/constants';
import { PrometheusEndpoint, usePrometheusPoll } from '@openshift-console/dynamic-plugin-sdk';
import { useActiveNamespace } from '@openshift-console/dynamic-plugin-sdk';
import { getMetricQuery } from '../metricQueries';
import { findUnit, formatLargestValue, getFormattedData, getLargestValue, getNumberOfTicks, } from './utils';
var useMetricChartData = function (metric) {
    var _a, _b;
    var activeNamespace = useActiveNamespace()[0];
    var currentTime = useMemo(function () { return Date.now(); }, []);
    var timespan = DurationOption.getMilliseconds(DurationOption.ONE_WEEK.toString());
    var queryData = usePrometheusPoll({
        endpoint: PrometheusEndpoint.QUERY_RANGE,
        endTime: currentTime,
        namespace: activeNamespace === ALL_NAMESPACES_SESSION_KEY ? null : activeNamespace,
        query: getMetricQuery(metric, activeNamespace),
        timespan: timespan,
    })[0];
    var rawData = getPrometheusData(queryData);
    var largestRawValue = getLargestValue(rawData);
    var unit = findUnit(metric, largestRawValue);
    var formattedData = getFormattedData(rawData, metric, unit);
    var largestValue = formatLargestValue(metric, largestRawValue, unit);
    var numberOfTicks = getNumberOfTicks(formattedData);
    var domain = {
        x: [(_a = formattedData === null || formattedData === void 0 ? void 0 : formattedData[0]) === null || _a === void 0 ? void 0 : _a.x, (_b = formattedData === null || formattedData === void 0 ? void 0 : formattedData[(formattedData === null || formattedData === void 0 ? void 0 : formattedData.length) - 1]) === null || _b === void 0 ? void 0 : _b.x],
        y: [0, largestValue],
    };
    return {
        chartData: formattedData,
        domain: domain,
        isReady: (formattedData === null || formattedData === void 0 ? void 0 : formattedData.length) > 1,
        largestValue: largestValue,
        numberOfTicks: numberOfTicks === null || numberOfTicks === void 0 ? void 0 : numberOfTicks.length,
        unit: unit,
    };
};
export default useMetricChartData;
//# sourceMappingURL=useMetricChartData.js.map