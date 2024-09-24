import { FC } from 'react';
import { UseInstanceTypeAndPreferencesValues } from '@catalog/CreateFromInstanceTypes/state/utils/types';
import './VMDetailsSection.scss';
declare type DetailsLeftGridProps = {
    instanceTypesAndPreferencesData: UseInstanceTypeAndPreferencesValues;
};
declare const VMDetailsSection: FC<DetailsLeftGridProps>;
export default VMDetailsSection;
