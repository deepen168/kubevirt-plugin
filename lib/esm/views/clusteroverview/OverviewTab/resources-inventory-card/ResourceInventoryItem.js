import React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import './ResourcesInventoryCard.scss';
var ResourceInventoryItem = function (_a) {
    var label = _a.label, path = _a.path, quantity = _a.quantity;
    return (React.createElement("div", { className: "resources-inventory-card__resource" },
        React.createElement(Link, { to: path },
            React.createElement("div", { className: "resources-inventory-card__quantity" }, quantity)),
        React.createElement("div", { className: "resources-inventory-card__quantity-label" }, label)));
};
export default ResourceInventoryItem;
//# sourceMappingURL=ResourceInventoryItem.js.map