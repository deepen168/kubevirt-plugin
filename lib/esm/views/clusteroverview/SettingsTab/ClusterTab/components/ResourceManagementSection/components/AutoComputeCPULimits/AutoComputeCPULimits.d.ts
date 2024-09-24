import { FC } from 'react';
import { HyperConverged } from '@kubevirt-utils/hooks/useHyperConvergeConfiguration';
declare type AutoComputeCPULimitsProps = {
    hyperConvergeConfiguration: [hyperConvergeConfig: HyperConverged, loaded: boolean, error: Error];
    newBadge?: boolean;
};
declare const AutoComputeCPULimits: FC<AutoComputeCPULimitsProps>;
export default AutoComputeCPULimits;
