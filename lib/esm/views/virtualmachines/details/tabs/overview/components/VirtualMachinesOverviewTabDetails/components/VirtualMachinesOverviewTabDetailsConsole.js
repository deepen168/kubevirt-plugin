import React from 'react';
import { VNC_CONSOLE_TYPE } from '@kubevirt-utils/components/Consoles/components/utils/ConsoleConsts';
import VncConsole from '@kubevirt-utils/components/Consoles/components/vnc-console/VncConsole';
import { INSECURE, SECURE } from '@kubevirt-utils/components/Consoles/utils/constants';
import { isConnectionEncrypted, isHeadlessModeVMI, } from '@kubevirt-utils/components/Consoles/utils/utils';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { vmiStatuses } from '@kubevirt-utils/resources/vmi';
import { useAccessReview } from '@openshift-console/dynamic-plugin-sdk';
import { Bullseye, Button } from '@patternfly/react-core';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import VirtualMachinesOverviewTabDetailsConsoleConnect from './VirtualMachinesOverviewTabDetailsConsoleConnect';
var VirtualMachinesOverviewTabDetailsConsole = function (_a) {
    var _b, _c, _d, _e, _f;
    var vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var isEncrypted = isConnectionEncrypted();
    var isHeadlessMode = isHeadlessModeVMI(vmi);
    var isVMRunning = ((_b = vmi === null || vmi === void 0 ? void 0 : vmi.status) === null || _b === void 0 ? void 0 : _b.phase) === vmiStatuses.Running;
    var canConnectConsole = useAccessReview({
        group: 'subresources.kubevirt.io',
        name: (_c = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _c === void 0 ? void 0 : _c.name,
        namespace: (_d = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _d === void 0 ? void 0 : _d.namespace,
        resource: 'virtualmachineinstances/vnc',
        verb: 'get',
    })[0];
    return (React.createElement(Bullseye, { className: "bullseye" },
        isVMRunning && !isHeadlessMode && canConnectConsole ? (React.createElement(React.Fragment, null,
            React.createElement(VncConsole, { CustomConnectComponent: VirtualMachinesOverviewTabDetailsConsoleConnect, encrypt: isEncrypted, host: window.location.hostname, path: "api/kubernetes/apis/subresources.kubevirt.io/v1/namespaces/".concat((_e = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _e === void 0 ? void 0 : _e.namespace, "/virtualmachineinstances/").concat((_f = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _f === void 0 ? void 0 : _f.name, "/vnc"), port: window.location.port || (isEncrypted ? SECURE : INSECURE), scaleViewport: true, showAccessControls: false, type: VNC_CONSOLE_TYPE }))) : (React.createElement("div", { className: "pf-c-console__vnc" },
            React.createElement(VirtualMachinesOverviewTabDetailsConsoleConnect, { isDisabled: true, isHeadlessMode: isHeadlessMode }))),
        React.createElement("div", { className: "link" },
            React.createElement(Button, { onClick: function () {
                    var _a, _b;
                    return window.open("/k8s/ns/".concat((_a = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _a === void 0 ? void 0 : _a.namespace, "/kubevirt.io~v1~VirtualMachine/").concat((_b = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _b === void 0 ? void 0 : _b.name, "/console/standalone"));
                }, isDisabled: !isVMRunning || isHeadlessMode || !canConnectConsole, variant: "link" },
                t('Open web console'),
                React.createElement(ExternalLinkAltIcon, { className: "icon" })))));
};
export default VirtualMachinesOverviewTabDetailsConsole;
//# sourceMappingURL=VirtualMachinesOverviewTabDetailsConsole.js.map