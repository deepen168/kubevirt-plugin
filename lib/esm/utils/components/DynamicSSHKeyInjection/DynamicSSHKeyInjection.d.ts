import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type DynamicSSHKeyInjectionProps = {
    hasDynamicSSHLabel?: boolean;
    isDisabled: boolean;
    onSubmit: (checked: boolean) => void;
    vm?: V1VirtualMachine;
};
export declare const DynamicSSHKeyInjection: FC<DynamicSSHKeyInjectionProps>;
export {};
