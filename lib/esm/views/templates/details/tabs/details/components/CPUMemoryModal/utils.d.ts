import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { V1CPU } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type CPUMemoryValues = {
    defaultCPU: V1CPU;
    defaultMemory: {
        defaultMemorySize: number;
        defaultMemoryUnit: string;
    };
};
export declare const getDefaultCPUMemoryValues: (template: V1Template) => CPUMemoryValues;
export {};
