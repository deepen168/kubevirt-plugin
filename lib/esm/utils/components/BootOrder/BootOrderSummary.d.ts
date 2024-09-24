import React from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type BootOrderSummaryProps = {
    vm: V1VirtualMachine;
};
declare const BootOrderSummary: React.FC<BootOrderSummaryProps>;
export default BootOrderSummary;
