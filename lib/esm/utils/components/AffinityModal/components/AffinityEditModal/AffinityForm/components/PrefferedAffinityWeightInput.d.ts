import { Dispatch, FC, SetStateAction } from 'react';
import { AffinityRowData } from '../../../../utils/types';
declare type PrefferedAffinityWeightInputProps = {
    focusedAffinity: AffinityRowData;
    setFocusedAffinity: Dispatch<SetStateAction<AffinityRowData>>;
    setSubmitDisabled: Dispatch<SetStateAction<boolean>>;
};
declare const PrefferedAffinityWeightInput: FC<PrefferedAffinityWeightInputProps>;
export default PrefferedAffinityWeightInput;
