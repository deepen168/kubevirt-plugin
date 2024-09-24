import { V1Interface } from '@kubevirt-ui/kubevirt-api/kubevirt';
/**
 * function to get network interface type
 * @param {V1Interface} iface interface
 * @returns interface type
 */
export declare const getNetworkInterfaceType: (iface: V1Interface) => string;
/**
 * function to get printable network interface type
 * @param {V1Interface} iface interface
 * @returns interface type
 */
export declare const getPrintableNetworkInterfaceType: (iface: V1Interface) => string;
