import { FC } from 'react';
declare type SuggestionLineProps = {
    className?: string;
    onClick: (param: string) => void;
    suggestion: string;
};
declare const SuggestionLine: FC<SuggestionLineProps>;
export default SuggestionLine;
