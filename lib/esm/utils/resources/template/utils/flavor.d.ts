import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { V1CPU, V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
/**
 * parses CPU and returns its sockets, cores and threads
 * @param cpu - V1CPU to parse
 */
export declare const parseCPU: (cpu: V1CPU) => V1CPU;
/**
 * parses CPU and returns its count
 * @param cpu - V1CPU to parse
 */
export declare const vCPUCount: (cpu: V1CPU) => number;
/**
 * parses template and returns its flavor data
 * @param {V1Template} template - template to parse
 */
export declare const getFlavorData: (template: V1Template) => {
    cpuCount: number;
    flavor: string;
    memory: string;
};
/**
 * parses vm and returns its cpu and memory data
 * @param {V1VirtualMachine} vm - vm to parse
 */
export declare const getVmCPUMemory: (vm: V1VirtualMachine) => {
    cpuCount: number;
    memory: string;
};
/**
 * parses template and returns its cpu and memory data
 * @param {V1Template} template - template to parse
 */
export declare const getTemplateFlavorData: (template: V1Template) => {
    cpuCount: number;
    flavor: string;
    memory: string;
};
