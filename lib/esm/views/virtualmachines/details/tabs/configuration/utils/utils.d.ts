/// <reference types="react" />
export declare const tabs: {
    Component: import("react").FC<import("./types").ConfigurationInnerTabProps>;
    name: any;
    title: any;
}[];
export declare const innerTabs: {
    [key: string]: string;
};
export declare const getInnerTabFromPath: (path: string) => string;
export declare const includesConfigurationPath: (path: string, append: string) => string;
