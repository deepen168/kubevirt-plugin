import * as React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { VirtualMachineModelRef } from '@kubevirt-ui/kubevirt-api/console';
import { ALL_NAMESPACES } from '@kubevirt-utils/hooks/constants';
import { isAllNamespaces } from '@kubevirt-utils/utils/utils';
import { GridItem } from '@patternfly/react-core';
import { vmStatusIcon } from './utils/utils';
import './VMStatusesCard.scss';
var VMStatusItem = function (_a) {
    var count = _a.count, namespace = _a.namespace, status = _a.status;
    var Icon = vmStatusIcon[status];
    var path = "/k8s/".concat(isAllNamespaces(namespace) ? ALL_NAMESPACES : "ns/".concat(namespace), "/").concat(VirtualMachineModelRef, "?rowFilter-status=").concat(status);
    return (React.createElement(GridItem, { className: "vm-statuses-card__grid-item", span: 3 },
        React.createElement("div", { className: "vm-statuses-card__status-item" },
            React.createElement("div", { className: "vm-statuses-card__status-item--count" },
                React.createElement("span", { className: "vm-statuses-card__status-item--icon" }, Icon && React.createElement(Icon, null)),
                React.createElement("span", { className: "vm-statuses-card__status-item--value" },
                    React.createElement(Link, { to: path }, count.toString()))),
            React.createElement("div", { className: "vm-statuses-card__status-item--status" }, status))));
};
export default VMStatusItem;
//# sourceMappingURL=VMStatusItem.js.map