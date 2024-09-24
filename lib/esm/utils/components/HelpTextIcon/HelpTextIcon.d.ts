import { FC, ReactNode } from 'react';
import { PopoverPosition } from '@patternfly/react-core';
import './HelpTextIcon.scss';
declare type HelpTextIconProps = {
    bodyContent: ReactNode;
    className?: string;
    helpIconClassName?: string;
    position?: PopoverPosition;
};
declare const HelpTextIcon: FC<HelpTextIconProps>;
export default HelpTextIcon;
