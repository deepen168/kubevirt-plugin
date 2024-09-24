import { FC } from 'react';
import { BootableResource } from '../../utils/types';
declare type RemoveBootableVolumesModalProps = {
    isOpen: boolean;
    onClose: () => void;
    source: BootableResource;
};
declare const RemoveBootableVolumesModal: FC<RemoveBootableVolumesModalProps>;
export default RemoveBootableVolumesModal;
