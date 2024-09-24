import { FC } from 'react';
import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
import './virtual-machines-overview-tab-utilization.scss';
declare type VirtualMachinesOverviewTabUtilizationProps = {
    pods: K8sResourceCommon[];
    vm: V1VirtualMachine;
    vmi: V1VirtualMachineInstance;
};
declare const VirtualMachinesOverviewTabUtilization: FC<VirtualMachinesOverviewTabUtilizationProps>;
export default VirtualMachinesOverviewTabUtilization;
