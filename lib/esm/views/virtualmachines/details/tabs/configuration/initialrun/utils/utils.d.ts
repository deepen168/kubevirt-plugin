import { IoK8sApiCoreV1ConfigMap } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const patchVMWithExistingSysprepConfigMap: (name: string, vm: V1VirtualMachine, onSubmit?: any) => Promise<void>;
export declare const createSysprepConfigMap: (unattended: string, autounattend: string, externalSysprepConfig: IoK8sApiCoreV1ConfigMap, vm: V1VirtualMachine, onSubmit?: any) => Promise<void>;
