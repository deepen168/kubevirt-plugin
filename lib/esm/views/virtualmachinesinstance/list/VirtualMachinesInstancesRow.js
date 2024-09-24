import * as React from 'react';
import format from 'date-fns/format';
import { VMStatusConditionLabelList } from 'src/views/virtualmachines/list/components/VMStatusConditionLabel';
import { NodeModel } from '@kubevirt-ui/kubevirt-api/console';
import { ResourceLink, TableData } from '@openshift-console/dynamic-plugin-sdk';
import { GlobeAmericasIcon } from '@patternfly/react-icons';
import VirtualMachinesInsanceActions from '../actions/VirtualMachinesInstanceActions';
import VirtualMachinesInstancesIP from '../components/VirtualMachinesInstanceIP';
import VirtualMachinesInstancesStatus from '../components/VirtualMachinesInstancesStatus';
var VirtualMachinesInstancesRow = function (_a) {
    var _b, _c, _d, _e;
    var activeColumnIDs = _a.activeColumnIDs, obj = _a.obj, kind = _a.rowData.kind;
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "name" },
            React.createElement(ResourceLink, { kind: kind, name: obj.metadata.name, namespace: obj.metadata.namespace })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "namespace" },
            React.createElement(ResourceLink, { kind: "Namespace", name: obj.metadata.namespace })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "status" },
            React.createElement(VirtualMachinesInstancesStatus, { status: (_b = obj === null || obj === void 0 ? void 0 : obj.status) === null || _b === void 0 ? void 0 : _b.phase })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "conditions" },
            React.createElement(VMStatusConditionLabelList, { conditions: (_d = (_c = obj === null || obj === void 0 ? void 0 : obj.status) === null || _c === void 0 ? void 0 : _c.conditions) === null || _d === void 0 ? void 0 : _d.filter(function (c) { return c.reason; }) })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "created" },
            React.createElement(GlobeAmericasIcon, null),
            ' ',
            format(new Date((_e = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _e === void 0 ? void 0 : _e.creationTimestamp), 'MMM dd, yyyy, h:mm a')),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "node" },
            React.createElement(ResourceLink, { kind: NodeModel.kind, name: obj.status.nodeName })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "ipAddress" },
            React.createElement(VirtualMachinesInstancesIP, { vmi: obj })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-v5-c-table__action", id: "" },
            React.createElement(VirtualMachinesInsanceActions, { vmi: obj }))));
};
export default VirtualMachinesInstancesRow;
//# sourceMappingURL=VirtualMachinesInstancesRow.js.map