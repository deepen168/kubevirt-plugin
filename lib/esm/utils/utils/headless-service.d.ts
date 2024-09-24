import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const HEADLESS_SERVICE_LABEL = "network.kubevirt.io/headlessService";
export declare const HEADLESS_SERVICE_NAME = "headless";
export declare const HEADLESS_SERVICE_PORT = 5434;
export declare const createHeadlessService: (createdVM: V1VirtualMachine) => Promise<void>;
