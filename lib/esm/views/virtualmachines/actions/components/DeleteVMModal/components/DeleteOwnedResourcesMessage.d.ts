import { Dispatch, FC, SetStateAction } from 'react';
import { V1beta1DataVolume } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { IoK8sApiCoreV1PersistentVolumeClaim } from '@kubevirt-ui/kubevirt-api/kubernetes/models';
import { V1beta1VirtualMachineSnapshot } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type DeleteOwnedResourcesMessageProps = {
    dataVolumes: V1beta1DataVolume[];
    loaded: boolean;
    pvcs: IoK8sApiCoreV1PersistentVolumeClaim[];
    setVolumesToSave: Dispatch<SetStateAction<(IoK8sApiCoreV1PersistentVolumeClaim | V1beta1DataVolume)[]>>;
    snapshots: V1beta1VirtualMachineSnapshot[];
    volumesToSave: (IoK8sApiCoreV1PersistentVolumeClaim | V1beta1DataVolume)[];
};
declare const DeleteOwnedResourcesMessage: FC<DeleteOwnedResourcesMessageProps>;
export default DeleteOwnedResourcesMessage;
