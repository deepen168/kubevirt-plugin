import React from 'react';
import { formatBytes } from '@kubevirt-utils/resources/vm/utils/disk/size';
import { TableData } from '@openshift-console/dynamic-plugin-sdk';
var VirtualMachinesOverviewTabFilesystemRow = function (_a) {
    var activeColumnIDs = _a.activeColumnIDs, obj = _a.obj;
    var totalBytes = formatBytes(String(obj === null || obj === void 0 ? void 0 : obj.totalBytes));
    var usedBytes = formatBytes(String(obj === null || obj === void 0 ? void 0 : obj.usedBytes));
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "diskName" }, obj === null || obj === void 0 ? void 0 : obj.diskName),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "fileSystemType" }, obj === null || obj === void 0 ? void 0 : obj.fileSystemType),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "mountPoint" }, obj === null || obj === void 0 ? void 0 : obj.mountPoint),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "totalBytes" }, totalBytes),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "usedBytes" }, usedBytes)));
};
export default VirtualMachinesOverviewTabFilesystemRow;
//# sourceMappingURL=VirtualMachinesOverviewTabFilesystemRow.js.map