import * as React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { VirtualMachineModelRef } from '@kubevirt-ui/kubevirt-api/console';
import { getVMStatusIcon } from '../utils';
import './VMStatusInventoryItem.scss';
var VMStatusInventoryItem = function (_a) {
    var count = _a.count, status = _a.status;
    var Icon = getVMStatusIcon(status);
    var to = "/k8s/all-namespaces/".concat(VirtualMachineModelRef, "?rowFilter-status=").concat(status);
    return (React.createElement("div", { className: "co-inventory-card__status" },
        React.createElement("span", { className: "co-dashboard-icon kv-inventory-card__status-icon" }, React.createElement(Icon, null)),
        React.createElement(Link, { to: to },
            React.createElement("span", { className: "kv-inventory-card__status-text" }, count)),
        React.createElement("span", null, status)));
};
export default VMStatusInventoryItem;
//# sourceMappingURL=VMStatusInventoryItem.js.map