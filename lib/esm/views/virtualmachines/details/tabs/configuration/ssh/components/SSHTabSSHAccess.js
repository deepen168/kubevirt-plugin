import React from 'react';
import SearchItem from '@kubevirt-utils/components/SearchItem/SearchItem';
import SSHAccess from '@kubevirt-utils/components/SSHAccess/SSHAccess';
import useSSHService from '@kubevirt-utils/components/SSHAccess/useSSHService';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var SSHTabSSHAccess = function (_a) {
    var isCustomizeInstanceType = _a.isCustomizeInstanceType, vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var _b = useSSHService(vm), sshService = _b[0], sshServiceLoaded = _b[1];
    return (React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(SSHAccess, { isCustomizeInstanceType: isCustomizeInstanceType, sshService: sshService, sshServiceLoaded: sshServiceLoaded, vm: vm, vmi: vmi }), "data-test-id": "ssh-access", descriptionHeader: React.createElement(SearchItem, { id: "ssh-access" }, t('SSH access')) }));
};
export default SSHTabSSHAccess;
//# sourceMappingURL=SSHTabSSHAccess.js.map