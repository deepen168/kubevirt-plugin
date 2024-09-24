import { Dispatch, FC, SetStateAction } from 'react';
import { BinaryUnit } from '@kubevirt-utils/utils/units';
declare type BandwidthInputProps = {
    setState: Dispatch<SetStateAction<{
        unit: BinaryUnit;
        value: number;
    }>>;
    state: {
        unit: BinaryUnit;
        value: number;
    };
};
declare const BandwidthInput: FC<BandwidthInputProps>;
export default BandwidthInput;
