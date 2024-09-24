import { FC } from 'react';
import { HyperConverged } from '@kubevirt-utils/hooks/useHyperConvergeConfiguration';
import './KernelSamepageMerging.scss';
declare type KernelSamepageMergingProps = {
    hyperConvergeConfiguration: [hyperConvergeConfig: HyperConverged, loaded: boolean, error: Error];
    newBadge?: boolean;
};
declare const KernelSamepageMerging: FC<KernelSamepageMergingProps>;
export default KernelSamepageMerging;
