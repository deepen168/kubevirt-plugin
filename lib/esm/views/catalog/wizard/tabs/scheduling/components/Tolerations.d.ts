import * as React from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type TolerationsProps = {
    vm: V1VirtualMachine;
};
declare const Tolerations: React.FC<TolerationsProps>;
export default Tolerations;
