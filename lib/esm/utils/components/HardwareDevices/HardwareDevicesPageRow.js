import React from 'react';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { TableData } from '@openshift-console/dynamic-plugin-sdk';
var HardwareDevicesPageRow = function (_a) {
    var activeColumnIDs = _a.activeColumnIDs, device = _a.obj;
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "resourceName" }, (device === null || device === void 0 ? void 0 : device.resourceName) || NO_DATA_DASH),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "selector" }, (device === null || device === void 0 ? void 0 : device.selector) || NO_DATA_DASH)));
};
export default HardwareDevicesPageRow;
//# sourceMappingURL=HardwareDevicesPageRow.js.map