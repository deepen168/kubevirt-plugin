import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const getDriversImage: () => Promise<string>;
export declare const mountWinDriversToVM: (vm: V1VirtualMachine) => Promise<V1VirtualMachine>;
