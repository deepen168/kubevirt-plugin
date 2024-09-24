import { V1VirtualMachine, V1VirtualMachineInstanceMigration } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { ModalComponent } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import { Action } from '@openshift-console/dynamic-plugin-sdk';
export declare const VirtualMachineActionFactory: {
    cancelMigration: (vm: V1VirtualMachine, vmim: V1VirtualMachineInstanceMigration, isSingleNodeCluster: boolean) => Action;
    clone: (vm: V1VirtualMachine, createModal: (modal: ModalComponent) => void) => Action;
    copySSHCommand: (vm: V1VirtualMachine, command: string) => Action;
    delete: (vm: V1VirtualMachine, createModal: (modal: ModalComponent) => void) => Action;
    editAnnotations: (vm: V1VirtualMachine, createModal: (modal: ModalComponent) => void) => Action;
    editLabels: (vm: V1VirtualMachine, createModal: (modal: ModalComponent) => void) => Action;
    forceStop: (vm: V1VirtualMachine) => Action;
    migrate: (vm: V1VirtualMachine, isSingleNodeCluster: boolean) => Action;
    pause: (vm: V1VirtualMachine) => Action;
    restart: (vm: V1VirtualMachine) => Action;
    snapshot: (vm: V1VirtualMachine, createModal: (modal: ModalComponent) => void) => Action;
    start: (vm: V1VirtualMachine) => Action;
    stop: (vm: V1VirtualMachine) => Action;
    unpause: (vm: V1VirtualMachine) => Action;
};
