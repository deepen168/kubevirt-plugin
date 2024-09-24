import { FC } from 'react';
declare type PersistentVolumeSelectNameProps = {
    isDisabled: boolean;
    isLoading?: boolean;
    onChange: (newPVCName: string) => void;
    pvcNames: string[];
    pvcNameSelected: string;
};
export declare const PersistentVolumeSelectName: FC<PersistentVolumeSelectNameProps>;
export {};
