import * as React from 'react';
import { Flex, Grid, GridItem, Skeleton } from '@patternfly/react-core';
import './VMStatusSectionSkeleton.scss';
var VMStatusSectionSkeleton = function () { return (React.createElement(Grid, { className: "kv-inventory-card__statuses-grid kv-inventory-card__statuses-grid--skeleton-box", hasGutter: true },
    React.createElement(GridItem, { className: "kv-inventory-card__statuses-grid--left-col", span: 6 },
        React.createElement(Flex, { direction: { default: 'column' } },
            React.createElement("span", { className: "kv-inventory-card__status-skeleton-container" },
                React.createElement(Skeleton, { width: '200px' })),
            React.createElement("span", { className: "kv-inventory-card__status-skeleton-container" },
                React.createElement(Skeleton, { width: '200px' })),
            React.createElement("span", { className: "kv-inventory-card__status-skeleton-container" },
                React.createElement(Skeleton, { width: '200px' })))),
    React.createElement(GridItem, { span: 6 },
        React.createElement(Flex, { direction: { default: 'column' } },
            React.createElement("span", { className: "kv-inventory-card__status-skeleton-container" },
                React.createElement(Skeleton, { width: '200px' })),
            React.createElement("span", { className: "kv-inventory-card__status-skeleton-container" },
                React.createElement(Skeleton, { width: '200px' })),
            React.createElement("span", { className: "kv-inventory-card__status-skeleton-container" },
                React.createElement(Skeleton, { width: '200px' })))))); };
export default VMStatusSectionSkeleton;
//# sourceMappingURL=VMStatusSectionSkeleton.js.map