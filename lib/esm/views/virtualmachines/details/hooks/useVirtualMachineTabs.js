import { VirtualMachineDetailsTab, VirtualMachineDetailsTabLabel, } from '@kubevirt-utils/constants/tabs-constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import VirtualMachineConfigurationTab from '../tabs/configuration/VirtualMachineConfigurationTab';
import VirtualMachineConsolePage from '../tabs/console/VirtualMachineConsolePage';
import VirtualMachineDiagnosticTab from '../tabs/diagnostic/VirtualMachineDiagnosticTab';
import VirtualMachinePageEventsTab from '../tabs/events/VirtualMachinePageEvents';
import VirtualMachineMetricsTab from '../tabs/metrics/VirtualMachineMetricsTab';
import VirtualMachinesOverviewTab from '../tabs/overview/VirtualMachinesOverviewTab';
import SnapshotListPage from '../tabs/snapshots/SnapshotListPage';
import VirtualMachineYAMLPage from '../tabs/yaml/VirtualMachineYAMLPage';
export var useVirtualMachineTabs = function () {
    var t = useKubevirtTranslation().t;
    return [
        {
            component: VirtualMachinesOverviewTab,
            href: VirtualMachineDetailsTab.Overview,
            name: t(VirtualMachineDetailsTabLabel.Overview),
        },
        {
            component: VirtualMachineMetricsTab,
            href: VirtualMachineDetailsTab.Metrics,
            name: t(VirtualMachineDetailsTabLabel.Metrics),
        },
        {
            component: VirtualMachineYAMLPage,
            href: VirtualMachineDetailsTab.YAML,
            name: t(VirtualMachineDetailsTabLabel.YAML),
        },
        {
            component: VirtualMachineConfigurationTab,
            href: VirtualMachineDetailsTab.Configurations,
            name: t(VirtualMachineDetailsTabLabel.Configuration),
        },
        {
            component: VirtualMachineConfigurationTab,
            href: "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab.SSH),
            isHidden: true,
            name: "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab.SSH),
        },
        {
            component: VirtualMachineConfigurationTab,
            href: "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab['Initial-run']),
            isHidden: true,
            name: "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab['Initial-run']),
        },
        {
            component: VirtualMachineConfigurationTab,
            href: "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab.Storage),
            isHidden: true,
            name: "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab.Storage),
        },
        {
            component: VirtualMachineConfigurationTab,
            href: "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab.Details),
            isHidden: true,
            name: "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab.Details),
        },
        {
            component: VirtualMachineConfigurationTab,
            href: "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab.Metadata),
            isHidden: true,
            name: "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab.Metadata),
        },
        {
            component: VirtualMachineConfigurationTab,
            href: "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab.Network),
            isHidden: true,
            name: "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab.Network),
        },
        {
            component: VirtualMachineConfigurationTab,
            href: "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab.Scheduling),
            isHidden: true,
            name: "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab.Scheduling),
        },
        {
            component: VirtualMachinePageEventsTab,
            href: VirtualMachineDetailsTab.Events,
            name: t(VirtualMachineDetailsTabLabel.Events),
        },
        {
            component: VirtualMachineConsolePage,
            href: VirtualMachineDetailsTab.Console,
            name: t(VirtualMachineDetailsTabLabel.Console),
        },
        {
            component: SnapshotListPage,
            href: VirtualMachineDetailsTab.Snapshots,
            name: t(VirtualMachineDetailsTabLabel.Snapshots),
        },
        {
            component: VirtualMachineDiagnosticTab,
            href: VirtualMachineDetailsTab.Diagnostics,
            name: t(VirtualMachineDetailsTabLabel.Diagnostics),
        },
        {
            component: VirtualMachineDiagnosticTab,
            href: "".concat(VirtualMachineDetailsTab.Diagnostics, "/").concat(VirtualMachineDetailsTab.Tables),
            isHidden: true,
            name: t(VirtualMachineDetailsTabLabel.Diagnostics),
        },
        {
            component: VirtualMachineDiagnosticTab,
            href: "".concat(VirtualMachineDetailsTab.Diagnostics, "/").concat(VirtualMachineDetailsTab.Logs),
            isHidden: true,
            name: t(VirtualMachineDetailsTabLabel.Diagnostics),
        },
    ];
};
//# sourceMappingURL=useVirtualMachineTabs.js.map