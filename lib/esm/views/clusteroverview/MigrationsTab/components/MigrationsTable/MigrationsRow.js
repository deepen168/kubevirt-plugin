import React from 'react';
import { modelToGroupVersionKind, NamespaceModel, NodeModel, VirtualMachineInstanceMigrationModelGroupVersionKind, VirtualMachineModelGroupVersionKind, } from '@kubevirt-ui/kubevirt-api/console';
import Timestamp from '@kubevirt-utils/components/Timestamp/Timestamp';
import { getName, getNamespace } from '@kubevirt-utils/resources/shared';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { vmimStatuses } from '@kubevirt-utils/resources/vmim/statuses';
import { GenericStatus, ResourceLink, TableData, } from '@openshift-console/dynamic-plugin-sdk';
import { Tooltip } from '@patternfly/react-core';
import MigrationPolicyTooltip from './components/MigrationPolicyTooltip/MigrationPolicyTooltip';
import { iconMapper } from './utils/statuses';
import MigrationActionsDropdown from './MigrationActionsDropdown';
var MigrationsRow = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7;
    var activeColumnIDs = _a.activeColumnIDs, obj = _a.obj;
    var StatusIcon = iconMapper === null || iconMapper === void 0 ? void 0 : iconMapper[(_c = (_b = obj === null || obj === void 0 ? void 0 : obj.vmim) === null || _b === void 0 ? void 0 : _b.status) === null || _c === void 0 ? void 0 : _c.phase];
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "vm-name" },
            React.createElement(ResourceLink, { groupVersionKind: VirtualMachineModelGroupVersionKind, name: getName(obj.vmiObj), namespace: getNamespace(obj.vmiObj) })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-10 vm-column", id: "namespace" },
            React.createElement(ResourceLink, { groupVersionKind: modelToGroupVersionKind(NamespaceModel), name: getNamespace(obj.vmiObj) })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "status" },
            React.createElement(Tooltip, { content: "".concat((_e = (_d = obj === null || obj === void 0 ? void 0 : obj.vmim) === null || _d === void 0 ? void 0 : _d.status) === null || _e === void 0 ? void 0 : _e.phase, " ").concat(((_h = (_g = (_f = obj === null || obj === void 0 ? void 0 : obj.vmiObj) === null || _f === void 0 ? void 0 : _f.status) === null || _g === void 0 ? void 0 : _g.migrationState) === null || _h === void 0 ? void 0 : _h.endTimestamp) || ''), hidden: ((_k = (_j = obj === null || obj === void 0 ? void 0 : obj.vmim) === null || _j === void 0 ? void 0 : _j.status) === null || _k === void 0 ? void 0 : _k.phase) !== vmimStatuses.Failed &&
                    ((_m = (_l = obj === null || obj === void 0 ? void 0 : obj.vmim) === null || _l === void 0 ? void 0 : _l.status) === null || _m === void 0 ? void 0 : _m.phase) !== vmimStatuses.Succeeded },
                React.createElement(GenericStatus, { Icon: StatusIcon, title: (_p = (_o = obj === null || obj === void 0 ? void 0 : obj.vmim) === null || _o === void 0 ? void 0 : _o.status) === null || _p === void 0 ? void 0 : _p.phase }))),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "source" }, ((_s = (_r = (_q = obj === null || obj === void 0 ? void 0 : obj.vmiObj) === null || _q === void 0 ? void 0 : _q.status) === null || _r === void 0 ? void 0 : _r.migrationState) === null || _s === void 0 ? void 0 : _s.sourceNode) ? (React.createElement(ResourceLink, { groupVersionKind: modelToGroupVersionKind(NodeModel), name: (_v = (_u = (_t = obj === null || obj === void 0 ? void 0 : obj.vmiObj) === null || _t === void 0 ? void 0 : _t.status) === null || _u === void 0 ? void 0 : _u.migrationState) === null || _v === void 0 ? void 0 : _v.sourceNode })) : (NO_DATA_DASH)),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "target" }, ((_y = (_x = (_w = obj === null || obj === void 0 ? void 0 : obj.vmiObj) === null || _w === void 0 ? void 0 : _w.status) === null || _x === void 0 ? void 0 : _x.migrationState) === null || _y === void 0 ? void 0 : _y.targetNode) ? (React.createElement(ResourceLink, { groupVersionKind: modelToGroupVersionKind(NodeModel), name: (_1 = (_0 = (_z = obj === null || obj === void 0 ? void 0 : obj.vmiObj) === null || _z === void 0 ? void 0 : _z.status) === null || _0 === void 0 ? void 0 : _0.migrationState) === null || _1 === void 0 ? void 0 : _1.targetNode })) : (NO_DATA_DASH)),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "migration-policy" },
            React.createElement(MigrationPolicyTooltip, { obj: obj })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "vmim-name" },
            React.createElement(ResourceLink, { groupVersionKind: VirtualMachineInstanceMigrationModelGroupVersionKind, name: (_3 = (_2 = obj === null || obj === void 0 ? void 0 : obj.vmim) === null || _2 === void 0 ? void 0 : _2.metadata) === null || _3 === void 0 ? void 0 : _3.name, namespace: (_5 = (_4 = obj === null || obj === void 0 ? void 0 : obj.vmim) === null || _4 === void 0 ? void 0 : _4.metadata) === null || _5 === void 0 ? void 0 : _5.namespace })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "created" },
            React.createElement(Timestamp, { timestamp: (_7 = (_6 = obj === null || obj === void 0 ? void 0 : obj.vmim) === null || _6 === void 0 ? void 0 : _6.metadata) === null || _7 === void 0 ? void 0 : _7.creationTimestamp })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "dropdown-kebab-pf pf-v5-c-table__action", id: "" },
            React.createElement(MigrationActionsDropdown, { isKebabToggle: true, vmim: obj === null || obj === void 0 ? void 0 : obj.vmim }))));
};
export default MigrationsRow;
//# sourceMappingURL=MigrationsRow.js.map