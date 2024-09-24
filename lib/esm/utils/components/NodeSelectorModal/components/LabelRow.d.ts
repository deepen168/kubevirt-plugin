import { FC } from 'react';
import { IDLabel } from '../utils/types';
declare type LabelRowProps = {
    label: IDLabel;
    onChange: (label: IDLabel) => void;
    onDelete: (id: any) => void;
};
declare const LabelRow: FC<LabelRowProps>;
export default LabelRow;
