import { FC } from 'react';
import { ValidatedOptions } from '@patternfly/react-core';
export declare type SysprepFile = {
    fileName: string;
    isLoading: boolean;
    validated: ValidatedOptions;
    value: string;
};
declare type SysprepFileFieldProps = {
    id: string;
    onChange: (value: string) => void;
    value?: string;
};
declare const SysprepFileField: FC<SysprepFileFieldProps>;
export default SysprepFileField;
