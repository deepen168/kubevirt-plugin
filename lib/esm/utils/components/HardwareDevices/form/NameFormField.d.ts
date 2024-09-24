import { Dispatch, FC, SetStateAction } from 'react';
declare type NameFormFieldProps = {
    index: number;
    name: string;
    setName: Dispatch<SetStateAction<string>>;
};
declare const NameFormField: FC<NameFormFieldProps>;
export default NameFormField;
