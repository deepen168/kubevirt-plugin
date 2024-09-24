import { FC } from 'react';
import { IoK8sApiCoreV1PersistentVolumeClaim } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { BootableVolume } from '@kubevirt-utils/resources/bootableresources/types';
import { VolumeSnapshotKind } from '../SelectSnapshot/types';
import './AddBootableVolumeModal.scss';
declare type AddBootableVolumeModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onCreateVolume?: (source: BootableVolume, pvcSource?: IoK8sApiCoreV1PersistentVolumeClaim, volumeSnapshotSource?: VolumeSnapshotKind) => void;
};
declare const AddBootableVolumeModal: FC<AddBootableVolumeModalProps>;
export default AddBootableVolumeModal;
