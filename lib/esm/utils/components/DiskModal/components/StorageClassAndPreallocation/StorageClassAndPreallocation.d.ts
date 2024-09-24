import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type StorageClassAndPreallocationProps = {
    vm: V1VirtualMachine;
};
declare const StorageClassAndPreallocation: FC<StorageClassAndPreallocationProps>;
export default StorageClassAndPreallocation;
