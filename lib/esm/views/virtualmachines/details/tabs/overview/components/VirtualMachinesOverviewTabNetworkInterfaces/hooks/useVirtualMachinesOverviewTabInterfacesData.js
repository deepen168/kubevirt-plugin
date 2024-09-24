import { getInterfacesAndNetworks } from '@kubevirt-utils/resources/vm/utils/network/utils';
var useVirtualMachinesOverviewTabInterfacesData = function (vm, vmi) {
    var _a, _b;
    var _c = getInterfacesAndNetworks(vm, vmi), interfaces = _c.interfaces, networks = _c.networks;
    var interfacesIPs = ((_b = (_a = vmi === null || vmi === void 0 ? void 0 : vmi.status) === null || _a === void 0 ? void 0 : _a.interfaces) === null || _b === void 0 ? void 0 : _b.filter(function (iface) { return !!iface.name; })) || [];
    var networkInterfacesData = interfaces === null || interfaces === void 0 ? void 0 : interfaces.map(function (iface) {
        var _a;
        var network = networks === null || networks === void 0 ? void 0 : networks.find(function (net) { return net.name === iface.name; });
        var nic = (interfacesIPs === null || interfacesIPs === void 0 ? void 0 : interfacesIPs.find(function (iIP) { return iIP.name === iface.name; })) || {};
        var ipAddresses = (_a = nic === null || nic === void 0 ? void 0 : nic.ipAddresses) === null || _a === void 0 ? void 0 : _a.map(function (ip) { return ({
            interfaceName: nic === null || nic === void 0 ? void 0 : nic.interfaceName,
            ip: ip,
        }); });
        return {
            iface: iface,
            ipAddresses: ipAddresses,
            network: network,
        };
    });
    return networkInterfacesData;
};
export default useVirtualMachinesOverviewTabInterfacesData;
//# sourceMappingURL=useVirtualMachinesOverviewTabInterfacesData.js.map