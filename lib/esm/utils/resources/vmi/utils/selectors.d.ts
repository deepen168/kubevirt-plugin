import { V1Bootloader, V1Devices, V1VirtualMachineInstance, V1VirtualMachineInstanceNetworkInterface } from '@kubevirt-ui/kubevirt-api/kubevirt';
/**
 * A selector for the virtual machine instance's volumes
 * @param {V1VirtualMachineInstance} vmi the virtual machine instance
 * @returns the virtual machine instance volumes
 */
export declare const getVMIVolumes: (vmi: V1VirtualMachineInstance) => import("@kubevirt-ui/kubevirt-api/kubevirt").V1Volume[] | undefined;
/**
 * A selector for the virtual machine instance's networks
 * @param {V1VirtualMachineInstance} vmi the virtual machine instance
 * @returns the virtual machine instance networks
 */
export declare const getVMINetworks: (vmi: V1VirtualMachineInstance) => import("@kubevirt-ui/kubevirt-api/kubevirt").V1Network[] | undefined;
/**
 * A selector for the virtual machine instance's interfaces
 * @param {V1VirtualMachineInstance} vmi the virtual machine instance
 * @returns the virtual machine instance interfaces
 */
export declare const getVMIInterfaces: (vmi: V1VirtualMachineInstance) => import("@kubevirt-ui/kubevirt-api/kubevirt").V1Interface[] | undefined;
/**
 * A selector that returns the virtual machine instance evictionStrategy
 * @param {V1VirtualMachine} vmi the virtual machine instance
 * @returns {string} the evictionStrategy
 */
export declare const getEvictionStrategy: (vmi: V1VirtualMachineInstance) => string;
/**
 * A selector that returns the interfaces listed in the virtual machine
 * instance's status block
 * @param {V1VirtualMachine} vmi the virtual machine instance
 * @returns {V1VirtualMachineInstanceNetworkInterface[]} the interfaces
 * listed in the virtual machine interface's status block
 */
export declare const getVMIStatusInterfaces: (vmi: V1VirtualMachineInstance) => V1VirtualMachineInstanceNetworkInterface[];
export declare const getVMIDevices: (vmi: V1VirtualMachineInstance) => V1Devices;
export declare const getVMIBootLoader: (vmi: V1VirtualMachineInstance) => V1Bootloader;
