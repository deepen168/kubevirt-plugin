import { FC } from 'react';
import './EnableFeatureCheckbox.scss';
declare type EnableFeatureCheckboxProps = {
    description?: string;
    externalLink?: string;
    featureName: string;
    helpText?: string;
    id: string;
    label: string;
};
declare const EnableFeatureCheckbox: FC<EnableFeatureCheckboxProps>;
export default EnableFeatureCheckbox;
