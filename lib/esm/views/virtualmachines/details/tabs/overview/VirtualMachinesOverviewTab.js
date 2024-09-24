import React from 'react';
import AlertsCard from '@kubevirt-utils/components/AlertsCard/AlertsCard';
import { useVMIAndPodsForVM } from '@kubevirt-utils/resources/vm';
import { useGuestOS } from '@kubevirt-utils/resources/vmi';
import { Grid, GridItem } from '@patternfly/react-core';
import VirtualMachinesOverviewTabActiveUser from './components/VirtualMachinesOverviewTabActiveUser/VirtualMachinesOverviewTabActiveUser';
import VirtualMachinesOverviewTabDetails from './components/VirtualMachinesOverviewTabDetails/VirtualMachinesOverviewTabDetails';
import VirtualMachinesOverviewTabDisks from './components/VirtualMachinesOverviewTabDisks/VirtualMachinesOverviewTabDisks';
import VirtualMachinesOverviewTabFilesystem from './components/VirtualMachinesOverviewTabFilesystem/VirtualMachinesOverviewTabFilesystem';
import VirtualMachinesOverviewTabGeneral from './components/VirtualMachinesOverviewTabGeneral/VirtualMachinesOverviewTabGeneral';
import VirtualMachinesOverviewTabHardwareDevices from './components/VirtualMachinesOverviewTabHardwareDevices/VirtualMachinesOverviewTabHardwareDevices';
import VirtualMachinesOverviewTabNetworkInterfaces from './components/VirtualMachinesOverviewTabNetworkInterfaces/VirtualMachinesOverviewTabNetworkInterfaces';
import VirtualMachinesOverviewTabService from './components/VirtualMachinesOverviewTabService/VirtualMachinesOverviewTabService';
import VirtualMachinesOverviewTabSnapshots from './components/VirtualMachinesOverviewTabSnapshots/VirtualMachinesOverviewTabSnapshots';
import VirtualMachinesOverviewTabUtilization from './components/VirtualMachinesOverviewTabUtilization/VirtualMachinesOverviewTabUtilization';
import useVMAlerts from './utils/hook/useVMAlerts';
var VirtualMachinesOverviewTab = function (_a) {
    var _b, _c;
    var instanceTypeExpandedSpec = _a.instanceTypeExpandedSpec, vm = _a.obj;
    var vmAlerts = useVMAlerts(vm);
    var _d = useVMIAndPodsForVM((_b = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _b === void 0 ? void 0 : _b.name, (_c = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _c === void 0 ? void 0 : _c.namespace), error = _d.error, loaded = _d.loaded, pods = _d.pods, vmi = _d.vmi;
    var _e = useGuestOS(vmi), guestAgentData = _e[0], guestAgentDataLoaded = _e[1], guestAgentDataLoadError = _e[2];
    return (React.createElement(Grid, { className: "co-dashboard-body", hasGutter: true },
        React.createElement(GridItem, { span: 8 },
            React.createElement(Grid, { hasGutter: true },
                React.createElement(GridItem, null,
                    React.createElement(VirtualMachinesOverviewTabDetails, { error: error, guestAgentData: guestAgentData, guestAgentDataLoaded: guestAgentDataLoaded, instanceTypeExpandedSpec: instanceTypeExpandedSpec, loaded: loaded, vm: vm, vmi: vmi })),
                React.createElement(GridItem, null,
                    React.createElement(VirtualMachinesOverviewTabUtilization, { pods: pods, vm: vm, vmi: vmi })))),
        React.createElement(GridItem, { span: 4 },
            React.createElement(Grid, { hasGutter: true },
                React.createElement(GridItem, null,
                    React.createElement(AlertsCard, { sortedAlerts: vmAlerts })),
                React.createElement(GridItem, null,
                    React.createElement(VirtualMachinesOverviewTabGeneral, { pods: pods, vm: vm, vmi: vmi })),
                React.createElement(GridItem, null,
                    React.createElement(VirtualMachinesOverviewTabSnapshots, { vm: vm })),
                React.createElement(GridItem, null,
                    React.createElement(VirtualMachinesOverviewTabNetworkInterfaces, { vm: vm, vmi: vmi })),
                React.createElement(GridItem, null,
                    React.createElement(VirtualMachinesOverviewTabDisks, { vm: vm, vmi: vmi })))),
        React.createElement(VirtualMachinesOverviewTabHardwareDevices, { vm: vm }),
        React.createElement(VirtualMachinesOverviewTabFilesystem, { guestAgentData: guestAgentData, guestAgentDataLoaded: guestAgentDataLoaded, vm: vm }),
        React.createElement(VirtualMachinesOverviewTabService, { vm: vm }),
        React.createElement(VirtualMachinesOverviewTabActiveUser, { guestAgentData: guestAgentData, guestAgentDataLoaded: guestAgentDataLoaded, guestAgentDataLoadError: guestAgentDataLoadError, vmi: vmi })));
};
export default VirtualMachinesOverviewTab;
//# sourceMappingURL=VirtualMachinesOverviewTab.js.map