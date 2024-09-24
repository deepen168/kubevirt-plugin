import React from 'react';
import MutedTextSpan from '@kubevirt-utils/components/MutedTextSpan/MutedTextSpan';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isGuestAgentConnected } from '@kubevirt-utils/resources/vmi';
import { VirtualizedTable } from '@openshift-console/dynamic-plugin-sdk';
import { Bullseye, Card, CardBody, CardTitle, Divider } from '@patternfly/react-core';
import useActiveUsersColumnsVm from './hooks/useActiveUsersColumnsVm';
import ActiveUserListRowVm from './ActiveUserListRowVm';
var VirtualMachinesOverviewTabActiveUser = function (_a) {
    var guestAgentData = _a.guestAgentData, guestAgentDataLoaded = _a.guestAgentDataLoaded, guestAgentDataLoadError = _a.guestAgentDataLoadError, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var columns = useActiveUsersColumnsVm();
    var userList = (guestAgentData === null || guestAgentData === void 0 ? void 0 : guestAgentData.userList) || [];
    var bodyTable = vmi && isGuestAgentConnected(vmi) ? (React.createElement(VirtualizedTable, { columns: columns, data: userList, loaded: guestAgentDataLoaded, loadError: guestAgentDataLoadError, NoDataEmptyMsg: function () { return React.createElement(Bullseye, null, t('No active users')); }, Row: ActiveUserListRowVm, unfilteredData: userList })) : (React.createElement(Bullseye, null,
        React.createElement(MutedTextSpan, { text: vmi ? t('Guest agent is required') : t('VirtualMachine is not running') })));
    return (React.createElement(Card, null,
        React.createElement(CardTitle, { className: "text-muted" }, t('Active users ({{users}})', { users: userList === null || userList === void 0 ? void 0 : userList.length })),
        React.createElement(Divider, null),
        React.createElement(CardBody, { isFilled: true }, bodyTable)));
};
export default VirtualMachinesOverviewTabActiveUser;
//# sourceMappingURL=VirtualMachinesOverviewTabActiveUser.js.map