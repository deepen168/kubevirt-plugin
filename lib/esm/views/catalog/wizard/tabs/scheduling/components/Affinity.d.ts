import * as React from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type AffinityProps = {
    vm: V1VirtualMachine;
};
declare const Affinity: React.FC<AffinityProps>;
export default Affinity;
