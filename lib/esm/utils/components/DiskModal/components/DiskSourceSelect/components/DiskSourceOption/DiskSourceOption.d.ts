import { FC } from 'react';
import { SourceTypes } from '@kubevirt-utils/components/DiskModal/utils/types';
import { DiskSourceOptionGroupItem } from '../../utils/types';
declare type DiskSourceOptionProps = {
    onSelect: (value: SourceTypes) => void;
} & DiskSourceOptionGroupItem;
declare const DiskSourceOption: FC<DiskSourceOptionProps>;
export default DiskSourceOption;
