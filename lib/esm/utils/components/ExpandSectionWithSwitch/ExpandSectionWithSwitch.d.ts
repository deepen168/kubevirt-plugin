import { FC, ReactNode } from 'react';
import './ExpandSectionWithSwitch.scss';
declare type ExpandSectionWithSwitchProps = {
    children: ReactNode;
    helpTextIconContent?: ReactNode;
    id?: string;
    isDisabled?: boolean;
    newBadge: boolean;
    switchIsOn: boolean;
    toggleContent?: ReactNode;
    toggleText?: string;
    turnOnSwitch: (checked: boolean) => void;
};
declare const ExpandSectionWithSwitch: FC<ExpandSectionWithSwitchProps>;
export default ExpandSectionWithSwitch;
