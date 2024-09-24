import { FC } from 'react';
import { HyperConverged } from '@kubevirt-utils/hooks/useHyperConvergeConfiguration';
declare type MemoryDensityProps = {
    hyperConvergeConfiguration: [hyperConvergeConfig: HyperConverged, loaded: boolean, error: any];
    newBadge: boolean;
};
declare const MemoryDensity: FC<MemoryDensityProps>;
export default MemoryDensity;
