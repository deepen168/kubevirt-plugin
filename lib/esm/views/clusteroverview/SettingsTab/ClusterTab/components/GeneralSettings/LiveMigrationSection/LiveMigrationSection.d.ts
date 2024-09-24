import { FC } from 'react';
import { HyperConverged } from '@kubevirt-utils/hooks/useHyperConvergeConfiguration';
import './live-migration-section.scss';
declare type LiveMigrationSectionProps = {
    hyperConvergeConfiguration: [hyperConvergeConfig: HyperConverged, loaded: boolean, error: Error];
};
declare const LiveMigrationSection: FC<LiveMigrationSectionProps>;
export default LiveMigrationSection;
