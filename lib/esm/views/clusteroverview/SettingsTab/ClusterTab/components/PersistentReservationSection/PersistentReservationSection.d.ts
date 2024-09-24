import { FC } from 'react';
import { HyperConverged } from '@kubevirt-utils/hooks/useHyperConvergeConfiguration';
declare type PersistentReservationSectionProps = {
    hyperConvergeConfiguration: [hyperConvergeConfig: HyperConverged, loaded: boolean, error: Error];
};
declare const PersistentReservationSection: FC<PersistentReservationSectionProps>;
export default PersistentReservationSection;
