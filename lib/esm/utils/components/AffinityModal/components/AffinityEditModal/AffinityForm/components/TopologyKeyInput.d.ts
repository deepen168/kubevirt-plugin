import { Dispatch, FC, SetStateAction } from 'react';
import { AffinityRowData } from '../../../../utils/types';
declare type TopologyKeyInputProps = {
    focusedAffinity: AffinityRowData;
    setFocusedAffinity: Dispatch<SetStateAction<AffinityRowData>>;
    setSubmitDisabled: Dispatch<SetStateAction<boolean>>;
};
declare const TopologyKeyInput: FC<TopologyKeyInputProps>;
export default TopologyKeyInput;
