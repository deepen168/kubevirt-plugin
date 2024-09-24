import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const removeWindowsDrivers: (vm: V1VirtualMachine, windowsVolumeName: string) => V1VirtualMachine;
export declare const useDriversImage: () => [string, boolean];
