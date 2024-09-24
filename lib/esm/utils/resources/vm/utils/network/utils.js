var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { getInterfaces, getNetworks } from '@kubevirt-utils/resources/vm';
import { getVMIInterfaces, getVMINetworks, getVMIStatusInterfaces, } from '@kubevirt-utils/resources/vmi/utils/selectors';
import { removeDuplicatesByName } from '@kubevirt-utils/utils/utils';
import { isRunning } from '@virtualmachines/utils';
import { getPrintableNetworkInterfaceType } from './selectors';
export var sortNICs = function (nics, direction) {
    return nics.sort(function (a, b) {
        var aUpdated = getPrintableNetworkInterfaceType(a.iface);
        var bUpdated = getPrintableNetworkInterfaceType(b.iface);
        if (aUpdated && bUpdated) {
            return direction === 'asc'
                ? aUpdated.localeCompare(bUpdated)
                : bUpdated.localeCompare(aUpdated);
        }
    });
};
export var getInterfacesAndNetworks = function (vm, vmi) {
    var vmNetworks = getNetworks(vm) || [];
    var vmInterfaces = getInterfaces(vm) || [];
    var vmiInterfaces = (isRunning(vm) ? getVMIStatusInterfaces(vmi) : getVMIInterfaces(vmi)) || [];
    var vmiNetworks = getVMINetworks(vmi) || [];
    var networks = removeDuplicatesByName(__spreadArray(__spreadArray([], vmNetworks, true), vmiNetworks, true));
    var interfaces = removeDuplicatesByName(__spreadArray(__spreadArray([], vmInterfaces, true), vmiInterfaces, true));
    return {
        interfaces: interfaces,
        networks: networks,
    };
};
//# sourceMappingURL=utils.js.map