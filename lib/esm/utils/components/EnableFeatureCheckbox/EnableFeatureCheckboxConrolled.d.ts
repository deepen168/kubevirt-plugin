import { FC } from 'react';
import './EnableFeatureCheckbox.scss';
declare type EnableFeatureCheckboxControlledProps = {
    canEdit: boolean;
    description?: string;
    externalLink?: string;
    featureEnabled: boolean;
    helpText?: string;
    id: string;
    isDisabled?: boolean;
    label: string;
    loading: boolean;
    toggleFeature: (val: boolean) => void;
};
declare const EnableFeatureCheckboxControlled: FC<EnableFeatureCheckboxControlledProps>;
export default EnableFeatureCheckboxControlled;
