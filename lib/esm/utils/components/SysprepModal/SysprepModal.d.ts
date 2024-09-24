import { FC } from 'react';
export declare const SysprepModal: FC<{
    autoUnattend: string;
    enableCreation?: boolean;
    isOpen: boolean;
    namespace: string;
    onClose: () => void;
    onSysprepCreation?: (unattended: string, autoUnattend: string) => Promise<void> | void;
    onSysprepSelected?: (sysprepName: string) => Promise<void> | void;
    shouldCreateConfigMap?: boolean;
    sysprepSelected?: string;
    unattend: string;
}>;
