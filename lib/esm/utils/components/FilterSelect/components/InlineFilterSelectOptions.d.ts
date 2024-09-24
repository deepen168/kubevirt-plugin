import { FC } from 'react';
import { EnhancedSelectOptionProps } from '../utils/types';
declare type InlineFilterSelectOptionsProps = {
    filterOptions: EnhancedSelectOptionProps[];
    filterValue: string;
    focusedItemIndex: number;
    groupedOptions: Record<string, EnhancedSelectOptionProps[]>;
};
declare const InlineFilterSelectOptions: FC<InlineFilterSelectOptionsProps>;
export default InlineFilterSelectOptions;
