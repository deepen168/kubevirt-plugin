import * as React from 'react';
import { VirtualMachineSnapshotModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import Timestamp from '@kubevirt-utils/components/Timestamp/Timestamp';
import { ResourceLink, TableData } from '@openshift-console/dynamic-plugin-sdk';
import { snapshotStatuses } from '../../utils/consts';
import IndicationLabelList from '../IndicationLabel/IndicationLabelList';
import SnapshotStatusIcon from '../SnapshotStatusIcon/SnapshotStatusIcon';
import SnapshotActionsMenu from './SnapshotActionsMenu';
var SnapshotRow = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var activeColumnIDs = _a.activeColumnIDs, snapshot = _a.obj, _k = _a.rowData, isVMRunning = _k.isVMRunning, restores = _k.restores;
    var relevantRestore = restores === null || restores === void 0 ? void 0 : restores[(_b = snapshot === null || snapshot === void 0 ? void 0 : snapshot.metadata) === null || _b === void 0 ? void 0 : _b.name];
    var isRestoreDisabled = isVMRunning || ((_c = snapshot === null || snapshot === void 0 ? void 0 : snapshot.status) === null || _c === void 0 ? void 0 : _c.phase) !== snapshotStatuses.Succeeded;
    var readyCondition = (_e = (_d = snapshot === null || snapshot === void 0 ? void 0 : snapshot.status) === null || _d === void 0 ? void 0 : _d.conditions) === null || _e === void 0 ? void 0 : _e.find(function (_a) {
        var type = _a.type;
        return type === 'Ready';
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "name" },
            React.createElement(ResourceLink, { groupVersionKind: VirtualMachineSnapshotModelGroupVersionKind, name: (_f = snapshot === null || snapshot === void 0 ? void 0 : snapshot.metadata) === null || _f === void 0 ? void 0 : _f.name, namespace: (_g = snapshot === null || snapshot === void 0 ? void 0 : snapshot.metadata) === null || _g === void 0 ? void 0 : _g.namespace })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "created" },
            React.createElement(Timestamp, { timestamp: (_h = snapshot === null || snapshot === void 0 ? void 0 : snapshot.metadata) === null || _h === void 0 ? void 0 : _h.creationTimestamp })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "status" },
            React.createElement(SnapshotStatusIcon, { phase: (readyCondition === null || readyCondition === void 0 ? void 0 : readyCondition.reason) || (readyCondition === null || readyCondition === void 0 ? void 0 : readyCondition.status) })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "last-restored" },
            React.createElement(Timestamp, { timestamp: (_j = relevantRestore === null || relevantRestore === void 0 ? void 0 : relevantRestore.status) === null || _j === void 0 ? void 0 : _j.restoreTime })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "indications" },
            React.createElement(IndicationLabelList, { snapshot: snapshot })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "dropdown-kebab-pf pf-v5-c-table__action", id: "" },
            React.createElement(SnapshotActionsMenu, { isRestoreDisabled: isRestoreDisabled, snapshot: snapshot }))));
};
export default SnapshotRow;
//# sourceMappingURL=SnapshotRow.js.map