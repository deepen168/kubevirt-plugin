import { ReactNode } from 'react';
import { SourceTypes } from '@kubevirt-utils/components/DiskModal/utils/types';
export declare type DiskSourceOptionGroupItem = {
    description?: string;
    id: SourceTypes;
    label: ReactNode | string;
};
export declare type DiskSourceOptionGroup = {
    groupLabel?: string;
    items: DiskSourceOptionGroupItem[];
};
