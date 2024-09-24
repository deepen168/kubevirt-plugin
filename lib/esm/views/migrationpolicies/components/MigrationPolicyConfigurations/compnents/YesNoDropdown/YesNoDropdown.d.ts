import { Dispatch, FC, SetStateAction } from 'react';
declare type YesNoDropdownProps = {
    setState: Dispatch<SetStateAction<boolean>>;
    state: boolean;
};
declare const YesNoDropdown: FC<YesNoDropdownProps>;
export default YesNoDropdown;
