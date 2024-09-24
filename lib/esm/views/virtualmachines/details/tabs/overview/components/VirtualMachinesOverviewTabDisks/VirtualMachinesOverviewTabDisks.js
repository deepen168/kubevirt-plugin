import React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { VirtualMachineDetailsTab } from '@kubevirt-utils/constants/tabs-constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useDisksTableData from '@kubevirt-utils/resources/vm/hooks/disk/useDisksTableData';
import { VirtualizedTable } from '@openshift-console/dynamic-plugin-sdk';
import { Card, CardBody, CardTitle, Divider } from '@patternfly/react-core';
import { createURL } from '../../utils/utils';
import useVirtualMachinesOverviewTabDisksColumns from './hooks/useVirtualMachinesOverviewTabDisksColumns';
import VirtualMachinesOverviewTabDisksRow from './VirtualMachinesOverviewTabDisksRow';
import './virtual-machines-overview-tab-disks.scss';
var VirtualMachinesOverviewTabDisks = function (_a) {
    var vm = _a.vm, vmi = _a.vmi;
    var _b = useDisksTableData(vm, vmi), disks = _b[0], loaded = _b[1], loadedError = _b[2];
    var t = useKubevirtTranslation().t;
    var columns = useVirtualMachinesOverviewTabDisksColumns();
    return (React.createElement("div", { className: "VirtualMachinesOverviewTabDisks--main" },
        React.createElement(Card, null,
            React.createElement(CardTitle, { className: "text-muted" },
                React.createElement(Link, { to: createURL("".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab.Storage), location === null || location === void 0 ? void 0 : location.pathname) }, t('Storage ({{disks}})', { disks: disks.length || 0 }))),
            React.createElement(Divider, null),
            React.createElement(CardBody, { isFilled: true },
                React.createElement(VirtualizedTable, { columns: columns, data: disks, loaded: loaded, loadError: loadedError, Row: VirtualMachinesOverviewTabDisksRow, unfilteredData: disks })))));
};
export default VirtualMachinesOverviewTabDisks;
//# sourceMappingURL=VirtualMachinesOverviewTabDisks.js.map