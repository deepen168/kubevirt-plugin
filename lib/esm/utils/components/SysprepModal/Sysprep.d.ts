import { FC } from 'react';
import './sysprep.scss';
declare type SysprepProps = {
    autoUnattend: string;
    onAutoUnattendChange: (value: string) => void;
    onUnattendChange: (value: string) => void;
    unattend: string;
};
declare const Sysprep: FC<SysprepProps>;
export default Sysprep;
