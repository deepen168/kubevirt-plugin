import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FlexItem, Tooltip } from '@patternfly/react-core';
import { CheckCircleIcon, WarningTriangleIcon } from '@patternfly/react-icons';
import { SERVICE_TYPES } from '../constants';
import { isLoadBalancerBonded } from '../useSSHCommand';
var SSHServiceStateIcon = function (_a) {
    var _b;
    var sshService = _a.sshService, sshServiceLoaded = _a.sshServiceLoaded;
    var t = useKubevirtTranslation().t;
    if (((_b = sshService === null || sshService === void 0 ? void 0 : sshService.spec) === null || _b === void 0 ? void 0 : _b.type) !== SERVICE_TYPES.LOAD_BALANCER)
        return null;
    if (!sshServiceLoaded)
        return null;
    return (React.createElement(FlexItem, null, !isLoadBalancerBonded(sshService) ? (React.createElement(Tooltip, { content: t('This process can take 1-2 minutes to complete.') },
        React.createElement("div", null,
            React.createElement(WarningTriangleIcon, { color: "var(--pf-global--warning-color--100)" }),
            " ",
            t('In progress'),
            ' '))) : (React.createElement("div", null,
        React.createElement(CheckCircleIcon, { color: "var(--pf-global--success-color--100)" }),
        " ",
        t('Ready'),
        ' '))));
};
export default SSHServiceStateIcon;
//# sourceMappingURL=SSHServiceState.js.map