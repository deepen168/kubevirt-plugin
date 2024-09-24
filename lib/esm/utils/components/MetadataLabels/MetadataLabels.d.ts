import { FC } from 'react';
import { K8sModel } from '@openshift-console/dynamic-plugin-sdk';
import './MetadataLabels.scss';
declare type MetadataLabelsProps = {
    labels?: {
        [key: string]: string;
    };
    model: K8sModel;
};
declare const MetadataLabels: FC<MetadataLabelsProps>;
export default MetadataLabels;
