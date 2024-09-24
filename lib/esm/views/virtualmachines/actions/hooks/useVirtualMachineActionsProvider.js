import * as React from 'react';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import { getConsoleVirtctlCommand } from '@kubevirt-utils/components/SSHAccess/utils';
import { VirtualMachineModelRef } from '@kubevirt-utils/models';
import { vmimStatuses } from '@kubevirt-utils/resources/vmim/statuses';
import { useK8sModel } from '@openshift-console/dynamic-plugin-sdk';
import { printableVMStatus } from '../../utils';
import { VirtualMachineActionFactory } from '../VirtualMachineActionFactory';
var useVirtualMachineActionsProvider = function (vm, vmim, isSingleNodeCluster) {
    var createModal = useModal().createModal;
    var virtctlCommand = getConsoleVirtctlCommand(vm);
    var _a = useK8sModel(VirtualMachineModelRef), inFlight = _a[1];
    var actions = React.useMemo(function () {
        var _a, _b;
        var printableStatus = (_a = vm === null || vm === void 0 ? void 0 : vm.status) === null || _a === void 0 ? void 0 : _a.printableStatus;
        var Migrating = printableVMStatus.Migrating, Paused = printableVMStatus.Paused;
        var startOrStop = (function (printableStatusMachine) {
            var map = {
                default: VirtualMachineActionFactory.stop(vm),
                Stopped: VirtualMachineActionFactory.start(vm),
                Stopping: VirtualMachineActionFactory.forceStop(vm),
                Terminating: VirtualMachineActionFactory.forceStop(vm),
            };
            return map[printableStatusMachine] || map.default;
        })(printableStatus);
        var migrateOrCancelMigration = printableStatus === Migrating ||
            (vmim && ![vmimStatuses.Failed, vmimStatuses.Succeeded].includes((_b = vmim === null || vmim === void 0 ? void 0 : vmim.status) === null || _b === void 0 ? void 0 : _b.phase))
            ? VirtualMachineActionFactory.cancelMigration(vm, vmim, isSingleNodeCluster)
            : VirtualMachineActionFactory.migrate(vm, isSingleNodeCluster);
        var pauseOrUnpause = printableStatus === Paused
            ? VirtualMachineActionFactory.unpause(vm)
            : VirtualMachineActionFactory.pause(vm);
        return [
            startOrStop,
            VirtualMachineActionFactory.restart(vm),
            pauseOrUnpause,
            VirtualMachineActionFactory.clone(vm, createModal),
            VirtualMachineActionFactory.snapshot(vm, createModal),
            migrateOrCancelMigration,
            // VirtualMachineActionFactory.openConsole(vm),
            VirtualMachineActionFactory.copySSHCommand(vm, virtctlCommand),
            VirtualMachineActionFactory.editLabels(vm, createModal),
            VirtualMachineActionFactory.editAnnotations(vm, createModal),
            VirtualMachineActionFactory.delete(vm, createModal),
        ];
    }, [vm, vmim, isSingleNodeCluster, createModal, virtctlCommand]);
    return React.useMemo(function () { return [actions, !inFlight, undefined]; }, [actions, inFlight]);
};
export default useVirtualMachineActionsProvider;
//# sourceMappingURL=useVirtualMachineActionsProvider.js.map