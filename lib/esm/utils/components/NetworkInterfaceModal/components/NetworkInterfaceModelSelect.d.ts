import { Dispatch, FC, SetStateAction } from 'react';
declare type NetworkInterfaceModelSelectProps = {
    interfaceModel: string;
    setInterfaceModel: Dispatch<SetStateAction<string>>;
};
declare const NetworkInterfaceModelSelect: FC<NetworkInterfaceModelSelectProps>;
export default NetworkInterfaceModelSelect;
