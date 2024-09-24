import { BootMode } from './constants';
export declare type BootloaderLabel = {
    description: string;
    title: string;
    value: string;
};
export declare type BootloaderOptionValue = BootMode.bios | BootMode.uefi | BootMode.uefiSecure;
