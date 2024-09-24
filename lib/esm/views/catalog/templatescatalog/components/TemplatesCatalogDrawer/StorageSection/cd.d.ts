import { V1beta1DataVolumeSpec, V1ContainerDiskSource, V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const addInstallationCDRom: (virtualMachine: V1VirtualMachine, cdSource: V1beta1DataVolumeSpec | V1ContainerDiskSource) => V1VirtualMachine;
export declare const removeCDInstallation: (virtualMachine: V1VirtualMachine) => V1VirtualMachine;
