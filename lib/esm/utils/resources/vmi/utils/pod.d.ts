import { IoK8sApiCoreV1Pod } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
/**
 * Get if the pod is in a ready status
 * @date 4/10/2022 - 8:13:37 AM
 *
 * @param {*} pod - The pod to check
 * @returns {boolean}
 */
export declare const isPodReady: (pod: any) => boolean;
/**
 * Get the vmi pod
 * @date 4/10/2022 - 8:13:37 AM
 *
 * @param {V1VirtualMachineInstance} vmi - The vmi to check
 * @param {K8sResourceCommon[]} pods - The pods to check
 * @returns {*}
 */
export declare const getVMIPod: (vmi: V1VirtualMachineInstance, pods: IoK8sApiCoreV1Pod[]) => IoK8sApiCoreV1Pod | null;
