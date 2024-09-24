/// <reference types="react" />
declare const useVirtualMachinesInstanceTabs: () => {
    component: import("react").FC<{
        obj: import("@kubevirt-ui/kubevirt-api/kubevirt").V1VirtualMachineInstance;
    }>;
    href: string;
    name: any;
}[];
export default useVirtualMachinesInstanceTabs;
