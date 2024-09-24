import React from 'react';
import useResponsiveCharts from '@kubevirt-utils/components/Charts/hooks/useResponsiveCharts';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ChartAxis, ChartContainer } from '@patternfly/react-charts';
import { formatTimestamp, getTimeTickValues } from '../utils';
var MigrationsTimeAxis = function (_a) {
    var domainX = _a.domainX, timespan = _a.timespan;
    var t = useKubevirtTranslation().t;
    var width = useResponsiveCharts().width;
    return (React.createElement("div", { className: "co-utilization-card__item co-utilization-card__item-header" },
        React.createElement("div", { className: "co-utilization-card__item-section co-u-hidden co-u-visible-on-xl" },
            React.createElement("span", { className: "co-utilization-card__item-text", "data-test": "utilization-card-item-text" }, t('Resource'))),
        React.createElement("div", { className: "co-utilization-card__item-chart co-utilization-card__item-chart--times" },
            React.createElement(ChartAxis, { axisComponent: React.createElement(React.Fragment, null), containerComponent: React.createElement(ChartContainer, { title: t('Time axis') }), domain: { x: domainX }, fixLabelOverlap: true, height: 15, orientation: "top", padding: { bottom: 0, left: 70, right: 0, top: 30 }, scale: { x: 'time' }, tickFormat: function (time) { return formatTimestamp(timespan, time, true); }, tickValues: getTimeTickValues(domainX), width: width }))));
};
export default MigrationsTimeAxis;
//# sourceMappingURL=MigrationsTimeAxis.js.map