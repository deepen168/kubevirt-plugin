import { FC } from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type StorageUtilProps = {
    vmi: V1VirtualMachineInstance;
};
declare const StorageUtil: FC<StorageUtilProps>;
export default StorageUtil;
