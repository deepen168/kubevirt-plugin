import { FC } from 'react';
import './AddBootableVolumeLink.scss';
declare type AddBootableVolumeLinkProps = {
    hidePopover?: () => void;
    loadError: Error;
    text?: string;
};
declare const AddBootableVolumeLink: FC<AddBootableVolumeLinkProps>;
export default AddBootableVolumeLink;
