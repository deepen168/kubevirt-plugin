import { FC } from 'react';
import './PersistentVolumeClaimSelect.scss';
declare type PersistentVolumeClaimSelectProps = {
    projectSelected: string;
    pvcNameSelected: string;
    selectPVC: (pvcNamespace: string, pvcName?: string) => void;
};
export declare const PersistentVolumeClaimSelect: FC<PersistentVolumeClaimSelectProps>;
export {};
