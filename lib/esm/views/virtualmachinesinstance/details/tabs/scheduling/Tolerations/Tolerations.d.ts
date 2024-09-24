import * as React from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type TolerationsProps = {
    vmi: V1VirtualMachineInstance;
};
declare const Tolerations: React.FC<TolerationsProps>;
export default Tolerations;
