import { FC } from 'react';
import { HyperConverged } from '@kubevirt-utils/hooks/useHyperConvergeConfiguration';
declare type ResourceManagementSectionProps = {
    hyperConvergeConfiguration: [hyperConvergeConfig: HyperConverged, loaded: boolean, error: Error];
    newBadge?: boolean;
};
declare const ResourceManagementSection: FC<ResourceManagementSectionProps>;
export default ResourceManagementSection;
