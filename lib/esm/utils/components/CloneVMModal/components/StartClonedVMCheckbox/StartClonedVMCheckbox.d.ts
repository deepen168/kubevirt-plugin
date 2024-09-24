import { Dispatch, FC, SetStateAction } from 'react';
import './StartClonedVMCheckbox.scss';
declare type StartClonedVMCheckboxProps = {
    setStartCloneVM: Dispatch<SetStateAction<boolean>>;
    startCloneVM: boolean;
};
declare const StartClonedVMCheckbox: FC<StartClonedVMCheckboxProps>;
export default StartClonedVMCheckbox;
