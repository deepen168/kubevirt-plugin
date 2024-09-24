import { FC } from 'react';
import { HyperConverged } from '@kubevirt-utils/hooks/useHyperConvergeConfiguration';
declare type GuestManagementSectionProps = {
    hyperConvergeConfiguration: [hyperConvergeConfig: HyperConverged, loaded: boolean, error: any];
    newBadge?: boolean;
};
declare const GuestManagementSection: FC<GuestManagementSectionProps>;
export default GuestManagementSection;
