import * as React from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type EvictionStrategyProps = {
    vmi: V1VirtualMachineInstance;
};
declare const EvictionStrategy: React.FC<EvictionStrategyProps>;
export default EvictionStrategy;
