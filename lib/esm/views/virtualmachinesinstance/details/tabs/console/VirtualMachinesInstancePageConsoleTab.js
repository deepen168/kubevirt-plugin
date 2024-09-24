import React from 'react';
import Consoles from '@kubevirt-utils/components/Consoles/Consoles';
import { PageSection, PageSectionVariants } from '@patternfly/react-core';
var VirtualMachinesInstancePageConsoleTab = function (_a) {
    var vmi = _a.obj;
    return (React.createElement(PageSection, { variant: PageSectionVariants.light },
        React.createElement(Consoles, { vmi: vmi })));
};
export default VirtualMachinesInstancePageConsoleTab;
//# sourceMappingURL=VirtualMachinesInstancePageConsoleTab.js.map