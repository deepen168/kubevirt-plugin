import React from 'react';
import { useLocation } from 'react-router-dom-v5-compat';
import { Divider, PageSection, PageSectionVariants } from '@patternfly/react-core';
import Details from './components/Details/Details';
import Services from './components/Services/Services';
import ActiveUserList from './components/UserList/ActiveUserList';
import './virtual-machines-instance-details-tab.scss';
var VirtualMachinesInstancePageDetailsTab = function (_a) {
    var vmi = _a.obj;
    var location = useLocation();
    return (React.createElement("div", { className: "VirtualMachinesInstanceDetailsTab" },
        React.createElement(PageSection, { variant: PageSectionVariants.light },
            React.createElement(Details, { pathname: location === null || location === void 0 ? void 0 : location.pathname, vmi: vmi })),
        React.createElement(Divider, null),
        React.createElement(PageSection, { variant: PageSectionVariants.light },
            React.createElement(Services, { pathname: location === null || location === void 0 ? void 0 : location.pathname, vmi: vmi })),
        React.createElement(Divider, null),
        React.createElement(PageSection, { variant: PageSectionVariants.light },
            React.createElement(ActiveUserList, { pathname: location === null || location === void 0 ? void 0 : location.pathname, vmi: vmi }))));
};
export default VirtualMachinesInstancePageDetailsTab;
//# sourceMappingURL=VirtualMachinesInstancePageDetailsTab.js.map