import * as React from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare const Consoles: React.FC<ConsolesProps>;
declare type ConsolesProps = {
    vmi: V1VirtualMachineInstance;
};
export default Consoles;
