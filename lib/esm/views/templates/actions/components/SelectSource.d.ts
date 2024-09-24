import { FC, ReactNode } from 'react';
import { V1beta1DataVolumeSpec } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { SOURCE_OPTIONS_IDS } from '../../utils/constants';
declare type SelectSourceProps = {
    httpSourceHelperText?: string;
    initialVolumeQuantity?: string;
    onSourceChange: (customSource: V1beta1DataVolumeSpec) => void;
    source: V1beta1DataVolumeSpec;
    sourceLabel: ReactNode;
    sourceOptions: SOURCE_OPTIONS_IDS[];
    withSize?: boolean;
};
export declare const SelectSource: FC<SelectSourceProps>;
export {};
