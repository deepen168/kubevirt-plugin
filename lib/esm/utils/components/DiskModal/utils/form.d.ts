import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { SourceTypes, V1DiskFormState } from './types';
export declare const getDefaultEditValues: (vm: V1VirtualMachine, editDiskName?: string) => {
    dataVolumeTemplate: any;
    disk: any;
    isBootSource: boolean;
    volume: any;
};
export declare const getDefaultCreateValues: (vm: V1VirtualMachine, createDiskSource: SourceTypes) => V1DiskFormState;
