import { FC } from 'react';
import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { InstanceTypeUnion } from '../utils/types';
import './details-section.scss';
declare type DetailsSectionProps = {
    allInstanceTypes: InstanceTypeUnion[];
    instanceTypeVM: V1VirtualMachine;
    vm: V1VirtualMachine;
    vmi: V1VirtualMachineInstance;
};
declare const DetailsSection: FC<DetailsSectionProps>;
export default DetailsSection;
