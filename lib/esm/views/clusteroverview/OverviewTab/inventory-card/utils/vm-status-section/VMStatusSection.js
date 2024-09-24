import * as React from 'react';
import classNames from 'classnames';
import { Flex, FlexItem, Grid, GridItem } from '@patternfly/react-core';
import EmptyStateNoVMs from '../../../vms-per-resource-card/EmptyStateNoVMs';
import { getVMStatusCounts } from '../utils';
import VMStatusInventoryItem from './VMStatusInventoryItem';
import VMStatusSectionSkeleton from './VMStatusSectionSkeleton';
import './VMStatusSection.scss';
var VMStatusSection = function (_a) {
    var vms = _a.vms, vmsLoaded = _a.vmsLoaded;
    var statusCounts = getVMStatusCounts(vms);
    var statusItems = [];
    for (var _i = 0, _b = Object.entries(statusCounts); _i < _b.length; _i++) {
        var _c = _b[_i], key = _c[0], value = _c[1];
        var status_1 = key;
        var count = value;
        statusItems.push(React.createElement(FlexItem, { key: key },
            React.createElement(VMStatusInventoryItem, { count: count, status: status_1 })));
    }
    var numStatuses = statusItems.length;
    var leftColumnStatusItems = statusItems.splice(Math.floor(statusItems.length / 2));
    if (!vmsLoaded) {
        return React.createElement(VMStatusSectionSkeleton, null);
    }
    if (numStatuses === 0) {
        return React.createElement(EmptyStateNoVMs, null);
    }
    else {
        return (React.createElement(Grid, { className: "kv-inventory-card__statuses-grid", hasGutter: true },
            React.createElement(GridItem, { className: classNames({
                    'kv-inventory-card__statuses-grid--left-col': numStatuses >= 2,
                }), span: 6 },
                React.createElement(Flex, { direction: { default: 'column' } }, leftColumnStatusItems)),
            React.createElement(GridItem, { span: 6 },
                React.createElement(Flex, { direction: { default: 'column' } }, statusItems))));
    }
};
export default VMStatusSection;
//# sourceMappingURL=VMStatusSection.js.map