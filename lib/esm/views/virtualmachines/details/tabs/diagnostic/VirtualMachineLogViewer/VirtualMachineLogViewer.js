import React from 'react';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { getChangedGuestSystemAccessLog } from '@kubevirt-utils/components/PendingChanges/utils/helpers';
import { DISABLED_GUEST_SYSTEM_LOGS_ACCESS } from '@kubevirt-utils/hooks/useFeatures/constants';
import { useFeatures } from '@kubevirt-utils/hooks/useFeatures/useFeatures';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getDevices, useVMIAndPodsForVM } from '@kubevirt-utils/resources/vm';
import { getVMIPod } from '@kubevirt-utils/resources/vmi';
import { Bullseye } from '@patternfly/react-core';
import { isRunning } from '@virtualmachines/utils';
import useVirtualMachineLogData from './hooks/useVirtualMachineLogData';
import VirtualMachineBasicLogViewer from './VirtualMachineBasicLogViewer/VirtualMachineBasicLogViewer';
var VirtualMachineLogViewer = function (_a) {
    var _b, _c, _d, _e, _f;
    var connect = _a.connect, vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var _g = useVMIAndPodsForVM((_b = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _b === void 0 ? void 0 : _b.name, (_c = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _c === void 0 ? void 0 : _c.namespace), loaded = _g.loaded, pods = _g.pods, vmi = _g.vmi;
    var pod = getVMIPod(vmi, pods);
    var isClusterDisabledGuestSystemLogs = useFeatures(DISABLED_GUEST_SYSTEM_LOGS_ACCESS).featureEnabled;
    var isDisabledAtVM = ((_d = getDevices(vm)) === null || _d === void 0 ? void 0 : _d.logSerialConsole) === false &&
        !isClusterDisabledGuestSystemLogs;
    var isNeededRestart = getChangedGuestSystemAccessLog(vm, vmi);
    var isPodLogContainerExist = Boolean((_f = (_e = pod === null || pod === void 0 ? void 0 : pod.spec) === null || _e === void 0 ? void 0 : _e.containers) === null || _f === void 0 ? void 0 : _f.find(function (container) { return (container === null || container === void 0 ? void 0 : container.name) === 'guest-console-log'; }));
    var data = useVirtualMachineLogData({ connect: connect && isPodLogContainerExist, pod: pod }).data;
    if (!loaded) {
        return (React.createElement(Bullseye, null,
            React.createElement(Loading, null)));
    }
    if (!isRunning(vm)) {
        return React.createElement(Bullseye, null, t('Virtual machine is not running'));
    }
    if (isClusterDisabledGuestSystemLogs) {
        return React.createElement(Bullseye, null, t('Guest system logs are disabled at cluster'));
    }
    if (isNeededRestart || !isPodLogContainerExist) {
        return React.createElement(Bullseye, null, t('Guest system logs not ready. Restart required'));
    }
    if (isDisabledAtVM) {
        return React.createElement(Bullseye, null, t('Guest system logs are disabled at VirtualMachine'));
    }
    return React.createElement(VirtualMachineBasicLogViewer, { data: data, vmi: vmi });
};
export default VirtualMachineLogViewer;
//# sourceMappingURL=VirtualMachineLogViewer.js.map