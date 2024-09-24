import { yTickFormat } from './utils';
var useYAxisTicks = function (metricChartData) {
    var largestValue = metricChartData.largestValue;
    // There should be five Y-axis ticks with only 0 and the highest value labeled
    var oneFourthLargestValue = largestValue / 4;
    var tickValues = [0];
    for (var i = 1; i <= 3; i++) {
        tickValues.push(tickValues[tickValues.length - 1] + oneFourthLargestValue);
    }
    tickValues.push(largestValue);
    return [tickValues, yTickFormat];
};
export default useYAxisTicks;
//# sourceMappingURL=useYAxisTicks.js.map