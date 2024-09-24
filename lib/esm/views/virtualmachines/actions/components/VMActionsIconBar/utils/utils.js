import { EjectIcon, PauseIcon, PlayIcon, RedoIcon, SquareIcon } from '@patternfly/react-icons';
import { VirtualMachineActionFactory } from '@virtualmachines/actions/VirtualMachineActionFactory';
import { isPaused, isRestoring, isRunning, isSnapshotting, isStopped, } from '@virtualmachines/utils';
export var getVMActionIconsDetails = function (vm) {
    if (isSnapshotting(vm) || isRestoring(vm))
        return [];
    return [
        {
            action: VirtualMachineActionFactory.stop(vm),
            Icon: SquareIcon,
            isHidden: !isRunning(vm) && !isPaused(vm),
        },
        {
            action: VirtualMachineActionFactory.restart(vm),
            Icon: RedoIcon,
            isHidden: !isRunning(vm) && !isPaused(vm),
        },
        {
            action: VirtualMachineActionFactory.pause(vm),
            Icon: PauseIcon,
            isHidden: !isRunning(vm),
        },
        {
            action: VirtualMachineActionFactory.unpause(vm),
            Icon: EjectIcon,
            iconClassname: 'vm-actions-icon-bar__icon--unpause',
            isHidden: !isPaused(vm),
        },
        {
            action: VirtualMachineActionFactory.start(vm),
            Icon: PlayIcon,
            isHidden: !isStopped(vm),
        },
    ];
};
//# sourceMappingURL=utils.js.map