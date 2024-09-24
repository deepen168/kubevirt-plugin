import { V1beta1VirtualMachineClusterInstancetype, V1beta1VirtualMachineInstancetype, V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare type InstanceTypeUnion = V1beta1VirtualMachineClusterInstancetype | V1beta1VirtualMachineInstancetype;
export declare type ConfigurationInnerTabProps = {
    allInstanceTypes?: InstanceTypeUnion[];
    instanceTypeVM?: V1VirtualMachine;
    vm?: V1VirtualMachine;
    vmi?: V1VirtualMachineInstance;
};
