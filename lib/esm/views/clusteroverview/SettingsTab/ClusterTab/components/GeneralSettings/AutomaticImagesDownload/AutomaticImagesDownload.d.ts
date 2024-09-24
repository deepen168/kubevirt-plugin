import { FC } from 'react';
import { HyperConverged } from '@kubevirt-utils/hooks/useHyperConvergeConfiguration';
import './automatic-images-download.scss';
declare type AutomaticImagesDownloadProps = {
    hyperConvergeConfiguration: [hyperConvergeConfig: HyperConverged, loaded: boolean, error: any];
    newBadge: boolean;
};
declare const AutomaticImagesDownload: FC<AutomaticImagesDownloadProps>;
export default AutomaticImagesDownload;
