import { Dispatch, FC, SetStateAction } from 'react';
import { AffinityRowData } from '../../../../utils/types';
declare type AffinityTypeSelectProps = {
    focusedAffinity: AffinityRowData;
    setFocusedAffinity: Dispatch<SetStateAction<AffinityRowData>>;
};
declare const AffinityTypeSelect: FC<AffinityTypeSelectProps>;
export default AffinityTypeSelect;
