import xbytes from 'xbytes';
import DurationOption from '@kubevirt-utils/components/DurationOption/DurationOption';
import { dateFormatterNoYear, timeFormatter, } from '@kubevirt-utils/components/Timestamp/utils/datetime';
import { ALL_NAMESPACES_SESSION_KEY } from '@kubevirt-utils/hooks/constants';
import { MILLISECONDS_TO_SECONDS_MULTIPLIER } from '@kubevirt-utils/resources/vm/utils/constants';
import { multipliers } from '@kubevirt-utils/utils/units';
import { GRID_LINES } from './constants';
export var mapPrometheusValues = function (prometheusValues, name) {
    return (prometheusValues || []).map(function (_a, idx) {
        var x = _a[0], y = _a[1];
        return {
            idx: idx,
            name: name,
            x: new Date(x * MILLISECONDS_TO_SECONDS_MULTIPLIER),
            y: Number(y),
        };
    });
};
export var formatTimestamp = function (timespan, time, dropLine) {
    if (dropLine === void 0) { dropLine = false; }
    if (timespan > DurationOption.getMilliseconds('1d')) {
        return "".concat(dateFormatterNoYear.format(time)).concat(dropLine ? '\n' : ' ').concat(timeFormatter.format(time));
    }
    return timeFormatter.format(time);
};
export var getLabel = function (timespan, chartData, formatIEC) {
    if (formatIEC === void 0) { formatIEC = false; }
    return function (prop) {
        var datum = prop === null || prop === void 0 ? void 0 : prop.datum;
        var data = chartData === null || chartData === void 0 ? void 0 : chartData[datum === null || datum === void 0 ? void 0 : datum.idx];
        var dataYValue = formatIEC
            ? xbytes(data === null || data === void 0 ? void 0 : data.y, {
                fixed: 2,
                iec: true,
                prefixIndex: 3,
            })
            : data === null || data === void 0 ? void 0 : data.y;
        var timestamp = formatTimestamp(timespan, datum === null || datum === void 0 ? void 0 : datum.x);
        return "".concat(timestamp, "\n").concat(dataYValue, " ").concat(data === null || data === void 0 ? void 0 : data.name);
    };
};
export var getTickValuesAxisY = function (maxValue, normalize) {
    if (normalize === void 0) { normalize = multipliers.Gi; }
    var tickValues = [];
    var normalizedMaxValue = Math.ceil(maxValue / normalize);
    var gridLineSpacer = Math.ceil(normalizedMaxValue / GRID_LINES) || 1;
    for (var i = 0; i <= gridLineSpacer * GRID_LINES; i += gridLineSpacer) {
        tickValues.push(i * normalize);
    }
    return tickValues;
};
export var getTimeTickValues = function (domainX) {
    var difference = (domainX[1] - domainX[0]) / GRID_LINES;
    return [domainX[0], domainX[0] + difference, domainX[1] - difference, domainX[1]];
};
export var getDomainY = function (maxValue, normalize) {
    if (normalize === void 0) { normalize = multipliers.Gi; }
    var tickValues = getTickValuesAxisY(maxValue, normalize);
    return [tickValues === null || tickValues === void 0 ? void 0 : tickValues[0], tickValues === null || tickValues === void 0 ? void 0 : tickValues[GRID_LINES]];
};
export var getBaseQuery = function (duration, activeNamespace) {
    var namespacedQuery = activeNamespace !== ALL_NAMESPACES_SESSION_KEY;
    return "(sum_over_time(kubevirt_vmi_migration_data_processed_bytes".concat(namespacedQuery ? "{namespace='".concat(activeNamespace, "'}") : '', "[").concat(duration, "]))").concat(namespacedQuery ? ' BY (namespace)' : '');
};
//# sourceMappingURL=utils.js.map