import { V1VirtualMachineInstanceSpec } from '@kubevirt-ui/kubevirt-api/kubevirt';
/**
 * Get node selectors presentation
 * @date 3/14/2022 - 1:02:01 PM
 *
 * @param {V1VirtualMachineInstanceSpec['nodeSelector']} nodeSelector - node selectors
 * @returns {string}
 */
export declare const getNodeSelectorLabel: (nodeSelector: null | V1VirtualMachineInstanceSpec['nodeSelector']) => string;
