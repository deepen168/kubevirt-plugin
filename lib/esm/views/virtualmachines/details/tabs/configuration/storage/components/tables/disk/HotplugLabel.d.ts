import * as React from 'react';
import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type HotplugLabelProps = {
    diskName: string;
    vm: V1VirtualMachine;
    vmi?: V1VirtualMachineInstance;
};
export declare const HotplugLabel: React.FC<HotplugLabelProps>;
export {};
