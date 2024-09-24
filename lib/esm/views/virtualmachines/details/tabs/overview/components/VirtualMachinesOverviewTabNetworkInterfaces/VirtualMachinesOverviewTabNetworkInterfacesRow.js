import React from 'react';
import FirstItemListPopover from 'src/views/virtualmachines/list/components/FirstItemListPopover/FirstItemListPopover';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { getPrintableNetworkInterfaceType } from '@kubevirt-utils/resources/vm/utils/network/selectors';
import { TableData } from '@openshift-console/dynamic-plugin-sdk';
import { Popover, PopoverPosition } from '@patternfly/react-core';
var VirtualMachinesOverviewTabInterfacesRow = function (_a) {
    var _b;
    var _c, _d, _e, _f, _g, _h;
    var activeColumnIDs = _a.activeColumnIDs, obj = _a.obj;
    var t = useKubevirtTranslation().t;
    var popoverFields = (_b = {},
        _b[t('Model')] = (_c = obj === null || obj === void 0 ? void 0 : obj.iface) === null || _c === void 0 ? void 0 : _c.model,
        _b[t('Name')] = (_d = obj === null || obj === void 0 ? void 0 : obj.network) === null || _d === void 0 ? void 0 : _d.name,
        _b[t('Network')] = ((_f = (_e = obj === null || obj === void 0 ? void 0 : obj.network) === null || _e === void 0 ? void 0 : _e.multus) === null || _f === void 0 ? void 0 : _f.networkName) || t('Pod networking'),
        _b[t('Type')] = getPrintableNetworkInterfaceType(obj === null || obj === void 0 ? void 0 : obj.iface),
        _b);
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "name" },
            React.createElement("div", { "data-test-id": "network-interface-".concat((_g = obj === null || obj === void 0 ? void 0 : obj.network) === null || _g === void 0 ? void 0 : _g.name) },
                React.createElement(Popover, { bodyContent: Object.entries(popoverFields).map(function (_a) {
                        var key = _a[0], value = _a[1];
                        return (React.createElement(React.Fragment, null,
                            React.createElement("div", { className: "interface-row--title" }, key),
                            React.createElement("div", { className: "interface-row--value" }, value || NO_DATA_DASH)));
                    }), hasAutoWidth: true, position: PopoverPosition.left },
                    React.createElement("div", { className: "pf-c-description-list__text pf-m-help-text help" }, (_h = obj === null || obj === void 0 ? void 0 : obj.iface) === null || _h === void 0 ? void 0 : _h.name)))),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "ip" },
            React.createElement("div", { "data-test-id": "network-interface-".concat(obj === null || obj === void 0 ? void 0 : obj.ipAddresses) },
                React.createElement(FirstItemListPopover, { headerContent: 'IP addresses', includeCopyFirstItem: true, items: obj === null || obj === void 0 ? void 0 : obj.ipAddresses })))));
};
export default VirtualMachinesOverviewTabInterfacesRow;
//# sourceMappingURL=VirtualMachinesOverviewTabNetworkInterfacesRow.js.map