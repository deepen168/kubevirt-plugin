import * as React from 'react';
// 12 works well because it divides evenly for 2, 3, and 4 column layouts
var skeletonTiles = Array.from({ length: 12 }, function (_, k) { return (React.createElement("div", { className: "skeleton-catalog--tile", key: k })); });
export var skeletonCatalog = (React.createElement("div", { className: "loading-skeleton--catalog" },
    React.createElement("div", { className: "skeleton-catalog--list" }),
    React.createElement("div", { className: "skeleton-catalog--grid" }, skeletonTiles)));
//# sourceMappingURL=TemplatesCatalogSkeleton.js.map