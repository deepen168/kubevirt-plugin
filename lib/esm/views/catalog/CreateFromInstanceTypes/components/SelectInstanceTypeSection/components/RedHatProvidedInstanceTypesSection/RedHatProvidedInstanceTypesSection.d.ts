import { FC } from 'react';
import { RedHatInstanceTypeMetadata } from '@kubevirt-utils/components/AddBootableVolumeModal/components/VolumeMetadata/components/InstanceTypeDrilldownSelect/utils/types';
declare type RedHatProvidedInstanceTypesSectionProps = {
    redHatMenuItems: RedHatInstanceTypeMetadata;
};
declare const RedHatProvidedInstanceTypesSection: FC<RedHatProvidedInstanceTypesSectionProps>;
export default RedHatProvidedInstanceTypesSection;
