import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { BootloaderOptionValue } from './types';
export declare const isObjectEmpty: (obj: object) => boolean;
export declare const getBootloaderFromVM: (vm: V1VirtualMachine) => BootloaderOptionValue;
export declare const getBootloaderTitleFromVM: (vm: V1VirtualMachine) => string;
/**
 * A function to return the VirtualMachine object updated with a given boot mode
 * @param {V1VirtualMachine} vm - VirtualMachine object
 * @param {BootloaderOptionValue} firmwareBootloader - selected boot mode
 * @returns {V1VirtualMachine} updated VirtualMachine object
 */
export declare const updatedVMBootMode: (vm: V1VirtualMachine, firmwareBootloader: BootloaderOptionValue) => V1VirtualMachine;
