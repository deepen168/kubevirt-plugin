import { FC } from 'react';
import { HyperConverged } from '@kubevirt-utils/hooks/useHyperConvergeConfiguration';
declare type GeneralSettingsProps = {
    hyperConvergeConfiguration: [hyperConvergeConfig: HyperConverged, loaded: boolean, error: any];
    newBadge?: boolean;
};
declare const GeneralSettings: FC<GeneralSettingsProps>;
export default GeneralSettings;
