import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getVMIIPAddresses } from '@kubevirt-utils/resources/vmi';
import { Button, ButtonVariant, Popover, PopoverPosition } from '@patternfly/react-core';
var VirtualMachinesInstancesIP = function (_a) {
    var vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var ips = getVMIIPAddresses(vmi);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null, ips === null || ips === void 0 ? void 0 : ips[0]),
        (ips === null || ips === void 0 ? void 0 : ips.length) > 1 && (React.createElement(Popover, { bodyContent: ips === null || ips === void 0 ? void 0 : ips.map(function (item) { return (React.createElement("div", { key: item }, item)); }), hasAutoWidth: true, headerContent: t('IP addresses'), position: PopoverPosition.top },
            React.createElement(Button, { variant: ButtonVariant.link }, "+".concat((ips === null || ips === void 0 ? void 0 : ips.length) - 1, " more"))))));
};
export default VirtualMachinesInstancesIP;
//# sourceMappingURL=VirtualMachinesInstanceIP.js.map