import { BootloaderLabel } from './types';
export declare enum BootMode {
    bios = "bios",
    uefi = "uefi",
    uefiSecure = "uefiSecure"
}
export declare const BootModeTitles: {
    bios: any;
    uefi: any;
    uefiSecure: any;
};
export declare const bootloaderOptions: BootloaderLabel[];
