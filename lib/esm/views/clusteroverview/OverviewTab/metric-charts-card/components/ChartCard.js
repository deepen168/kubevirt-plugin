import React from 'react';
import MutedTextSpan from '@kubevirt-utils/components/MutedTextSpan/MutedTextSpan';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Bullseye, Card, Grid, GridItem } from '@patternfly/react-core';
import useMetricChartData from '../utils/hooks/useMetricChartData';
import { getCurrentValue } from '../utils/utils';
import MetricChart from './MetricChart';
import './ChartCard.scss';
var ChartCard = function (_a) {
    var metric = _a.metric;
    var t = useKubevirtTranslation().t;
    var metricChartData = useMetricChartData(metric);
    var chartData = metricChartData.chartData, isReady = metricChartData.isReady, numberOfTicks = metricChartData.numberOfTicks, unit = metricChartData.unit;
    var currentValue = getCurrentValue(chartData);
    var chartLabel = t("Last {{numOfDays}} days' trend", { numOfDays: numberOfTicks });
    var metricLabel = unit && isReady ? "".concat(metric, " (").concat(unit, ")") : metric;
    var metricValue = currentValue && !isNaN(currentValue) ? currentValue === null || currentValue === void 0 ? void 0 : currentValue.toLocaleString() : 0;
    return (React.createElement(Card, { className: "metric-chart-card" },
        React.createElement(Grid, { className: "metric-chart-card__content" },
            React.createElement(GridItem, { className: "metric-chart-card__header" },
                React.createElement("div", { className: "metric-chart-card__header--current-value" },
                    React.createElement("span", { className: "metric-chart-card__header--value" }, metricValue)),
                React.createElement("div", { className: "metric-chart-card__header--metric" }, metricLabel)),
            React.createElement(GridItem, { className: "metric-chart-card__chart" }, isReady ? (React.createElement("span", null,
                React.createElement("div", { className: "metric-chart-card__chart--label" }, chartLabel),
                React.createElement("div", { className: "metric-chart-card__chart--chart" },
                    React.createElement(MetricChart, { metric: metric, metricChartData: metricChartData })))) : (React.createElement(Bullseye, null,
                React.createElement(MutedTextSpan, { text: isEmpty(chartData)
                        ? t('No data available')
                        : t('VMs in this namespace are new, therefore not enough data is collected to display a graph.') })))))));
};
export default ChartCard;
//# sourceMappingURL=ChartCard.js.map