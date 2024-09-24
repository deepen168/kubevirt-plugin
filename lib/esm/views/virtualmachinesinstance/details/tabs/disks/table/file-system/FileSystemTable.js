import React from 'react';
import { ListPageBody, VirtualizedTable } from '@openshift-console/dynamic-plugin-sdk';
import useGuestOS from '../../../../hooks/useGuestOS';
import useFileSystemTableColumns from '../../hooks/useFileSystemTableColumns';
import FileSystemTableRow from './FileSystemTableRow';
import FileSystemTableTitle from './FileSystemTableTitle';
var FileSystemTable = function (_a) {
    var _b;
    var vmi = _a.vmi;
    var _c = useGuestOS(vmi), data = _c[0], loaded = _c[1], loadingError = _c[2];
    var columns = useFileSystemTableColumns();
    var fileSystems = ((_b = data === null || data === void 0 ? void 0 : data.fsInfo) === null || _b === void 0 ? void 0 : _b.disks) || [];
    return (React.createElement(ListPageBody, null,
        React.createElement(FileSystemTableTitle, null),
        React.createElement(VirtualizedTable, { columns: columns, data: fileSystems, loaded: loaded, loadError: loadingError, Row: FileSystemTableRow, unfilteredData: fileSystems })));
};
export default FileSystemTable;
//# sourceMappingURL=FileSystemTable.js.map