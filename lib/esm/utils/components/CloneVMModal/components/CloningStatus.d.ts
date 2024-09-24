import { FC } from 'react';
import { V1alpha1VirtualMachineClone } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type CloningStatusProps = {
    vmCloneRequest: V1alpha1VirtualMachineClone;
};
declare const CloningStatus: FC<CloningStatusProps>;
export default CloningStatus;
