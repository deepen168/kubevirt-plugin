import { IoK8sApiCoreV1Pod, IoK8sApiCoreV1Service, IoK8sApiCoreV1ServicePort } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
import { ConsoleDetailPropType, Network } from './types';
export declare const getServicePort: (service: IoK8sApiCoreV1Service, targetPort: number) => IoK8sApiCoreV1ServicePort;
export declare const findRDPServiceAndPort: (vmi: V1VirtualMachineInstance, allServices: IoK8sApiCoreV1Service[]) => [IoK8sApiCoreV1Service, IoK8sApiCoreV1ServicePort];
export declare const getRdpAddressPort: (vmi: V1VirtualMachineInstance, services: IoK8sApiCoreV1Service[], launcherPod: IoK8sApiCoreV1Pod) => ConsoleDetailPropType;
export declare const downloadFile: (fileName: string, content: string, mimeType: string) => void;
export declare const generateDescriptorFile: (console: ConsoleDetailPropType, type: string) => {
    content: string;
    mimeType: string;
};
export declare const getVmRdpNetworks: (vm: V1VirtualMachine, vmi: V1VirtualMachineInstance) => Network[];
export declare const getDefaultNetwork: (networks: Network[]) => Network | null | undefined;
export declare const createRDPService: (vm: V1VirtualMachine, vmi: V1VirtualMachineInstance) => Promise<K8sResourceCommon[]>;
