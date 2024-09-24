import React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { VirtualMachineDetailsTab } from '@kubevirt-utils/constants/tabs-constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { VirtualizedTable } from '@openshift-console/dynamic-plugin-sdk';
import { Card, CardBody, CardTitle, Divider } from '@patternfly/react-core';
import { createURL } from '../../utils/utils';
import VirtualMachinesOverviewTabNetworkFQDN from './components/VirtualMachinesOverviewTabNetworkFQDN';
import useVirtualMachinesOverviewTabInterfacesColumns from './hooks/useVirtualMachinesOverviewTabInterfacesColumns';
import useVirtualMachinesOverviewTabInterfacesData from './hooks/useVirtualMachinesOverviewTabInterfacesData';
import VirtualMachinesOverviewTabNetworkInterfacesRow from './VirtualMachinesOverviewTabNetworkInterfacesRow';
import './virtual-machines-overview-tab-interfaces.scss';
var VirtualMachinesOverviewTabInterfaces = function (_a) {
    var vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var data = useVirtualMachinesOverviewTabInterfacesData(vm, vmi);
    var columns = useVirtualMachinesOverviewTabInterfacesColumns();
    return (React.createElement("div", { className: "VirtualMachinesOverviewTabInterfaces--main" },
        React.createElement(Card, null,
            React.createElement(CardTitle, { className: "text-muted" },
                React.createElement(Link, { to: createURL("".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab.Network), location === null || location === void 0 ? void 0 : location.pathname) }, t('Network ({{count}})', { count: (data === null || data === void 0 ? void 0 : data.length) || 0 }))),
            React.createElement(Divider, null),
            React.createElement(CardBody, { isFilled: true },
                React.createElement(VirtualizedTable, { NoDataEmptyMsg: function () { return (React.createElement("div", { className: "pf-u-text-align-center no-data-empty-message" }, t('No network interfaces found'))); }, columns: columns, data: data, loaded: true, loadError: false, Row: VirtualMachinesOverviewTabNetworkInterfacesRow, unfilteredData: data }),
                React.createElement(VirtualMachinesOverviewTabNetworkFQDN, { vm: vm })))));
};
export default VirtualMachinesOverviewTabInterfaces;
//# sourceMappingURL=VirtualMachinesOverviewTabNetworkInterfaces.js.map