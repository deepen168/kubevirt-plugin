import { FC, ReactNode } from 'react';
import { MenuToggleProps, SelectPopperProps } from '@patternfly/react-core';
import { EnhancedSelectOptionProps } from './utils/types';
declare type InlineFilterSelectProps = {
    className?: string;
    menuFooter?: ReactNode;
    optionLabelText?: string;
    options: EnhancedSelectOptionProps[];
    popperProps?: SelectPopperProps;
    selected: string;
    setSelected: (val: string) => void;
    toggleProps?: MenuToggleProps;
};
declare const InlineFilterSelect: FC<InlineFilterSelectProps>;
export default InlineFilterSelect;
