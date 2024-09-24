import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const isLiveMigratable: (vm: V1VirtualMachine, isSingleNodeCluster: boolean) => boolean;
export declare const isRunning: (vm: V1VirtualMachine) => boolean;
export declare const compareCIDR: (ipSearch: string, ip: string) => boolean;
