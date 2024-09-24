import { getAutoAttachPodInterface, getInterfaces } from '@kubevirt-utils/resources/vm';
import { DEFAULT_NETWORK_INTERFACE } from '@kubevirt-utils/resources/vm/utils/constants';
import { getVMIInterfaces, getVMIStatusInterfaces } from '@kubevirt-utils/resources/vmi';
import { isRunning, isStopped } from '@virtualmachines/utils';
import { ABSENT } from './constants';
export var isActiveOnGuest = function (vmi, nicName, isVMRunning) {
    var _a;
    return (_a = (isVMRunning ? getVMIStatusInterfaces(vmi) : getVMIInterfaces(vmi))) === null || _a === void 0 ? void 0 : _a.some(function (iface) { return (iface === null || iface === void 0 ? void 0 : iface.name) === nicName; });
};
export var isAbsent = function (vm, nicName) { var _a, _b; return ((_b = (_a = getInterfaces(vm)) === null || _a === void 0 ? void 0 : _a.find(function (iface) { return (iface === null || iface === void 0 ? void 0 : iface.name) === nicName; })) === null || _b === void 0 ? void 0 : _b.state) === ABSENT; };
export var isPendingHotPlugNIC = function (vm, vmi, nicName) {
    var vmRunning = isRunning(vm);
    return vmRunning && (!isActiveOnGuest(vmi, nicName, vmRunning) || isAbsent(vm, nicName));
};
export var interfaceNotFound = function (vm, nicName) { var _a; return !Boolean((_a = getInterfaces(vm)) === null || _a === void 0 ? void 0 : _a.find(function (iface) { return (iface === null || iface === void 0 ? void 0 : iface.name) === nicName; })); };
export var isPendingRemoval = function (vm, vmi, nicName) {
    if (!vmi || isStopped(vm))
        return false;
    var isVMRunning = isRunning(vm);
    var autoAttachPodInterface = getAutoAttachPodInterface(vm) !== false;
    if (autoAttachPodInterface &&
        nicName === DEFAULT_NETWORK_INTERFACE.name &&
        isActiveOnGuest(vmi, nicName, isVMRunning))
        return false;
    return interfaceNotFound(vm, nicName) && isActiveOnGuest(vmi, nicName, isVMRunning);
};
//# sourceMappingURL=utils.js.map