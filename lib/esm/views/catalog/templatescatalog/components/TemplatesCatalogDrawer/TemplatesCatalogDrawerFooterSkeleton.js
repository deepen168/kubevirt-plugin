import * as React from 'react';
import { Skeleton, Stack, StackItem } from '@patternfly/react-core';
export var TemplatesCatalogDrawerFooterSkeleton = React.memo(function () { return (React.createElement(Stack, { className: "template-catalog-drawer-info", hasGutter: true },
    React.createElement(StackItem, { className: "template-catalog-drawer-footer-section" },
        React.createElement(Stack, { hasGutter: true },
            React.createElement(StackItem, null,
                React.createElement(Skeleton, { height: "30px", width: "40%" })),
            React.createElement(StackItem, null,
                React.createElement(Skeleton, { height: "20px", width: "60%" })),
            React.createElement(StackItem, null),
            React.createElement(StackItem, null,
                React.createElement(Skeleton, { height: "30px", width: "30%" })))))); });
TemplatesCatalogDrawerFooterSkeleton.displayName = 'TemplatesCatalogDrawerFooterSkeleton';
//# sourceMappingURL=TemplatesCatalogDrawerFooterSkeleton.js.map