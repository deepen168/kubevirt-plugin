import * as React from 'react';
import { RowProps } from '@openshift-console/dynamic-plugin-sdk';
import { AffinityRowData } from '../../../utils/types';
export declare type AffinityRowProps = {
    obj: AffinityRowData;
};
declare const AffinityRow: React.FC<RowProps<AffinityRowData, {
    onDelete: (affinity: AffinityRowData) => void;
    onEdit: (affinity: AffinityRowData) => void;
}>>;
export default AffinityRow;
