import { FC } from 'react';
import { HyperConverged } from '@kubevirt-utils/hooks/useHyperConvergeConfiguration';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
import '../shared/general-settings.scss';
declare type BootableVolumeProjectSectionProps = {
    hyperConvergeConfiguration: [hyperConvergeConfig: HyperConverged, loaded: boolean, error: any];
    projectsData: [projects: K8sResourceCommon[], loaded: boolean, error: any];
};
declare const BootableVolumeProjectSection: FC<BootableVolumeProjectSectionProps>;
export default BootableVolumeProjectSection;
