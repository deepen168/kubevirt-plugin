import { Dispatch, FC, SetStateAction } from 'react';
import { V1Interface, V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type NetworkInterfaceNetworkSelectProps = {
    editInitValueNetworkName?: string | undefined;
    iface: V1Interface;
    interfaceType: string;
    isEditing?: boolean | undefined;
    namespace?: string;
    networkName: string;
    setInterfaceType: Dispatch<SetStateAction<string>>;
    setNetworkName: Dispatch<SetStateAction<string>>;
    setSubmitDisabled: Dispatch<SetStateAction<boolean>>;
    vm: V1VirtualMachine;
};
declare const NetworkInterfaceNetworkSelect: FC<NetworkInterfaceNetworkSelectProps>;
export default NetworkInterfaceNetworkSelect;
