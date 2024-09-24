import * as React from 'react';
import { TableData } from '@openshift-console/dynamic-plugin-sdk';
import { convertBytes } from '../../utils/virtualMachinesInstancePageDisksTabUtils';
var FileSystemTableRow = function (_a) {
    var activeColumnIDs = _a.activeColumnIDs, obj = _a.obj;
    var totalBytes = convertBytes(obj === null || obj === void 0 ? void 0 : obj.totalBytes);
    var usedBytes = convertBytes(obj === null || obj === void 0 ? void 0 : obj.usedBytes);
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "diskName" }, obj === null || obj === void 0 ? void 0 : obj.diskName),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "fileSystemType" }, obj === null || obj === void 0 ? void 0 : obj.fileSystemType),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "mountPoint" }, obj === null || obj === void 0 ? void 0 : obj.mountPoint),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "totalBytes" },
            totalBytes.value,
            " ",
            totalBytes.unit),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "usedBytes" },
            usedBytes.value,
            " ",
            usedBytes.unit)));
};
export default FileSystemTableRow;
//# sourceMappingURL=FileSystemTableRow.js.map