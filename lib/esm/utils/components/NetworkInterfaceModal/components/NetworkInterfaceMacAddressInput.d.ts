import { Dispatch, FC, SetStateAction } from 'react';
declare type NetworkInterfaceMacAddressInputProps = {
    interfaceMACAddress: string;
    isDisabled: boolean;
    setInterfaceMACAddress: Dispatch<SetStateAction<string>>;
    setIsError: Dispatch<SetStateAction<boolean>>;
};
declare const NetworkInterfaceMacAddressInput: FC<NetworkInterfaceMacAddressInputProps>;
export default NetworkInterfaceMacAddressInput;
