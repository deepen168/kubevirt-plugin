import * as React from 'react';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { readableSizeUnit } from '@kubevirt-utils/utils/units';
import { TableData } from '@openshift-console/dynamic-plugin-sdk';
var VirtualMachinesOverviewTabDisksRow = function (_a) {
    var activeColumnIDs = _a.activeColumnIDs, obj = _a.obj;
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "name" },
            React.createElement("div", { "data-test-id": "disk-".concat(obj === null || obj === void 0 ? void 0 : obj.name) }, obj === null || obj === void 0 ? void 0 : obj.name)),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "drive" },
            React.createElement("div", { "data-test-id": "disk-".concat(obj === null || obj === void 0 ? void 0 : obj.drive) }, (obj === null || obj === void 0 ? void 0 : obj.drive) || NO_DATA_DASH)),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "size" },
            React.createElement("div", { "data-test-id": "disk-".concat(obj === null || obj === void 0 ? void 0 : obj.size) }, readableSizeUnit(obj === null || obj === void 0 ? void 0 : obj.size) || NO_DATA_DASH)),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "interface" },
            React.createElement("div", { "data-test-id": "disk-".concat(obj === null || obj === void 0 ? void 0 : obj.interface) }, (obj === null || obj === void 0 ? void 0 : obj.interface) || NO_DATA_DASH))));
};
export default VirtualMachinesOverviewTabDisksRow;
//# sourceMappingURL=VirtualMachinesOverviewTabDisksRow.js.map