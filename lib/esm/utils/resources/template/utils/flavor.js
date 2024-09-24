var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { getCPU, getMemory } from '@kubevirt-utils/resources/vm';
import { getTemplateFlavor, getTemplateVirtualMachineCPU, getTemplateVirtualMachineObject, } from './selectors';
/**
 * parses CPU and returns its sockets, cores and threads
 * @param cpu - V1CPU to parse
 */
export var parseCPU = function (cpu) {
    return {
        cores: (cpu === null || cpu === void 0 ? void 0 : cpu.cores) || 1,
        sockets: (cpu === null || cpu === void 0 ? void 0 : cpu.sockets) || 1,
        threads: (cpu === null || cpu === void 0 ? void 0 : cpu.threads) || 1,
    };
};
/**
 * parses CPU and returns its count
 * @param cpu - V1CPU to parse
 */
export var vCPUCount = function (cpu) {
    var parsedCpu = parseCPU(cpu);
    return parsedCpu.sockets * parsedCpu.cores * parsedCpu.threads;
};
/**
 * parses template and returns its flavor data
 * @param {V1Template} template - template to parse
 */
export var getFlavorData = function (template) {
    var cpu = getTemplateVirtualMachineCPU(template);
    var memory = getMemory(getTemplateVirtualMachineObject(template));
    var cpuCount = vCPUCount(cpu);
    var flavor = getTemplateFlavor(template);
    return {
        cpuCount: cpuCount,
        flavor: flavor,
        memory: memory,
    };
};
/**
 * parses vm and returns its cpu and memory data
 * @param {V1VirtualMachine} vm - vm to parse
 */
export var getVmCPUMemory = function (vm) {
    var cpu = getCPU(vm);
    var memory = getMemory(vm);
    var cpuCount = vCPUCount(cpu);
    return {
        cpuCount: cpuCount,
        memory: memory,
    };
};
/**
 * parses template and returns its cpu and memory data
 * @param {V1Template} template - template to parse
 */
export var getTemplateFlavorData = function (template) {
    var flavor = getTemplateFlavor(template);
    return __assign({ flavor: flavor }, getVmCPUMemory(getTemplateVirtualMachineObject(template)));
};
//# sourceMappingURL=flavor.js.map