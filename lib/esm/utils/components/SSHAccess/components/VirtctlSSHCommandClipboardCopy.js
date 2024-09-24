import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getVMSSHSecretName } from '@kubevirt-utils/resources/vm';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { ClipboardCopy } from '@patternfly/react-core';
import { getConsoleVirtctlCommand } from '../utils';
var VirtctlSSHCommandClipboardCopy = function (_a) {
    var vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var sshSecretNotConfigured = isEmpty(getVMSSHSecretName(vm));
    if (sshSecretNotConfigured) {
        return React.createElement("div", { className: "pf-u-font-size-xs" }, t('SSH secret not configured'));
    }
    return (React.createElement(ClipboardCopy, { clickTip: t('Copied'), "data-test": "ssh-over-virtctl", hoverTip: t('Copy to clipboard') }, getConsoleVirtctlCommand(vm)));
};
export default VirtctlSSHCommandClipboardCopy;
//# sourceMappingURL=VirtctlSSHCommandClipboardCopy.js.map