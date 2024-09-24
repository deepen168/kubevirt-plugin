import React from 'react';
import { PageSection, PageSectionVariants } from '@patternfly/react-core';
import DisksTable from './table/disks/DisksTable';
import FileSystemTable from './table/file-system/FileSystemTable';
import './VirtualMachinesInstancePageDisksTab.scss';
var VirtualMachinesInstancePageDisksTab = function (_a) {
    var vmi = _a.obj;
    return (React.createElement(PageSection, { variant: PageSectionVariants.light },
        React.createElement(DisksTable, { vmi: vmi }),
        React.createElement(FileSystemTable, { vmi: vmi })));
};
export default VirtualMachinesInstancePageDisksTab;
//# sourceMappingURL=VirtualMachinesInstancePageDisksTab.js.map