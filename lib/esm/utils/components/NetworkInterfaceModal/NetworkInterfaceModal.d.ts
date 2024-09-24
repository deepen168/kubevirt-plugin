import { FC, ReactNode } from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { NetworkPresentation } from '@kubevirt-utils/resources/vm/utils/network/constants';
import './NetworkInterfaceModal.scss';
declare type NetworkInterfaceModalOnSubmit = {
    interfaceMACAddress: string;
    interfaceModel: string;
    interfaceType: string;
    networkName: string;
    nicName: string;
};
declare type NetworkInterfaceModalProps = {
    fixedName?: boolean;
    Header?: ReactNode;
    headerText: string;
    isEdit?: boolean;
    isOpen: boolean;
    namespace?: string;
    nicPresentation?: NetworkPresentation;
    onClose: () => void;
    onSubmit: (args: NetworkInterfaceModalOnSubmit) => (obj: V1VirtualMachine) => Promise<string | V1Template | V1Template[] | V1VirtualMachine | V1VirtualMachine[] | void>;
    vm: V1VirtualMachine;
};
declare const NetworkInterfaceModal: FC<NetworkInterfaceModalProps>;
export default NetworkInterfaceModal;
