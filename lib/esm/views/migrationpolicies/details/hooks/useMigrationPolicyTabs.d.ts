/// <reference types="react" />
export declare const useMigrationPolicyTabs: () => ({
    component: import("react").FC<{
        obj: import("@kubevirt-ui/kubevirt-api/kubevirt").V1alpha1MigrationPolicy;
    }>;
    href: string;
    name: any;
} | {
    component: import("react").FC<{
        obj?: import("@kubevirt-ui/kubevirt-api/kubevirt").V1alpha1MigrationPolicy | undefined;
    }>;
    href: string;
    name: any;
})[];
