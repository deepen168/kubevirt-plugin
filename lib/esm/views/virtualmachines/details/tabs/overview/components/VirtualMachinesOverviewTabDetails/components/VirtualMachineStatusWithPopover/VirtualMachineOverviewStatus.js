import React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { useLocation } from 'react-router-dom-v5-compat';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getVMStatus } from '@kubevirt-utils/resources/shared';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { Popover, PopoverPosition, Text } from '@patternfly/react-core';
import { createURL } from '@virtualmachines/details/tabs/overview/utils/utils';
var VirtualMachineOverviewStatus = function (_a) {
    var children = _a.children, vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var location = useLocation();
    var vmPrintableStatus = getVMStatus(vm);
    if (!vmPrintableStatus)
        return React.createElement(React.Fragment, null, NO_DATA_DASH);
    return (React.createElement(React.Fragment, null,
        React.createElement(Popover, { bodyContent: React.createElement(React.Fragment, null,
                React.createElement(Text, null, t('VirtualMachine is currently {{ status }}', {
                    status: vmPrintableStatus,
                })),
                React.createElement("br", null),
                React.createElement(Text, null,
                    React.createElement(Link, { to: createURL('diagnostics', location === null || location === void 0 ? void 0 : location.pathname) }, t('View diagnostic')))), headerContent: vmPrintableStatus, position: PopoverPosition.right },
            React.createElement(React.Fragment, null, children))));
};
export default VirtualMachineOverviewStatus;
//# sourceMappingURL=VirtualMachineOverviewStatus.js.map