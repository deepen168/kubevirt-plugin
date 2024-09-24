import { V1Interface, V1Network, V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { NetworkAttachmentDefinition } from '../components/hooks/types';
export declare const podNetworkExists: (vm: V1VirtualMachine) => boolean;
export declare const networkNameStartWithPod: (networkName: string) => boolean;
export declare const getNetworkName: (network: V1Network) => string;
export declare const updateVMNetworkInterfaces: (vm: V1VirtualMachine, updatedNetworks: V1Network[], updatedInterfaces: V1Interface[]) => Promise<V1VirtualMachine>;
/**
 * To delete a hot plug NIC the state of the interface is set to 'absent'. The
 * NIC will then be removed when the VM is live migrated or restarted.
 * @param interfaces {V1Interface[]}
 * @param nicName {string}
 * @return the virtual machine's interfaces with the hot plug NIC's state set to 'absent;
 */
export declare const markInterfaceAbsent: (interfaces: V1Interface[], nicName: string) => V1Interface[] | null;
export declare const updateInterfacesForDeletion: (nicName: string, vm: V1VirtualMachine, canBeMarkedAbsent: boolean) => V1Interface[];
export declare const updateNetworksForDeletion: (nicName: string, vm: V1VirtualMachine, canBeMarkedAbsent: boolean) => V1Network[];
export declare const createNetwork: (nicName: string, networkName: string) => V1Network;
export declare const createInterface: (nicName: string, interfaceModel: string, interfaceMACAddress: string, interfaceType: string) => V1Interface;
export declare const getNadType: (nad: NetworkAttachmentDefinition) => string;
export declare const deleteNetworkInterface: (vm: V1VirtualMachine, nicName: string, nicPresentation: NetworkPresentation) => Promise<V1VirtualMachine>;
