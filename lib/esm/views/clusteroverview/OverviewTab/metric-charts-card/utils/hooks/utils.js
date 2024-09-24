import { abbreviateNumber } from 'js-abbreviation-number';
import { MILLISECONDS_MULTIPLIER } from '@kubevirt-utils/components/Charts/utils/utils';
import { dateFormatterNoYear } from '@kubevirt-utils/components/Timestamp/utils/datetime';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { humanizeBinaryBytes } from '../../../../../../utils/utils/humanize';
import { getLabelUnit, hasUnit, labeledTickIndexes } from '../utils';
import { SATURDAY, SUNDAY } from './constants';
export var getDay = function (point) { var _a; return (_a = point === null || point === void 0 ? void 0 : point.x) === null || _a === void 0 ? void 0 : _a.getDay(); };
export var getValue = function (point) { return point === null || point === void 0 ? void 0 : point[1]; };
export var getLargestValue = function (data) {
    return data === null || data === void 0 ? void 0 : data.reduce(function (acc, point) {
        var currValue = Number(getValue(point));
        acc = currValue > acc ? currValue : acc;
        return acc;
    }, -1);
};
export var findUnit = function (metric, largestValue) { var _a; return hasUnit(metric) ? (_a = humanizeBinaryBytes(largestValue)) === null || _a === void 0 ? void 0 : _a.unit : null; };
export var getHumanizedValue = function (metric, value, unit) { var _a; return hasUnit(metric) ? (_a = humanizeBinaryBytes(value, null, unit)) === null || _a === void 0 ? void 0 : _a.value : value; };
export var formatLargestValue = function (metric, largestValue, unit) {
    return hasUnit(metric) ? getHumanizedValue(metric, largestValue, unit) : largestValue;
};
export var getFormattedData = function (rawData, metric, unit) {
    return rawData === null || rawData === void 0 ? void 0 : rawData.map(function (_a) {
        var x = _a[0], y = _a[1];
        var humanizedValue = getHumanizedValue(metric, Number(y), unit);
        return { x: new Date(x * MILLISECONDS_MULTIPLIER), y: humanizedValue };
    });
};
export var getNumberOfTicks = function (formattedData) {
    return formattedData === null || formattedData === void 0 ? void 0 : formattedData.reduce(function (acc, point, idx) {
        var currPointDay = getDay(point);
        if (currPointDay !== getDay(formattedData === null || formattedData === void 0 ? void 0 : formattedData[idx - 1])) {
            acc.push(currPointDay);
        }
        return acc;
    }, []);
};
export var getPrevDay = function (pointDay) {
    return pointDay === SUNDAY ? SATURDAY : pointDay - 1;
};
export var isSingleDayData = function (chartData) {
    return getDay(chartData === null || chartData === void 0 ? void 0 : chartData[0]) === getDay(chartData === null || chartData === void 0 ? void 0 : chartData[(chartData === null || chartData === void 0 ? void 0 : chartData.length) - 1]);
};
// Get the index for the start and end of each day in the data
export var getDayBoundaryIndexes = function (chartData) {
    var _a;
    return chartData.reduce(function (acc, point, idx) {
        var pointDay = getDay(point);
        if (!acc.hasOwnProperty(pointDay)) {
            // Add current day to acc if it hasn't been encountered yet
            acc[pointDay] = { end: -1, start: idx };
            // Set the end value for the previous day to the previous index
            if (acc[getPrevDay(pointDay)]) {
                acc[getPrevDay(pointDay)]['end'] = idx - 1;
            }
        }
        if (idx === chartData.length - 1) {
            // Set the end value for the current day to the
            // current index if it's the last index
            acc[pointDay]['end'] = idx;
        }
        return acc;
    }, (_a = {}, _a[getDay(chartData[0])] = { end: -1, start: 0 }, _a));
};
// Get the middle date for each day's data
export var getDayMidpoints = function (chartData) {
    return Object.values(getDayBoundaryIndexes(chartData)).reduce(function (acc, day) {
        var _a;
        acc.push((_a = chartData[Math.floor((day.end + day.start) / 2)]) === null || _a === void 0 ? void 0 : _a.x);
        return acc;
    }, []);
};
export var xTickFormat = function (tick, index, allTicks) {
    var tickIndexesToLabel = labeledTickIndexes[allTicks.length];
    if (!tickIndexesToLabel.includes(index)) {
        return '';
    }
    if (tick.getDay() === new Date().getDay()) {
        return t('Today');
    }
    return dateFormatterNoYear.format(tick);
};
export var yTickFormat = function (metric, unit) { return function (tick, index, allTicks) {
    if (tick === 0 || index === (allTicks === null || allTicks === void 0 ? void 0 : allTicks.length) - 1) {
        return "".concat(abbreviateNumber(tick, 1), " ").concat(getLabelUnit(metric, unit));
    }
    return null;
}; };
//# sourceMappingURL=utils.js.map