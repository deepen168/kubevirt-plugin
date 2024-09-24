import React, { useMemo } from 'react';
import { Link } from 'react-router-dom-v5-compat';
import CPUMemory from '@kubevirt-utils/components/CPUMemory/CPUMemory';
import GuestAgentIsRequiredText from '@kubevirt-utils/components/GuestAgentIsRequiredText/GuestAgentIsRequiredText';
import { timestampFor } from '@kubevirt-utils/components/Timestamp/utils/datetime';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { VirtualMachineDetailsTab } from '@kubevirt-utils/constants/tabs-constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getName, getVMStatus } from '@kubevirt-utils/resources/shared';
import { getInstanceTypeMatcher, getMachineType } from '@kubevirt-utils/resources/vm';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { getOsNameFromGuestAgent } from '@kubevirt-utils/resources/vmi';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Timestamp } from '@openshift-console/dynamic-plugin-sdk';
import { Card, CardBody, CardTitle, DescriptionList, Divider, Grid, GridItem, pluralize, Skeleton, Split, SplitItem, } from '@patternfly/react-core';
import { createURL } from '@virtualmachines/details/tabs/overview/utils/utils';
import VMNotMigratableLabel from '@virtualmachines/list/components/VMNotMigratableLabel/VMNotMigratableLabel';
import { printableVMStatus } from '@virtualmachines/utils';
import InstanceTypeDescription from './components/InstanceTypeDescription';
import TemplateDescription from './components/TemplateDescription';
import VirtualMachineMigrationPercentage from './components/VirtualMachineMigrationPercentage';
import VirtualMachinesOverviewTabDetailsConsole from './components/VirtualMachinesOverviewTabDetailsConsole';
import StatusPopover from './components/VirtualMachineStatusWithPopover/VirtualMachineStatusWithPopover';
import './virtual-machines-overview-tab-details.scss';
var VirtualMachinesOverviewTabDetails = function (_a) {
    var _b, _c, _d;
    var error = _a.error, guestAgentData = _a.guestAgentData, guestAgentDataLoaded = _a.guestAgentDataLoaded, instanceTypeExpandedSpec = _a.instanceTypeExpandedSpec, loaded = _a.loaded, vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var timestamp = timestampFor(new Date((_b = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _b === void 0 ? void 0 : _b.creationTimestamp), new Date(Date.now()), true);
    var timestampPluralized = pluralize(timestamp['value'], timestamp['time']);
    var _e = useMemo(function () {
        var isLoadingVMI = !loaded && !error;
        if (!guestAgentDataLoaded || isLoadingVMI)
            return {
                fallback: React.createElement(Skeleton, null),
            };
        if (!isEmpty(guestAgentData))
            return {
                hostname: guestAgentData === null || guestAgentData === void 0 ? void 0 : guestAgentData.hostname,
                osName: getOsNameFromGuestAgent(guestAgentData),
            };
        return {
            fallback: React.createElement(GuestAgentIsRequiredText, { vmi: vmi }),
        };
    }, [loaded, error, guestAgentDataLoaded, guestAgentData, vmi]), fallback = _e.fallback, hostname = _e.hostname, osName = _e.osName;
    var vmPrintableStatus = getVMStatus(vm);
    return (React.createElement("div", { className: "VirtualMachinesOverviewTabDetails--details" },
        React.createElement(Card, null,
            React.createElement(CardTitle, { className: "text-muted card-title" },
                React.createElement(Link, { to: createURL("".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab.Details), location === null || location === void 0 ? void 0 : location.pathname) }, t('Details'))),
            React.createElement(Divider, null),
            React.createElement(CardBody, { isFilled: true },
                React.createElement(Grid, null,
                    React.createElement(GridItem, { span: 5 },
                        React.createElement(DescriptionList, { className: "pf-c-description-list", isHorizontal: true },
                            React.createElement(VirtualMachineDescriptionItem, { "data-test-id": "virtual-machine-overview-details-name", descriptionData: getName(vm), descriptionHeader: t('Name') }),
                            React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(Split, { hasGutter: true, isWrappable: true },
                                    React.createElement(SplitItem, null,
                                        React.createElement(StatusPopover, { vm: vm, vmi: vmi }),
                                        vmPrintableStatus === printableVMStatus.Migrating && (React.createElement(VirtualMachineMigrationPercentage, { vm: vm }))),
                                    React.createElement(VMNotMigratableLabel, { vm: vm })), "data-test-id": "virtual-machine-overview-details-status", descriptionHeader: t('Status') }),
                            React.createElement(VirtualMachineDescriptionItem, { descriptionData: timestamp !== NO_DATA_DASH ? (React.createElement(React.Fragment, null,
                                    React.createElement(Timestamp, { simple: true, timestamp: (_c = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _c === void 0 ? void 0 : _c.creationTimestamp }),
                                    " (",
                                    t('{{timestampPluralized}} ago', { timestampPluralized: timestampPluralized }),
                                    ")")) : (NO_DATA_DASH), "data-test-id": "virtual-machine-overview-details-created", descriptionHeader: t('Created') }),
                            React.createElement(VirtualMachineDescriptionItem, { "data-test-id": "virtual-machine-overview-details-os", descriptionData: osName !== null && osName !== void 0 ? osName : fallback, descriptionHeader: t('Operating system') }),
                            React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(CPUMemory, { vm: instanceTypeExpandedSpec || vm, vmi: vmi }), descriptionHeader: t('CPU | Memory') }),
                            React.createElement(VirtualMachineDescriptionItem, { "data-test-id": "virtual-machine-overview-details-timezone", descriptionData: ((_d = guestAgentData === null || guestAgentData === void 0 ? void 0 : guestAgentData.timezone) === null || _d === void 0 ? void 0 : _d.split(',')[0]) || NO_DATA_DASH, descriptionHeader: t('Time zone') }),
                            getInstanceTypeMatcher(vm) ? (React.createElement(InstanceTypeDescription, { vm: vm })) : (React.createElement(TemplateDescription, { vm: vm })),
                            React.createElement(VirtualMachineDescriptionItem, { "data-test-id": "virtual-machine-overview-details-host", descriptionData: hostname !== null && hostname !== void 0 ? hostname : fallback, descriptionHeader: t('Hostname') }),
                            React.createElement(VirtualMachineDescriptionItem, { bodyContent: t('The machine type defines the virtual hardware configuration while the operating system name and version refer to the hypervisor.'), "data-test-id": "virtual-machine-overview-details-machine-type", descriptionData: getMachineType(vm) || NO_DATA_DASH, descriptionHeader: t('Machine type'), isPopover: true }))),
                    React.createElement(GridItem, { span: 1 }),
                    React.createElement(GridItem, { span: 5 },
                        React.createElement("div", { className: "right-column" },
                            React.createElement("div", { className: "title" }, t('VNC console')),
                            React.createElement(VirtualMachinesOverviewTabDetailsConsole, { vmi: vmi }))))))));
};
export default VirtualMachinesOverviewTabDetails;
//# sourceMappingURL=VirtualMachinesOverviewTabDetails.js.map