/// <reference types="react" />
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { VM_STATUS } from '@kubevirt-utils/resources/vm/utils/vmStatus';
export declare const vmStatusIcon: {
    Deleting: import("react").ExoticComponent<{
        children?: import("react").ReactNode;
    }>;
    Error: import("react").FC<import("@openshift-console/dynamic-plugin-sdk").ColoredIconProps>;
    Migrating: import("react").ComponentClass<import("@patternfly/react-icons/dist/esm/createIcon").SVGIconProps, any>;
    Paused: import("react").ComponentClass<import("@patternfly/react-icons/dist/esm/createIcon").SVGIconProps, any>;
    Provisioning: import("react").ExoticComponent<{
        children?: import("react").ReactNode;
    }>;
    Running: import("react").ComponentClass<import("@patternfly/react-icons/dist/esm/createIcon").SVGIconProps, any>;
    Starting: import("react").ExoticComponent<{
        children?: import("react").ReactNode;
    }>;
    Stopped: import("react").ExoticComponent<{
        children?: import("react").ReactNode;
    }>;
    Stopping: import("react").ExoticComponent<{
        children?: import("react").ReactNode;
    }>;
    Terminating: import("react").ExoticComponent<{
        children?: import("react").ReactNode;
    }>;
};
export declare type StatusCounts = {
    additionalStatuses: {
        [key in VM_STATUS]?: number;
    };
    primaryStatuses: {
        [key in 'Error' | VM_STATUS]?: number;
    };
};
export declare const getVMStatuses: (vms: V1VirtualMachine[]) => StatusCounts;
