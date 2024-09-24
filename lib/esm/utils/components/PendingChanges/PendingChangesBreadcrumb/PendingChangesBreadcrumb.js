import * as React from 'react';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Breadcrumb, BreadcrumbHeading, BreadcrumbItem, ListItem } from '@patternfly/react-core';
var PendingChangesBreadcrumb = function (_a) {
    var _b;
    var pendingChanges = _a.pendingChanges;
    if (isEmpty(pendingChanges)) {
        return null;
    }
    return (React.createElement(ListItem, null,
        React.createElement(Breadcrumb, null,
            React.createElement(BreadcrumbHeading, null, (_b = pendingChanges === null || pendingChanges === void 0 ? void 0 : pendingChanges[0]) === null || _b === void 0 ? void 0 : _b.tabLabel),
            React.createElement(BreadcrumbItem, { style: { marginTop: 0 } }, pendingChanges === null || pendingChanges === void 0 ? void 0 : pendingChanges.map(function (_a, index) {
                var handleAction = _a.handleAction, label = _a.label;
                return (React.createElement(React.Fragment, null,
                    index !== 0 && React.createElement("div", { style: { marginRight: '8px' } }, ","),
                    React.createElement("a", { key: label, onClick: handleAction }, label)));
            })))));
};
export default PendingChangesBreadcrumb;
//# sourceMappingURL=PendingChangesBreadcrumb.js.map