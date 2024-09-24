import { FC } from 'react';
import { V1beta1DataVolumeSpec } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './PersistentVolumeClaimSelect.scss';
declare type PersistentVolumeClaimSelectProps = {
    currentSize: string;
    'data-test-id': string;
    onSourceChange: (customSource: V1beta1DataVolumeSpec) => void;
    projectSelected: string;
    pvcNameSelected: string;
};
export declare const PersistentVolumeClaimSelect: FC<PersistentVolumeClaimSelectProps>;
export {};
