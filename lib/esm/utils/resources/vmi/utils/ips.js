var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { isEmpty } from '@kubevirt-utils/utils/utils';
/**
 * Get VMI IPs
 * @date 3/20/2022 - 12:18:23 PM
 *
 * @param {V1VirtualMachineInstance} vmi - VMI
 * @returns {string[]}
 */
export var getVMIIPAddresses = function (vmi) {
    var _a, _b;
    var namedInterfaces = ((_b = (_a = vmi === null || vmi === void 0 ? void 0 : vmi.status) === null || _a === void 0 ? void 0 : _a.interfaces) === null || _b === void 0 ? void 0 : _b.filter(function (iface) { return !!iface.name; })) || [];
    var ipAddresses = namedInterfaces === null || namedInterfaces === void 0 ? void 0 : namedInterfaces.flatMap(function (iface) { return __spreadArray([
        iface === null || iface === void 0 ? void 0 : iface.ipAddress
    ], ((iface === null || iface === void 0 ? void 0 : iface.ipAddresses) || []), true); });
    var trimmedIPAddresses = ipAddresses === null || ipAddresses === void 0 ? void 0 : ipAddresses.filter(function (ip) { return !isEmpty(ip); });
    return __spreadArray([], new Set(trimmedIPAddresses), true);
};
export var getVMIIPAddressesWithName = function (vmi) {
    var _a, _b;
    var namedInterfaces = ((_b = (_a = vmi === null || vmi === void 0 ? void 0 : vmi.status) === null || _a === void 0 ? void 0 : _a.interfaces) === null || _b === void 0 ? void 0 : _b.filter(function (iface) { return !!iface.name; })) || [];
    return namedInterfaces === null || namedInterfaces === void 0 ? void 0 : namedInterfaces.reduce(function (acc, iface) {
        var ips = __spreadArray([], new Set(__spreadArray([iface === null || iface === void 0 ? void 0 : iface.ipAddress], ((iface === null || iface === void 0 ? void 0 : iface.ipAddresses) || []), true)), true);
        if (!isEmpty(ips)) {
            for (var _i = 0, ips_1 = ips; _i < ips_1.length; _i++) {
                var ip = ips_1[_i];
                acc.push({ interfaceName: iface === null || iface === void 0 ? void 0 : iface.interfaceName, ip: ip });
            }
        }
        return acc;
    }, []);
};
//# sourceMappingURL=ips.js.map