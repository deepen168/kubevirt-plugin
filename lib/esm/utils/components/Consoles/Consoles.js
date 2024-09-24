import * as React from 'react';
import { VirtualMachineModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getGPUDevices } from '@kubevirt-utils/resources/vm';
import { isWindows } from '@kubevirt-utils/resources/vm/utils/operation-system/operationSystem';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { Bullseye, Stack, StackItem } from '@patternfly/react-core';
import { AccessConsoles } from './components/AccessConsoles/AccessConsoles';
import CloudInitCredentials from './components/CloudInitCredentials/CloudInitCredentials';
import DesktopViewer from './components/DesktopViewer/DesktopViewer';
import SerialConsoleConnector from './components/SerialConsole/SerialConsoleConnector';
import { DESKTOP_VIEWER_CONSOLE_TYPE, SERIAL_CONSOLE_TYPE, VNC_CONSOLE_TYPE, } from './components/utils/ConsoleConsts';
import VncConsole from './components/vnc-console/VncConsole';
import { INSECURE, SECURE } from './utils/constants';
import { isConnectionEncrypted, isHeadlessModeVMI } from './utils/utils';
var Consoles = function (_a) {
    var _b, _c, _d, _e;
    var vmi = _a.vmi;
    var isEncrypted = isConnectionEncrypted();
    var t = useKubevirtTranslation().t;
    var isWindowsMachine = isWindows(vmi);
    var _f = useK8sWatchResource({
        groupVersionKind: VirtualMachineModelGroupVersionKind,
        name: (_b = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _b === void 0 ? void 0 : _b.name,
        namespace: (_c = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _c === void 0 ? void 0 : _c.namespace,
    }), vm = _f[0], loaded = _f[1];
    var gpus = getGPUDevices(vm);
    var isHeadlessMode = isHeadlessModeVMI(vmi);
    return !(vmi === null || vmi === void 0 ? void 0 : vmi.metadata) ? (React.createElement(Bullseye, null,
        React.createElement(Loading, null))) : (React.createElement(Stack, { hasGutter: true },
        React.createElement(StackItem, null, !isWindowsMachine && React.createElement(CloudInitCredentials, { vm: vm })),
        React.createElement(StackItem, null,
            React.createElement(AccessConsoles, { preselectedType: VNC_CONSOLE_TYPE, textDesktopViewerConsole: t('Desktop viewer'), textSelectConsoleType: t('Select console type'), textSerialConsole: t('Serial console'), textVncConsole: t('VNC console') },
                React.createElement(VncConsole, { CustomDisabledComponent: t('Console is disabled in headless mode'), disabled: isHeadlessMode, encrypt: isEncrypted, hasGPU: !isEmpty(gpus), host: window.location.hostname, path: "api/kubernetes/apis/subresources.kubevirt.io/v1/namespaces/".concat((_d = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _d === void 0 ? void 0 : _d.namespace, "/virtualmachineinstances/").concat((_e = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _e === void 0 ? void 0 : _e.name, "/vnc"), port: window.location.port || (isEncrypted ? SECURE : INSECURE), type: VNC_CONSOLE_TYPE }),
                React.createElement(SerialConsoleConnector, { type: SERIAL_CONSOLE_TYPE, vmi: vmi }),
                isWindowsMachine && loaded && (React.createElement(DesktopViewer, { type: DESKTOP_VIEWER_CONSOLE_TYPE, vm: vm, vmi: vmi }))))));
};
export default Consoles;
//# sourceMappingURL=Consoles.js.map