var _a;
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
export var VirtualMachineDetailsTab;
(function (VirtualMachineDetailsTab) {
    VirtualMachineDetailsTab["Configurations"] = "configuration";
    VirtualMachineDetailsTab["Console"] = "console";
    VirtualMachineDetailsTab["Details"] = "details";
    VirtualMachineDetailsTab["Diagnostics"] = "diagnostics";
    VirtualMachineDetailsTab["Disks"] = "disks";
    VirtualMachineDetailsTab["Environment"] = "environment";
    VirtualMachineDetailsTab["Events"] = "events";
    VirtualMachineDetailsTab["Initial-run"] = "initial";
    VirtualMachineDetailsTab["Logs"] = "logs";
    VirtualMachineDetailsTab["Metadata"] = "metadata";
    VirtualMachineDetailsTab["Metrics"] = "metrics";
    VirtualMachineDetailsTab["Network"] = "network";
    VirtualMachineDetailsTab["Overview"] = "";
    VirtualMachineDetailsTab["Scheduling"] = "scheduling";
    VirtualMachineDetailsTab["Scripts"] = "scripts";
    VirtualMachineDetailsTab["Snapshots"] = "snapshots";
    VirtualMachineDetailsTab["SSH"] = "ssh";
    VirtualMachineDetailsTab["Storage"] = "storage";
    VirtualMachineDetailsTab["Tables"] = "tables";
    VirtualMachineDetailsTab["YAML"] = "yaml";
})(VirtualMachineDetailsTab || (VirtualMachineDetailsTab = {}));
export var VirtualMachineConfigurationTabInner = (_a = {},
    _a[VirtualMachineDetailsTab.Details] = VirtualMachineDetailsTab.Details,
    _a[VirtualMachineDetailsTab.Metadata] = VirtualMachineDetailsTab.Metadata,
    _a[VirtualMachineDetailsTab.Network] = VirtualMachineDetailsTab.Network,
    _a[VirtualMachineDetailsTab.Scheduling] = VirtualMachineDetailsTab.Scheduling,
    _a[VirtualMachineDetailsTab.SSH] = VirtualMachineDetailsTab.SSH,
    _a[VirtualMachineDetailsTab.Storage] = VirtualMachineDetailsTab.Storage,
    _a[VirtualMachineDetailsTab['Initial-run']] = VirtualMachineDetailsTab['Initial-run'],
    _a);
export var VirtualMachineDetailsTabLabel = {
    Configuration: t('Configuration'),
    Console: t('Console'),
    Details: t('Details'),
    Diagnostics: t('Diagnostics'),
    Disks: t('Disks'),
    Environment: t('Environment'),
    Events: t('Events'),
    'Initial-run': t('Initial run'),
    Metadata: t('Metadata'),
    Metrics: t('Metrics'),
    Network: t('Network'),
    Overview: t('Overview'),
    Scheduling: t('Scheduling'),
    Scripts: t('Scripts'),
    Snapshots: t('Snapshots'),
    SSH: t('SSH'),
    Storage: t('Storage'),
    YAML: t('YAML'),
};
//# sourceMappingURL=tabs-constants.js.map