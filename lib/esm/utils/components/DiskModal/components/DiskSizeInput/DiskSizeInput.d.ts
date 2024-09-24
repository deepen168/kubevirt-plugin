import { FC } from 'react';
import { IoK8sApiCoreV1PersistentVolumeClaim } from '@kubevirt-ui/kubevirt-api/kubernetes';
declare type DiskSizeInputProps = {
    isCreated?: boolean;
    isDisabled?: boolean;
    namespace: string;
    pvc?: IoK8sApiCoreV1PersistentVolumeClaim;
};
declare const DiskSizeInput: FC<DiskSizeInputProps>;
export default DiskSizeInput;
