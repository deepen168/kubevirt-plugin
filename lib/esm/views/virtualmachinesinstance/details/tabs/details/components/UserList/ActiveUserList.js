import * as React from 'react';
import MutedTextSpan from '@kubevirt-utils/components/MutedTextSpan/MutedTextSpan';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { VirtualizedTable } from '@openshift-console/dynamic-plugin-sdk';
import { Bullseye, Icon, Title } from '@patternfly/react-core';
import { LinkIcon } from '@patternfly/react-icons';
import useGuestOS from '../../../../hooks/useGuestOS';
import useActiveUsersColumns from './hooks/useActiveUsersColumns';
import ActiveUserListRow from './ActiveUserListRow';
var ActiveUserList = function (_a) {
    var pathname = _a.pathname, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var columns = useActiveUsersColumns();
    var _b = useGuestOS(vmi), _c = _b[0].userList, userList = _c === void 0 ? [] : _c, loaded = _b[1], isGuestAgentConnected = _b[3];
    return (React.createElement("div", null,
        React.createElement("a", { className: "link-icon", href: "".concat(pathname, "#logged-in-users") },
            React.createElement(Icon, { size: "sm" },
                React.createElement(LinkIcon, null))),
        React.createElement(Title, { className: "co-section-heading", headingLevel: "h2" }, t('Active users')),
        isGuestAgentConnected ? (React.createElement(VirtualizedTable, { NoDataEmptyMsg: function () { return (React.createElement(Bullseye, null,
                React.createElement(MutedTextSpan, { text: t('No active users') }))); }, columns: columns, data: userList, loaded: loaded, loadError: false, Row: ActiveUserListRow, unfilteredData: userList })) : (React.createElement(Bullseye, null,
            React.createElement(MutedTextSpan, { text: t('Guest agent is required') })))));
};
export default ActiveUserList;
//# sourceMappingURL=ActiveUserList.js.map