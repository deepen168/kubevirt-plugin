import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { V1beta1DataVolumeSpec, V1ContainerDiskSource, V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const getRegistryHelperText: (template: V1Template) => any;
export declare const getDiskSource: (vm: V1VirtualMachine, diskName: string) => undefined | V1beta1DataVolumeSpec | V1ContainerDiskSource;
export declare const overrideVirtualMachineDataVolumeSpec: (virtualMachine: V1VirtualMachine, customSource?: V1beta1DataVolumeSpec) => V1VirtualMachine;
