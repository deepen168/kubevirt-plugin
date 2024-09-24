import React from 'react';
import { useLocation } from 'react-router-dom-v5-compat';
import classNames from 'classnames';
import './search-item.scss';
var SearchItem = function (_a) {
    var _b;
    var children = _a.children, id = _a.id;
    var location = useLocation();
    var isColored = (_b = location === null || location === void 0 ? void 0 : location.hash) === null || _b === void 0 ? void 0 : _b.toLowerCase().endsWith(id.toLowerCase());
    return React.createElement("div", { className: classNames({ isColored: isColored }) }, children);
};
export default SearchItem;
//# sourceMappingURL=SearchItem.js.map