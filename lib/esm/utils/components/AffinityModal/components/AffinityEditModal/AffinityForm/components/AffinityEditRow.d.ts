import { FC } from 'react';
import { AffinityLabel } from '../../../../utils/types';
import './affinity-edit-row.scss';
declare type AffinityExpressionRowProps = {
    expression: AffinityLabel;
    onChange: (label: AffinityLabel) => void;
    onDelete: (id: any) => void;
    rowID?: string;
};
declare const AffinityExpressionRow: FC<AffinityExpressionRowProps>;
export default AffinityExpressionRow;
