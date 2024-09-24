import * as React from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type PodsProps = {
    vmi: V1VirtualMachineInstance;
};
declare const Pods: React.FC<PodsProps>;
export default Pods;
