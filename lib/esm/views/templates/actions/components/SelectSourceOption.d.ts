import { FC, ReactNode } from 'react';
import { SOURCE_OPTIONS_IDS } from '../../utils/constants';
declare type SelectSourceOptionProps = {
    label: ReactNode;
    onSelectSource: (selection: SOURCE_OPTIONS_IDS) => void;
    options: SOURCE_OPTIONS_IDS[];
    selectedSource: SOURCE_OPTIONS_IDS;
};
declare const SelectSourceOption: FC<SelectSourceOptionProps>;
export default SelectSourceOption;
