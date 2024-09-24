import { Dispatch, FC, SetStateAction } from 'react';
declare type NetworkInterfaceTypeSelectProps = {
    interfaceType: string;
    networkName: string | undefined;
    setInterfaceType: Dispatch<SetStateAction<string>>;
    showTypeHelperText?: boolean;
};
declare const NetworkInterfaceTypeSelect: FC<NetworkInterfaceTypeSelectProps>;
export default NetworkInterfaceTypeSelect;
