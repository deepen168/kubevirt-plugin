import { Dispatch, FC, SetStateAction } from 'react';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
declare type AutocompleteInputProps = {
    className?: string;
    data?: K8sResourceCommon[];
    onSuggestionSelect: (selected: string) => void;
    placeholder?: string;
    setTextValue: Dispatch<SetStateAction<string>>;
    suggestionCount?: number;
    textValue: string;
};
declare const AutocompleteInput: FC<AutocompleteInputProps>;
export default AutocompleteInput;
