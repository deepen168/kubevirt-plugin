/// <reference types="react" />
export declare const useVirtualMachineTabs: () => ({
    component: import("react").FC<{
        obj?: import("@kubevirt-ui/kubevirt-api/console").V1Template | undefined;
    }>;
    href: string;
    name: any;
} | {
    component: import("react").FC<{
        obj: import("@kubevirt-ui/kubevirt-api/console").V1Template;
    }>;
    href: string;
    name: any;
})[];
