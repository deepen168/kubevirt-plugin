export var useVirtualMachineInstanceNetworkTab = function (vmi) {
    var _a, _b, _c, _d;
    var networks = (_a = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _a === void 0 ? void 0 : _a.networks;
    var interfaces = (_d = (_c = (_b = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _b === void 0 ? void 0 : _b.domain) === null || _c === void 0 ? void 0 : _c.devices) === null || _d === void 0 ? void 0 : _d.interfaces;
    var data = interfaces === null || interfaces === void 0 ? void 0 : interfaces.map(function (iface) {
        var network = networks === null || networks === void 0 ? void 0 : networks.find(function (net) { return (net === null || net === void 0 ? void 0 : net.name) === (iface === null || iface === void 0 ? void 0 : iface.name); });
        return {
            iface: iface,
            network: network,
        };
    });
    return [data || []];
};
export default useVirtualMachineInstanceNetworkTab;
//# sourceMappingURL=useVirtualMachineInstanceNetworkTab.js.map