import * as React from 'react';
import { VirtualMachineModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import Timestamp from '@kubevirt-utils/components/Timestamp/Timestamp';
import { getName, getNamespace } from '@kubevirt-utils/resources/shared';
import { ResourceLink, TableData } from '@openshift-console/dynamic-plugin-sdk';
import VirtualMachineActions from '@virtualmachines/actions/components/VirtualMachineActions/VirtualMachineActions';
import useVirtualMachineActionsProvider from '@virtualmachines/actions/hooks/useVirtualMachineActionsProvider';
import VirtualMachineStatus from '../VirtualMachineStatus/VirtualMachineStatus';
import { VMStatusConditionLabelList } from '../VMStatusConditionLabel';
import './virtual-machine-row-layout.scss';
var VirtualMachineRowLayout = function (_a) {
    var _b, _c, _d;
    var activeColumnIDs = _a.activeColumnIDs, obj = _a.obj, _e = _a.rowData, ips = _e.ips, isSingleNodeCluster = _e.isSingleNodeCluster, node = _e.node, vmim = _e.vmim;
    var actions = useVirtualMachineActionsProvider(obj, vmim, isSingleNodeCluster)[0];
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-15 vm-column", id: "name" },
            React.createElement(ResourceLink, { groupVersionKind: VirtualMachineModelGroupVersionKind, name: getName(obj), namespace: getNamespace(obj) })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-10 vm-column", id: "namespace" },
            React.createElement(ResourceLink, { kind: "Namespace", name: getNamespace(obj) })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-15 vm-column", id: "status" },
            React.createElement(VirtualMachineStatus, { vm: obj })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-20 vm-column", id: "conditions" },
            React.createElement(VMStatusConditionLabelList, { conditions: (_c = (_b = obj === null || obj === void 0 ? void 0 : obj.status) === null || _b === void 0 ? void 0 : _b.conditions) === null || _c === void 0 ? void 0 : _c.filter(function (c) { return c.reason; }) })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-15 vm-column", id: "node" }, node),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-15 vm-column", id: "created" },
            React.createElement(Timestamp, { timestamp: (_d = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _d === void 0 ? void 0 : _d.creationTimestamp })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-10 vm-column", id: "ip-address" }, ips),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "dropdown-kebab-pf pf-v5-c-table__action", id: "" },
            React.createElement(VirtualMachineActions, { actions: actions, isKebabToggle: true }))));
};
export default VirtualMachineRowLayout;
//# sourceMappingURL=VirtualMachineRowLayout.js.map