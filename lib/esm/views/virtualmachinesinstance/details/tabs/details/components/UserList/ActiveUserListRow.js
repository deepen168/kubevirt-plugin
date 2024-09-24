import * as React from 'react';
import Timestamp from '@kubevirt-utils/components/Timestamp/Timestamp';
import { fromNow } from '@kubevirt-utils/components/Timestamp/utils/datetime';
import { TableData } from '@openshift-console/dynamic-plugin-sdk';
var ActiveUserListRow = function (_a) {
    var activeColumnIDs = _a.activeColumnIDs, obj = _a.obj;
    var time = (obj === null || obj === void 0 ? void 0 : obj.loginTime) * 1000;
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "userName" }, (obj === null || obj === void 0 ? void 0 : obj.userName) || '-'),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "domain" }, (obj === null || obj === void 0 ? void 0 : obj.domain) || '-'),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "loginTime" },
            React.createElement(Timestamp, { timestamp: time })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "elapsedTime" }, fromNow(new Date(time), new Date()))));
};
export default ActiveUserListRow;
//# sourceMappingURL=ActiveUserListRow.js.map