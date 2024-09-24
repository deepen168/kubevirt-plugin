import { FC, JSXElementConstructor, ReactElement, ReactNode } from 'react';
import { SOURCE_OPTIONS_IDS } from '../constants';
declare type SelectSourceOptionProps = {
    'data-test-id': string;
    label: ReactNode | string;
    onSelectSource: (selection: SOURCE_OPTIONS_IDS) => void;
    options: SOURCE_OPTIONS_IDS[];
    popOver?: ReactElement<any, JSXElementConstructor<any> | string>;
    selectedSource: SOURCE_OPTIONS_IDS;
};
declare const SelectSourceOption: FC<SelectSourceOptionProps>;
export default SelectSourceOption;
