/**
 * A selector for the virtual machine instance's volumes
 * @param {V1VirtualMachineInstance} vmi the virtual machine instance
 * @returns the virtual machine instance volumes
 */
export var getVMIVolumes = function (vmi) { var _a; return (_a = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _a === void 0 ? void 0 : _a.volumes; };
/**
 * A selector for the virtual machine instance's networks
 * @param {V1VirtualMachineInstance} vmi the virtual machine instance
 * @returns the virtual machine instance networks
 */
export var getVMINetworks = function (vmi) { var _a; return (_a = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _a === void 0 ? void 0 : _a.networks; };
/**
 * A selector for the virtual machine instance's interfaces
 * @param {V1VirtualMachineInstance} vmi the virtual machine instance
 * @returns the virtual machine instance interfaces
 */
export var getVMIInterfaces = function (vmi) { var _a, _b, _c; return (_c = (_b = (_a = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _a === void 0 ? void 0 : _a.domain) === null || _b === void 0 ? void 0 : _b.devices) === null || _c === void 0 ? void 0 : _c.interfaces; };
/**
 * A selector that returns the virtual machine instance evictionStrategy
 * @param {V1VirtualMachine} vmi the virtual machine instance
 * @returns {string} the evictionStrategy
 */
export var getEvictionStrategy = function (vmi) { var _a; return (_a = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _a === void 0 ? void 0 : _a.evictionStrategy; };
/**
 * A selector that returns the interfaces listed in the virtual machine
 * instance's status block
 * @param {V1VirtualMachine} vmi the virtual machine instance
 * @returns {V1VirtualMachineInstanceNetworkInterface[]} the interfaces
 * listed in the virtual machine interface's status block
 */
export var getVMIStatusInterfaces = function (vmi) { var _a; return (_a = vmi === null || vmi === void 0 ? void 0 : vmi.status) === null || _a === void 0 ? void 0 : _a.interfaces; };
export var getVMIDevices = function (vmi) { var _a, _b; return (_b = (_a = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _a === void 0 ? void 0 : _a.domain) === null || _b === void 0 ? void 0 : _b.devices; };
export var getVMIBootLoader = function (vmi) { var _a, _b; return (_b = (_a = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _a === void 0 ? void 0 : _a.domain) === null || _b === void 0 ? void 0 : _b.firmware.bootloader; };
//# sourceMappingURL=selectors.js.map