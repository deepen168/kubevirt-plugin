import React from 'react';
import { Divider } from '@patternfly/react-core';
import GettingStartedSection from './components/GettingStartedSection/GettingStartedSection';
import ManageSSHKeySection from './components/ManageSSHKeySection/ManageSSHKeySection';
import TaskPermissionsSection from './components/TaskPermissionsSection/TaskPermissionsSection';
import './user-tab.scss';
var UserTab = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(ManageSSHKeySection, null),
        React.createElement(Divider, { className: "section-divider" }),
        React.createElement(TaskPermissionsSection, null),
        React.createElement(Divider, { className: "section-divider" }),
        React.createElement(GettingStartedSection, null)));
};
export default UserTab;
//# sourceMappingURL=UserTab.js.map