import { FC } from 'react';
import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
import './virtual-machines-overview-tab-general.scss';
declare type VirtualMachinesOverviewTabGeneralProps = {
    pods: K8sResourceCommon[];
    vm: V1VirtualMachine;
    vmi: V1VirtualMachineInstance;
};
declare const VirtualMachinesOverviewTabGeneral: FC<VirtualMachinesOverviewTabGeneralProps>;
export default VirtualMachinesOverviewTabGeneral;
