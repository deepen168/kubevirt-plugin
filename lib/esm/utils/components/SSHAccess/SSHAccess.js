import React from 'react';
import { DescriptionList } from '@patternfly/react-core';
import ConsoleOverVirtctl from './components/ConsoleOverVirtctl';
import SSHCommand from './components/SSHCommand';
var SSHAccess = function (_a) {
    var isCustomizeInstanceType = _a.isCustomizeInstanceType, sshService = _a.sshService, sshServiceLoaded = _a.sshServiceLoaded, vm = _a.vm, vmi = _a.vmi;
    return (React.createElement(DescriptionList, { className: "pf-c-description-list" },
        !isCustomizeInstanceType && (React.createElement(SSHCommand, { sshService: sshService, sshServiceLoaded: sshServiceLoaded, vm: vm, vmi: vmi })),
        React.createElement(ConsoleOverVirtctl, { vm: vm })));
};
export default SSHAccess;
//# sourceMappingURL=SSHAccess.js.map