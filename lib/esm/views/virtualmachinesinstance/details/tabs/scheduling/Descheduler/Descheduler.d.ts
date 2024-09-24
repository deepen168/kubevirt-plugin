import * as React from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type DeschedulerProps = {
    vmi: V1VirtualMachineInstance;
};
declare const Descheduler: React.FC<DeschedulerProps>;
export default Descheduler;
