import React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { useLocation } from 'react-router-dom-v5-compat';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getVMStatus } from '@kubevirt-utils/resources/shared';
import { Popover, PopoverPosition, Progress, ProgressSize, Text } from '@patternfly/react-core';
import { createURL } from '@virtualmachines/details/tabs/overview/utils/utils';
import useProvisioningPercentage from '../../../../../../../../../utils/resources/vm/hooks/useProvisioningPercentage';
import './virtualmachine-provisioning-status.scss';
var VirtualMachineProvisioningStatus = function (_a) {
    var children = _a.children, vm = _a.vm;
    var vmPrintableStatus = getVMStatus(vm);
    var t = useKubevirtTranslation().t;
    var percentages = useProvisioningPercentage(vm).percentages;
    var numberOfProvisioningDisks = Object.keys(percentages).length;
    var location = useLocation();
    return (React.createElement(Popover, { bodyContent: React.createElement(React.Fragment, null,
            React.createElement(Text, null, t('VirtualMachine is currently provisioning')),
            React.createElement("br", null),
            Object.keys(percentages).map(function (diskName) { return (React.createElement(Progress, { className: "progress", key: diskName, size: ProgressSize.lg, title: numberOfProvisioningDisks > 1 ? diskName : t('Copying files'), value: parseFloat(percentages[diskName]) })); }),
            React.createElement("br", null),
            React.createElement(Text, null,
                React.createElement(Link, { to: createURL('diagnostics', location === null || location === void 0 ? void 0 : location.pathname) }, t('View diagnostic')))), className: "virtualmachine-privisioning-status", headerContent: vmPrintableStatus, position: PopoverPosition.right },
        React.createElement(React.Fragment, null, children)));
};
export default VirtualMachineProvisioningStatus;
//# sourceMappingURL=VirtualMachineProvisioningStatus.js.map