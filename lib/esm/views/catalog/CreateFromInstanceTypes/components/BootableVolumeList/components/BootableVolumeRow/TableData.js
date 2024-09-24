import React from 'react';
import { Td } from '@patternfly/react-table';
var TableData = function (_a) {
    var activeColumnIDs = _a.activeColumnIDs, children = _a.children, favorites = _a.favorites, id = _a.id, _b = _a.width, width = _b === void 0 ? 10 : _b;
    return (activeColumnIDs === null || activeColumnIDs === void 0 ? void 0 : activeColumnIDs.some(function (activeID) { return activeID === id; })) ? (React.createElement(Td, { favorites: favorites, id: id, width: width }, children)) : null;
};
export default TableData;
//# sourceMappingURL=TableData.js.map