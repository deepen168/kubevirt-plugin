import { NO_DATA_DASH } from '../constants';
import { interfacesTypes } from './constants';
/**
 * function to get network interface type
 * @param {V1Interface} iface interface
 * @returns interface type
 */
export var getNetworkInterfaceType = function (iface) {
    var _a;
    var drive = (_a = Object.keys(interfacesTypes)) === null || _a === void 0 ? void 0 : _a.find(function (ifaceType) { return iface === null || iface === void 0 ? void 0 : iface[ifaceType]; });
    return drive !== null && drive !== void 0 ? drive : NO_DATA_DASH;
};
/**
 * function to get printable network interface type
 * @param {V1Interface} iface interface
 * @returns interface type
 */
export var getPrintableNetworkInterfaceType = function (iface) {
    return interfacesTypes[getNetworkInterfaceType(iface)];
};
//# sourceMappingURL=selectors.js.map