import React from 'react';
import { Grid, GridItem } from '@patternfly/react-core';
import { METRICS } from '../utils/constants';
import ChartCard from './ChartCard';
import './ChartsCard.scss';
var ChartsCard = function () {
    var _a;
    return (React.createElement("div", { className: "metric-charts-card" },
        React.createElement(Grid, { className: "metric-charts-card__grid", hasGutter: true }, (_a = Object.values(METRICS)) === null || _a === void 0 ? void 0 : _a.map(function (metric) { return (React.createElement(GridItem, { className: "metric-charts-card__grid-item", key: metric },
            React.createElement(ChartCard, { metric: metric }))); }))));
};
export default ChartsCard;
//# sourceMappingURL=ChartsCard.js.map