import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { PendingChange } from '../utils/types';
export declare const usePendingChanges: (vm: V1VirtualMachine, vmi: V1VirtualMachineInstance) => PendingChange[];
