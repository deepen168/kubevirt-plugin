import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { NetworkPresentation } from './constants';
export declare const sortNICs: (nics: NetworkPresentation[], direction: string) => NetworkPresentation[];
export declare const getInterfacesAndNetworks: (vm: V1VirtualMachine, vmi: V1VirtualMachineInstance) => {
    interfaces: any;
    networks: any;
};
