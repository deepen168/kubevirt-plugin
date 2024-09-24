import React from 'react';
import ComponentReady from '@kubevirt-utils/components/Charts/ComponentReady/ComponentReady';
import RDP from './RDP';
import RDPServiceNotConfigured from './RDPServiceNotConfigured';
var RDPConnector = function (_a) {
    var isLoading = _a.isLoading, rdpServiceAddressPort = _a.rdpServiceAddressPort, vm = _a.vm, vmi = _a.vmi;
    return (React.createElement(ComponentReady, { isReady: !isLoading, spinner: true }, rdpServiceAddressPort ? (React.createElement(RDP, { rdp: rdpServiceAddressPort })) : (React.createElement(RDPServiceNotConfigured, { vm: vm, vmi: vmi }))));
};
export default RDPConnector;
//# sourceMappingURL=RDPConnector.js.map