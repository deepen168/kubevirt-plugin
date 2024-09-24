import { Dispatch, FC, SetStateAction } from 'react';
import { V1beta1DataVolume } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { IoK8sApiCoreV1PersistentVolumeClaim } from '@kubevirt-ui/kubevirt-api/kubernetes';
declare type DeleteVolumeCheckboxProps = {
    resource: IoK8sApiCoreV1PersistentVolumeClaim | V1beta1DataVolume;
    setVolumesToSave: Dispatch<SetStateAction<(IoK8sApiCoreV1PersistentVolumeClaim | V1beta1DataVolume)[]>>;
    volumesToSave: (IoK8sApiCoreV1PersistentVolumeClaim | V1beta1DataVolume)[];
};
declare const DeleteVolumeCheckbox: FC<DeleteVolumeCheckboxProps>;
export default DeleteVolumeCheckbox;
