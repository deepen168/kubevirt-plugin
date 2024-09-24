export { default as VirtualMachineModel } from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
export declare const diskImportKindMapping: {
    [x: string]: import("@openshift-console/dynamic-plugin-sdk").K8sModel;
};
export declare enum InventoryStatusGroup {
    ERROR = "ERROR",
    NOT_MAPPED = "NOT_MAPPED",
    PROGRESS = "PROGRESS",
    UNKNOWN = "UNKNOWN",
    WARN = "WARN"
}
export declare const printableVmStatus: {
    CrashLoopBackOff: string;
    DataVolumeError: string;
    ErrImagePull: string;
    ErrorDataVolumeNotFound: string;
    ErrorPvcNotFound: string;
    ErrorUnschedulable: string;
    FailedUnschedulable: string;
    ImagePullBackOff: string;
    Migrating: string;
    Paused: string;
    Provisioning: string;
    Running: string;
    Starting: string;
    Stopped: string;
    Stopping: string;
    Terminating: string;
    Unknown: string;
    WaitingForVolumeBinding: string;
};
export declare enum VMStatusSimpleLabel {
    Deleting = "Deleting",
    Migrating = "Migrating",
    Paused = "Paused",
    Running = "Running",
    Starting = "Starting",
    Stopped = "Stopped",
    Stopping = "Stopping"
}
export declare enum StatusSimpleLabel {
    Completed = "Completed",
    Error = "Error",
    Importing = "Importing",
    InProgress = "InProgress",
    Other = "Other",
    Pending = "Pending"
}
export declare const printableStatusToLabel: {
    [x: string]: StatusSimpleLabel | VMStatusSimpleLabel;
};
export declare const getVmStatusLabelFromPrintable: (printableStatus: string) => StatusSimpleLabel | VMStatusSimpleLabel;
export declare const VIRTUALMACHINES_TEMPLATES_BASE_URL = "virtualmachinetemplates";
export declare const getTimestamp: (resource: any) => Date;
export declare const isDVActivity: (resource: any) => boolean;
export declare const k8sDVResource: {
    isList: boolean;
    kind: import("@openshift-console/dynamic-plugin-sdk").K8sModel;
    prop: string;
};
