/// <reference types="react" />
export declare const useVirtualMachineTabs: () => ({
    component: import("react").FC<NavPageComponentProps>;
    href: any;
    name: any;
    isHidden?: undefined;
} | {
    component: import("react").FC<NavPageComponentProps>;
    href: string;
    isHidden: boolean;
    name: any;
})[];
