import { Dispatch, FC, SetStateAction } from 'react';
declare type NameInputProps = {
    name: string;
    setName: Dispatch<SetStateAction<string>>;
};
declare const NameInput: FC<NameInputProps>;
export default NameInput;
