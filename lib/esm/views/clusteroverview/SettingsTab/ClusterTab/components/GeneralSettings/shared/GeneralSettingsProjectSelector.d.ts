import { FC } from 'react';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
declare type GeneralSettingsProjectSelectorProps = {
    loaded: boolean;
    onSelect: (value: string) => void;
    projects: K8sResourceCommon[];
    selectedProject: string;
    setSelectedProject: (value: string) => void;
};
declare const GeneralSettingsProjectSelector: FC<GeneralSettingsProjectSelectorProps>;
export default GeneralSettingsProjectSelector;
