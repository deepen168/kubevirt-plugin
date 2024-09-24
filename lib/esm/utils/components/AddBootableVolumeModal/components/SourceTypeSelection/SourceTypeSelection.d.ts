import { FC } from 'react';
import { DROPDOWN_FORM_SELECTION } from '../../utils/constants';
declare type SourceTypeSelectionProps = {
    formSelection: DROPDOWN_FORM_SELECTION;
    namespace: string;
    setFormSelection: (value: DROPDOWN_FORM_SELECTION) => void;
};
declare const SourceTypeSelection: FC<SourceTypeSelectionProps>;
export default SourceTypeSelection;
