import { FC } from 'react';
declare type SelectSysprepProps = {
    id?: string;
    namespace: string;
    onSelectSysprep: (secretName: string) => void;
    selectedSysprepName: string;
};
declare const SelectSysprep: FC<SelectSysprepProps>;
export default SelectSysprep;
