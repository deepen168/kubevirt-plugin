import { FC } from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type MemoryUtilProps = {
    vmi: V1VirtualMachineInstance;
};
declare const MemoryUtil: FC<MemoryUtilProps>;
export default MemoryUtil;
