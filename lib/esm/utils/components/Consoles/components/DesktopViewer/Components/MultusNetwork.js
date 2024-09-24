import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isGuestAgentConnected } from '@kubevirt-utils/resources/vmi/utils/guest-agent';
import { Alert } from '@patternfly/react-core';
import { DEFAULT_RDP_PORT } from '../utils/constants';
import RDP from './RDP';
var MultusNetwork = function (_a) {
    var selectedNetwork = _a.selectedNetwork, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var guestAgent = isGuestAgentConnected(vmi);
    if (!guestAgent) {
        return (React.createElement(Alert, { isInline: true, title: t('Missing guest agent'), variant: "warning" }, t('Guest agent is not installed on VirtualMachine')));
    }
    if (!selectedNetwork || !(selectedNetwork === null || selectedNetwork === void 0 ? void 0 : selectedNetwork.ip)) {
        return (React.createElement(Alert, { isInline: true, title: t('Networks misconfigured'), variant: "warning" }, "".concat(t('No IP address is reported for network interface'), " ").concat((selectedNetwork === null || selectedNetwork === void 0 ? void 0 : selectedNetwork.name) || '')));
    }
    var rdp = {
        address: selectedNetwork === null || selectedNetwork === void 0 ? void 0 : selectedNetwork.ip,
        port: DEFAULT_RDP_PORT,
    };
    return React.createElement(RDP, { rdp: rdp });
};
export default MultusNetwork;
//# sourceMappingURL=MultusNetwork.js.map