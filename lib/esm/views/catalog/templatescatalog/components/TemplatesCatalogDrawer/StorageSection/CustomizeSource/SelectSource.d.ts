import { FC, JSXElementConstructor, ReactElement, ReactNode } from 'react';
import { V1beta1DataVolumeSpec, V1ContainerDiskSource } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { DataUpload } from '@kubevirt-utils/hooks/useCDIUpload/useCDIUpload';
import { SOURCE_OPTIONS_IDS } from '../constants';
export declare type SelectSourceProps = {
    'data-test-id': string;
    httpSourceHelperURL?: string;
    onFileSelected: (file: File | string) => void;
    onSourceChange: (customSource: V1beta1DataVolumeSpec | V1ContainerDiskSource) => void;
    registrySourceHelperText?: string;
    relevantUpload?: DataUpload;
    selectedSource?: V1beta1DataVolumeSpec | V1ContainerDiskSource;
    sourceLabel: ReactNode | string;
    sourceOptions: SOURCE_OPTIONS_IDS[];
    sourcePopOver?: ReactElement<any, JSXElementConstructor<any> | string>;
    withSize?: boolean;
};
export declare const SelectSource: FC<SelectSourceProps>;
