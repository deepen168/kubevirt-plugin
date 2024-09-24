import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const getCreateVMVirtctlCommand: (vm: V1VirtualMachine, selectedBootableVolume: BootableVolume, sshPubKey: string) => string;
