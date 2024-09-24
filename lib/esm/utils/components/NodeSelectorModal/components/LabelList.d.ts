import { FC, ReactNode } from 'react';
import { K8sModel } from '@openshift-console/dynamic-plugin-sdk';
declare type LabelsListProps = {
    addRowText?: string;
    children: ReactNode;
    emptyStateAddRowText?: string;
    isEmpty: boolean;
    model?: K8sModel;
    onLabelAdd: () => void;
};
declare const LabelsList: FC<LabelsListProps>;
export default LabelsList;
