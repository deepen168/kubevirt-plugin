import { FC } from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
declare type CPUUtilProps = {
    pods: K8sResourceCommon[];
    vmi: V1VirtualMachineInstance;
};
declare const CPUUtil: FC<CPUUtilProps>;
export default CPUUtil;
