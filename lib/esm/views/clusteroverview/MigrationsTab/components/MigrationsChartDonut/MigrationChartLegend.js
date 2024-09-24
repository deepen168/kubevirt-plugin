import React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { CardFooter, Grid, GridItem } from '@patternfly/react-core';
import './MigrationChartLegend';
var MigrationChartLegend = function (_a) {
    var legendItems = _a.legendItems, onFilterChange = _a.onFilterChange;
    return (React.createElement(CardFooter, null,
        React.createElement(Grid, null, legendItems === null || legendItems === void 0 ? void 0 : legendItems.map(function (item) {
            var _a = item || {}, status = _a.x, statusCount = _a.y;
            return (React.createElement(GridItem, { key: status, span: 2 },
                React.createElement("i", { className: "fas fa-square" }),
                ' ',
                React.createElement(Link, { onClick: function () {
                        onFilterChange('status', { all: [status], selected: [status] });
                    }, to: "?rowFilter-status=".concat(status) },
                    statusCount,
                    " ",
                    status)));
        }))));
};
export default MigrationChartLegend;
//# sourceMappingURL=MigrationChartLegend.js.map