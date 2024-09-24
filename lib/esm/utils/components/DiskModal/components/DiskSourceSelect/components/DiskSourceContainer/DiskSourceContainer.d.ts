import { FC } from 'react';
import { FieldPath } from 'react-hook-form';
import { V1DiskFormState } from '@kubevirt-utils/components/DiskModal/utils/types';
declare type DiskSourceUrlInputProps = {
    fieldName: FieldPath<V1DiskFormState>;
    os: string;
};
declare const DiskSourceContainer: FC<DiskSourceUrlInputProps>;
export default DiskSourceContainer;
