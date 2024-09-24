import { V1beta1VirtualMachineClusterInstancetype, V1beta1VirtualMachineInstancetype } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { InstanceTypesMenuItemsData } from './types';
export declare const isRedHatInstanceType: (instanceType: V1beta1VirtualMachineClusterInstancetype | V1beta1VirtualMachineInstancetype) => boolean;
export declare const getInstanceTypeMenuItems: (instanceTypes: V1beta1VirtualMachineClusterInstancetype[]) => InstanceTypesMenuItemsData;
