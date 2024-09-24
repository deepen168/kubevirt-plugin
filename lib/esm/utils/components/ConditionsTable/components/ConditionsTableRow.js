import * as React from 'react';
import Timestamp from '@kubevirt-utils/components/Timestamp/Timestamp';
import { TableData } from '@openshift-console/dynamic-plugin-sdk';
export var ConditionsTableRow = function (_a) {
    var activeColumnIDs = _a.activeColumnIDs, obj = _a.obj;
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "type" }, obj.type),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "status" }, obj.status),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "updated" },
            React.createElement(Timestamp, { timestamp: obj.lastTransitionTime })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "reason" }, obj.reason),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "message" }, obj === null || obj === void 0 ? void 0 : obj.message)));
};
//# sourceMappingURL=ConditionsTableRow.js.map