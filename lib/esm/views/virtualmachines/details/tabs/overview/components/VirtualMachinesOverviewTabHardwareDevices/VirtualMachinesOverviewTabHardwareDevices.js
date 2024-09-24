import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getGPUDevices, getHostDevices } from '@kubevirt-utils/resources/vm';
import { VirtualizedTable } from '@openshift-console/dynamic-plugin-sdk';
import { Card, CardBody, CardTitle, Divider, Tab, Tabs, TabTitleText, } from '@patternfly/react-core';
import useHardwareDevicesColumns from './hooks/useHardwareDevicesColumns';
import VirtualMachinesOverviewTabHardwareDevicesRow from './VirtualMachinesOverviewTabHardwareDevicesRow';
import './virtual-machines-overview-tab-hardware-devices.scss';
var VirtualMachinesOverviewTabHardwareDevices = function (_a) {
    var vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var columns = useHardwareDevicesColumns();
    var _b = React.useState(0), activeTabKey = _b[0], setActiveTabKey = _b[1];
    var hostDevices = getHostDevices(vm);
    var hostDevicesCount = hostDevices === null || hostDevices === void 0 ? void 0 : hostDevices.length;
    var gpus = getGPUDevices(vm);
    var gpusCount = gpus === null || gpus === void 0 ? void 0 : gpus.length;
    var handleTabClick = function (_, tabIndex) {
        setActiveTabKey(tabIndex);
    };
    return (React.createElement("div", { className: "VirtualMachinesOverviewTabHardware--main" },
        React.createElement(Card, null,
            React.createElement(CardTitle, { className: "text-muted" }, t('Hardware devices ({{devices}})', { devices: hostDevicesCount + gpusCount })),
            React.createElement(Divider, null),
            React.createElement(CardBody, { isFilled: true },
                React.createElement(Tabs, { activeKey: activeTabKey, onSelect: handleTabClick },
                    React.createElement(Tab, { eventKey: 0, title: React.createElement(TabTitleText, null, t('GPU devices ({{gpusCount}})', { gpusCount: gpusCount })) },
                        React.createElement(VirtualizedTable, { columns: columns, data: gpus, loaded: true, loadError: false, Row: VirtualMachinesOverviewTabHardwareDevicesRow, unfilteredData: gpus })),
                    React.createElement(Tab, { title: React.createElement(TabTitleText, null, t('Host devices ({{hostDevicesCount}})', { hostDevicesCount: hostDevicesCount })), eventKey: 1 },
                        React.createElement(VirtualizedTable, { columns: columns, data: hostDevices, loaded: true, loadError: false, Row: VirtualMachinesOverviewTabHardwareDevicesRow, unfilteredData: hostDevices })))))));
};
export default VirtualMachinesOverviewTabHardwareDevices;
//# sourceMappingURL=VirtualMachinesOverviewTabHardwareDevices.js.map