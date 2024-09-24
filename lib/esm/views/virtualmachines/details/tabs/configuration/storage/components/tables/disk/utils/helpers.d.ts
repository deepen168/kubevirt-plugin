import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const isHotplugVolume: (vm: V1VirtualMachine, diskName: string, vmi?: V1VirtualMachineInstance) => boolean;
export declare const isPVCSource: (obj: DiskRowDataLayout) => boolean;
export declare const isPVCStatusBound: (obj: DiskRowDataLayout) => boolean;
