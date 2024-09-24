import { FC } from 'react';
export declare type DurationDropdownProps = {
    selectedDuration: string;
    selectHandler: (value: string) => void;
};
declare const DurationDropdown: FC<DurationDropdownProps>;
export default DurationDropdown;
