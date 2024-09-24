export declare enum VirtualMachineDetailsTab {
    Configurations = "configuration",
    Console = "console",
    Details = "details",
    Diagnostics = "diagnostics",
    Disks = "disks",
    Environment = "environment",
    Events = "events",
    'Initial-run' = "initial",
    Logs = "logs",
    Metadata = "metadata",
    Metrics = "metrics",
    Network = "network",
    Overview = "",
    Scheduling = "scheduling",
    Scripts = "scripts",
    Snapshots = "snapshots",
    SSH = "ssh",
    Storage = "storage",
    Tables = "tables",
    YAML = "yaml"
}
export declare const VirtualMachineConfigurationTabInner: {
    details: VirtualMachineDetailsTab;
    metadata: VirtualMachineDetailsTab;
    network: VirtualMachineDetailsTab;
    scheduling: VirtualMachineDetailsTab;
    ssh: VirtualMachineDetailsTab;
    storage: VirtualMachineDetailsTab;
    initial: VirtualMachineDetailsTab;
};
export declare const VirtualMachineDetailsTabLabel: {
    Configuration: any;
    Console: any;
    Details: any;
    Diagnostics: any;
    Disks: any;
    Environment: any;
    Events: any;
    'Initial-run': any;
    Metadata: any;
    Metrics: any;
    Network: any;
    Overview: any;
    Scheduling: any;
    Scripts: any;
    Snapshots: any;
    SSH: any;
    Storage: any;
    YAML: any;
};
