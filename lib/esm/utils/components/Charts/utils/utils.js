var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import xbytes from 'xbytes';
import DurationOption from '@kubevirt-utils/components/DurationOption/DurationOption';
import { dateFormatterNoYear, timeFormatter, } from '@kubevirt-utils/components/Timestamp/utils/datetime';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { ALL_NETWORKS } from '@virtualmachines/details/tabs/metrics/utils/constants';
export var SINGLE_VM_DURATION = 'SINGLE_VM_DURATION';
export var TICKS_COUNT = 100;
export var MILLISECONDS_MULTIPLIER = 1000;
export var queriesToLink = function (queries) {
    var queriesArray = Array.isArray(queries) ? queries : [queries];
    return queriesArray === null || queriesArray === void 0 ? void 0 : queriesArray.reduce(function (acc, query, index) { return acc.concat("&query".concat(index, "=").concat(encodeURIComponent(query))); }, '/monitoring/query-browser?');
};
var isMultiDayDuration = function (duration) {
    return [DurationOption.ONE_DAY, DurationOption.ONE_WEEK, DurationOption.TWO_DAYS].includes(DurationOption.fromString(duration));
};
export var tickFormat = function (duration, currentTime) { return function (tick, index, ticks) {
    var isFirst = index === 0;
    var isLast = index === ticks.length - 1;
    if (isLast || isFirst) {
        var timespan = DurationOption === null || DurationOption === void 0 ? void 0 : DurationOption.getMilliseconds(duration);
        var date = isLast ? currentTime : currentTime - timespan;
        var monthDay = dateFormatterNoYear.format(date);
        var time = timeFormatter.format(date);
        return isMultiDayDuration(duration) ? "".concat(monthDay, "\n").concat(time) : time;
    }
    return '';
}; };
export var getPrometheusData = function (response) {
    var _a, _b, _c;
    return (_c = (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.values;
};
export var getPrometheusDataByNic = function (response, nic) {
    var _a, _b, _c, _d;
    if (!((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.result)) {
        return [];
    }
    var singleNic = (_c = (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.result) === null || _c === void 0 ? void 0 : _c.find(function (res) { var _a; return ((_a = res.metric) === null || _a === void 0 ? void 0 : _a.interface) === nic; });
    return singleNic ? [singleNic] : (_d = response === null || response === void 0 ? void 0 : response.data) === null || _d === void 0 ? void 0 : _d.result;
};
export var getPrometheusDataAllNics = function (response) {
    var _a, _b, _c, _d, _e, _f;
    if (!((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.result)) {
        return [];
    }
    return [
        __assign(__assign({}, (_c = (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.result) === null || _c === void 0 ? void 0 : _c[0]), { metric: __assign(__assign({}, (_f = (_e = (_d = response === null || response === void 0 ? void 0 : response.data) === null || _d === void 0 ? void 0 : _d.result) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.metric), { interface: ALL_NETWORKS }) }),
    ];
};
export var findNetworkMaxYValue = function (chartData) {
    var yValues = !isEmpty(chartData) &&
        (chartData === null || chartData === void 0 ? void 0 : chartData.map(function (dataArray) {
            return Math.max.apply(Math, dataArray === null || dataArray === void 0 ? void 0 : dataArray.map(function (data) { return data === null || data === void 0 ? void 0 : data.y; }));
        }));
    var maxY = Math.max.apply(Math, (yValues || []));
    return Number.isInteger(maxY) ? maxY : 0;
};
export var getNetworkTickValues = function (Ymax) {
    var tickValues = Array.from({ length: Ymax + 1 }, function (_, index) {
        if (index === 0)
            return '1 Bps';
        if (index === Math.round(Ymax))
            return "".concat(Math.round(Ymax + 1), " Bps");
        return index.toString() + ' Bps';
    });
    return tickValues;
};
export var formatNetworkYTick = function (tick, index, ticks) {
    var isFirst = index === 0;
    var isLast = index === ticks.length - 1;
    if (isLast || isFirst) {
        return tick;
    }
    return;
};
export var formatMemoryYTick = function (yMax, fixedDigits) { return function (tick) {
    var _a;
    var humanizedValue = xbytes(yMax, { fixed: fixedDigits, iec: true });
    var unit = (_a = humanizedValue === null || humanizedValue === void 0 ? void 0 : humanizedValue.split(' ')) === null || _a === void 0 ? void 0 : _a[1];
    if (tick === 0 && unit)
        return "0 ".concat(unit);
    return humanizedValue || '';
}; };
export var findMaxYValue = function (chartData) {
    var yValues = chartData === null || chartData === void 0 ? void 0 : chartData.map(function (point) { return point === null || point === void 0 ? void 0 : point.y; });
    return yValues ? Math.max.apply(Math, yValues) : 0;
};
export var findMigrationMaxYValue = function (processedData, remainingData, dirtyRateData) {
    var _a;
    var max = (_a = [processedData, remainingData, dirtyRateData]) === null || _a === void 0 ? void 0 : _a.map(function (chartData) {
        return findMaxYValue(chartData);
    });
    return Math.max.apply(Math, max);
};
//# sourceMappingURL=utils.js.map