import { FC } from 'react';
export declare const BootOrderEmptyState: FC<BootOrderEmptyProps>;
export declare type BootOrderEmptyProps = {
    addItemDisabledMessage?: string;
    addItemIsDisabled: boolean;
    addItemMessage: string;
    message: string;
    onClick: () => void;
    title: string;
};
