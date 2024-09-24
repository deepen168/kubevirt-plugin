import * as React from 'react';
import { AffinityLabel } from '../../../../utils/types';
declare type AffinityExpressionListProps = {
    addRowText: string;
    expressions: AffinityLabel[];
    onAdd: () => void;
    onChange: (aff: AffinityLabel) => void;
    onDelete: (id: any) => void;
    rowID: string;
};
declare const AffinityEditList: React.FC<AffinityExpressionListProps>;
export default AffinityEditList;
