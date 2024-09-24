import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
/**
 * Get VMI IPs
 * @date 3/20/2022 - 12:18:23 PM
 *
 * @param {V1VirtualMachineInstance} vmi - VMI
 * @returns {string[]}
 */
export declare const getVMIIPAddresses: (vmi: V1VirtualMachineInstance) => string[];
export declare const getVMIIPAddressesWithName: (vmi: V1VirtualMachineInstance) => IpAddresses;
