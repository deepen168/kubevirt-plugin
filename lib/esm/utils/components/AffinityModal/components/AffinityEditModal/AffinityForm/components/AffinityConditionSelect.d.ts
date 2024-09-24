import { Dispatch, FC, SetStateAction } from 'react';
import { AffinityRowData } from '../../../../utils/types';
declare type AffinityConditionSelectProps = {
    focusedAffinity: AffinityRowData;
    setFocusedAffinity: Dispatch<SetStateAction<AffinityRowData>>;
};
declare const AffinityConditionSelect: FC<AffinityConditionSelectProps>;
export default AffinityConditionSelect;
