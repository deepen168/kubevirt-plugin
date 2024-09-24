import * as React from 'react';
import { WizardDescriptionItem } from '@catalog/wizard/components/WizardDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getNetworkInterfaceRowData } from '@kubevirt-utils/resources/vm/utils/network/rowData';
import { getPrintableNetworkInterfaceType } from '@kubevirt-utils/resources/vm/utils/network/selectors';
import { DescriptionList, Stack, StackItem } from '@patternfly/react-core';
export var interfacesTypes = {
    bridge: 'Bridge',
    masquerade: 'Masquerade',
    sriov: 'SR-IOV',
};
export var WizardOverviewNetworksTable = React.memo(function (_a) {
    var _b = _a.interfaces, interfaces = _b === void 0 ? [] : _b, isInlineGrid = _a.isInlineGrid, _c = _a.networks, networks = _c === void 0 ? [] : _c;
    var t = useKubevirtTranslation().t;
    var networkData = getNetworkInterfaceRowData(networks, interfaces);
    return (React.createElement(DescriptionList, { className: "pf-c-description-list", columnModifier: { default: '3Col' }, isInlineGrid: isInlineGrid },
        React.createElement(WizardDescriptionItem, { description: React.createElement(Stack, null, networkData.map(function (n) { return (React.createElement(StackItem, { key: n.network.name }, n.network.name)); })), title: t('Name') }),
        React.createElement(WizardDescriptionItem, { description: React.createElement(Stack, null, networkData.map(function (n) {
                var _a;
                return (React.createElement(StackItem, { key: n.network.name }, n.network.pod ? t('Pod networking') : ((_a = n.network.multus) === null || _a === void 0 ? void 0 : _a.networkName) || '-'));
            })), title: t('Network') }),
        React.createElement(WizardDescriptionItem, { description: React.createElement(Stack, null, networkData.map(function (n) { return (React.createElement(StackItem, { key: n.iface.name }, getPrintableNetworkInterfaceType(n.iface))); })), title: t('Type') })));
});
WizardOverviewNetworksTable.displayName = 'WizardOverviewNetworksTable';
//# sourceMappingURL=WizardOverviewNetworksTable.js.map