import { DEFAULT_NETWORK, DEFAULT_NETWORK_INTERFACE } from '../constants';
/**
 * function to get network interfaces row data from networks and interfaces
 * @param {V1Network[]} networks networks
 * @param {V1Interface[]} interfaces networks interfaces
 * @param autoattachPodInterface
 * @returns returns a network presentation array
 */
export var getNetworkInterfaceRowData = function (networks, interfaces, autoattachPodInterface) {
    var data = (interfaces || []).map(function (iface) {
        var network = networks === null || networks === void 0 ? void 0 : networks.find(function (net) { return net.name === iface.name; });
        return {
            iface: iface,
            metadata: { name: network.name },
            network: network,
        };
    });
    if (autoattachPodInterface)
        data.push({
            iface: DEFAULT_NETWORK_INTERFACE,
            metadata: { name: DEFAULT_NETWORK.name },
            network: DEFAULT_NETWORK,
        });
    return data || [];
};
//# sourceMappingURL=rowData.js.map