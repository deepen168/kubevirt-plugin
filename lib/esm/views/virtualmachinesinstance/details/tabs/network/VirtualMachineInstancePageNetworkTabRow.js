import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { TableData } from '@openshift-console/dynamic-plugin-sdk';
var VirtualMachineInstancePageNetworkTabRow = function (_a) {
    var _b;
    var activeColumnIDs = _a.activeColumnIDs, _c = _a.obj, iface = _c.iface, network = _c.network;
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "name" }, network === null || network === void 0 ? void 0 : network.name),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "model" }, (iface === null || iface === void 0 ? void 0 : iface.model) || '-'),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "network" }, (network === null || network === void 0 ? void 0 : network.pod) ? t('Pod networking') : ((_b = network === null || network === void 0 ? void 0 : network.multus) === null || _b === void 0 ? void 0 : _b.networkName) || '-'),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "type" }, (iface === null || iface === void 0 ? void 0 : iface.masquerade) ? t('masquerade') : '-'),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "macAddress" }, iface === null || iface === void 0 ? void 0 : iface.macAddress)));
};
export default VirtualMachineInstancePageNetworkTabRow;
//# sourceMappingURL=VirtualMachineInstancePageNetworkTabRow.js.map