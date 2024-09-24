import * as React from 'react';
import TemplateValue from '@kubevirt-utils/components/TemplateValue/TemplateValue';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { getPrintableNetworkInterfaceType } from '@kubevirt-utils/resources/vm/utils/network/selectors';
import { TableData } from '@openshift-console/dynamic-plugin-sdk';
import NetworkInterfaceActions from './NetworkInterfaceActions';
var NetworkInterfaceRow = function (_a) {
    var _b;
    var activeColumnIDs = _a.activeColumnIDs, _c = _a.obj, iface = _c.iface, network = _c.network, template = _a.rowData.template;
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "name" },
            React.createElement(TemplateValue, { value: network.name })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "model" }, iface.model || NO_DATA_DASH),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "network" }, network.pod ? (t('Pod networking')) : (React.createElement(TemplateValue, { value: ((_b = network.multus) === null || _b === void 0 ? void 0 : _b.networkName) || NO_DATA_DASH }))),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "type" }, getPrintableNetworkInterfaceType(iface)),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "macAddress" },
            React.createElement(TemplateValue, { value: iface.macAddress || NO_DATA_DASH })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "dropdown-kebab-pf pf-v5-c-table__action", id: "" },
            React.createElement(NetworkInterfaceActions, { nicName: network.name, nicPresentation: { iface: iface, network: network }, template: template }))));
};
export default NetworkInterfaceRow;
//# sourceMappingURL=NetworkInterfaceRow.js.map