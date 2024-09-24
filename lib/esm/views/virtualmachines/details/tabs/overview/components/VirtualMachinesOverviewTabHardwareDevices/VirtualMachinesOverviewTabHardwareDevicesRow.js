import * as React from 'react';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { TableData } from '@openshift-console/dynamic-plugin-sdk';
var VirtualMachinesOverviewTabHardwareDevicesRow = function (_a) {
    var activeColumnIDs = _a.activeColumnIDs, obj = _a.obj;
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "resourceName" }, (obj === null || obj === void 0 ? void 0 : obj.name) || NO_DATA_DASH),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "hardwareName" }, (obj === null || obj === void 0 ? void 0 : obj.deviceName) || NO_DATA_DASH)));
};
export default VirtualMachinesOverviewTabHardwareDevicesRow;
//# sourceMappingURL=VirtualMachinesOverviewTabHardwareDevicesRow.js.map