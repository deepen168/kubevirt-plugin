import React from 'react';
import { Divider, DrilldownMenu, MenuItem } from '@patternfly/react-core';
var DrilldownMenuItem = function (_a) {
    var children = _a.children, Icon = _a.Icon, id = _a.id, label = _a.label;
    return (React.createElement(MenuItem, { drilldownMenu: React.createElement(DrilldownMenu, { id: id },
            React.createElement(MenuItem, { direction: "up", itemId: "".concat(id, "_breadcrumb") }, label),
            React.createElement(Divider, { component: "li" }),
            children), direction: "down", icon: Icon && React.createElement(Icon, null), itemId: id }, label));
};
export default DrilldownMenuItem;
//# sourceMappingURL=DrilldownMenuItem.js.map