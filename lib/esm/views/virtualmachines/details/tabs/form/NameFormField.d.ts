import { Dispatch, FC, SetStateAction } from 'react';
declare type NameFormFieldProps = {
    objName: string;
    setObjName: Dispatch<SetStateAction<string>>;
};
declare const NameFormField: FC<NameFormFieldProps>;
export default NameFormField;
