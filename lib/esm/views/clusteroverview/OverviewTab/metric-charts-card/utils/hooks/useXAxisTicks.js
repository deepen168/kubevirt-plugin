import { getDayMidpoints, isSingleDayData, xTickFormat } from './utils';
// Ticks should be placed at the center point of each day's data
var useXAxisTicks = function (chartData) {
    var _a;
    if (!chartData) {
        return [null, null];
    }
    var tickValues = isSingleDayData(chartData)
        ? [(_a = chartData === null || chartData === void 0 ? void 0 : chartData[Math.floor((chartData.length - 1) / 2)]) === null || _a === void 0 ? void 0 : _a.x]
        : getDayMidpoints(chartData).sort(function (a, b) { return Number(a) - Number(b); });
    return [tickValues, xTickFormat];
};
export default useXAxisTicks;
//# sourceMappingURL=useXAxisTicks.js.map