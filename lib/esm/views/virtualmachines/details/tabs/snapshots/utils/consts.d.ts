/// <reference types="react" />
export declare const snapshotStatuses: {
    Failed: string;
    InProgress: string;
    Succeeded: string;
};
export declare const iconMapper: {
    default: import("react").FC<import("@openshift-console/dynamic-plugin-sdk").ColoredIconProps>;
    Error: import("react").FC<import("@openshift-console/dynamic-plugin-sdk").ColoredIconProps>;
    Failed: import("react").FC<import("@openshift-console/dynamic-plugin-sdk").ColoredIconProps>;
    InProgress: import("react").FC<import("@openshift-console/dynamic-plugin-sdk").ColoredIconProps>;
    'Not ready': import("react").FC<import("@openshift-console/dynamic-plugin-sdk").ColoredIconProps>;
    Succeeded: import("react").FC<import("@openshift-console/dynamic-plugin-sdk").ColoredIconProps>;
};
export declare enum deadlineUnits {
    Hours = "h",
    Miliseconds = "ms",
    Minutes = "m",
    Seconds = "s"
}
