import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, ButtonVariant, Popover, PopoverPosition } from '@patternfly/react-core';
import { HelpIcon } from '@patternfly/react-icons';
import './CPUTopologyHelperText.scss';
var CPUTopologyHelperText = function (_a) {
    var cpu = _a.cpu;
    var t = useKubevirtTranslation().t;
    var _b = cpu || {}, cores = _b.cores, sockets = _b.sockets, threads = _b.threads;
    var totalCPU = cores * sockets * threads;
    return (React.createElement("div", { className: "cpu-topology-helper-text" },
        t('Total vCPU is {{totalCPU}}', { totalCPU: totalCPU }),
        React.createElement(Popover, { bodyContent: React.createElement(React.Fragment, null, t('CPUs = sockets x threads x cores.')), hasAutoWidth: true, position: PopoverPosition.bottom },
            React.createElement(Button, { className: "cpu-topology-helper-text__button", variant: ButtonVariant.plain },
                React.createElement(HelpIcon, null)))));
};
export default CPUTopologyHelperText;
//# sourceMappingURL=CPUTopologyHelperText.js.map