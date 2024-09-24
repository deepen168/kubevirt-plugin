import { FC, ReactNode } from 'react';
import { HyperConverged } from '@kubevirt-utils/hooks/useHyperConvergeConfiguration';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
import '../shared/general-settings.scss';
declare type GeneralSettingsProjectProps = {
    description: ReactNode;
    hcoResourceNamespace: string;
    hyperConvergeConfiguration: [hyperConvergeConfig: HyperConverged, loaded: boolean, error: any];
    namespace: string;
    onChange: (hyperConverged: HyperConverged, newNamespace: null | number | string, handelError: (value: string) => void, handleLoading: (value: boolean) => void) => void;
    projectsData: [projects: K8sResourceCommon[], loaded: boolean, error: any];
    toggleText: string;
};
declare const GeneralSettingsProject: FC<GeneralSettingsProjectProps>;
export default GeneralSettingsProject;
