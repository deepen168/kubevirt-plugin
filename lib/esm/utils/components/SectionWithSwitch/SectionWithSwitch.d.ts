import { FC, ReactNode } from 'react';
import './section-with-switch.scss';
declare type SectionWithSwitchProps = {
    externalLink?: string;
    helpTextIconContent?: ReactNode;
    id?: string;
    inlineCheckbox?: boolean;
    isDisabled?: boolean;
    maxWidth?: string;
    newBadge?: boolean;
    switchIsOn: boolean;
    title?: ReactNode;
    turnOnSwitch: (checked: boolean) => void;
};
declare const SectionWithSwitch: FC<SectionWithSwitchProps>;
export default SectionWithSwitch;
