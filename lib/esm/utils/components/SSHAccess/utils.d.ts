import { IoK8sApiCoreV1Service } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
import { SERVICE_TYPES } from './constants';
export declare const deleteSSHService: (sshService: IoK8sApiCoreV1Service) => Promise<IoK8sApiCoreV1Service>;
export declare const addSSHSelectorLabelToVM: (vm: V1VirtualMachine, vmi: V1VirtualMachineInstance, labelValue: any) => Promise<V1VirtualMachine>;
export declare const createSSHService: (vm: V1VirtualMachine, type: SERVICE_TYPES, vmi?: V1VirtualMachineInstance) => Promise<K8sResourceCommon>;
export declare const getConsoleVirtctlCommand: (vm: V1VirtualMachine, identityFlag?: string) => string;
