import { V1AddVolumeOptions, V1RemoveVolumeOptions, V1StopOptions, V1VirtualMachine, V1VirtualMachineInstanceMigration } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { K8sModel } from '@openshift-console/dynamic-plugin-sdk';
export declare enum VMActionType {
    AddVolume = "addvolume",
    Pause = "pause",
    RemoveVolume = "removevolume",
    Restart = "restart",
    Start = "start",
    Stop = "stop",
    Unpause = "unpause"
}
export declare const VMActionRequest: (vm: V1VirtualMachine, action: VMActionType, model: K8sModel, body?: V1AddVolumeOptions | V1RemoveVolumeOptions | V1StopOptions) => Promise<string | undefined>;
export declare const startVM: (vm: V1VirtualMachine) => Promise<string | undefined>;
export declare const stopVM: (vm: V1VirtualMachine, body?: V1StopOptions) => Promise<string | undefined>;
export declare const restartVM: (vm: V1VirtualMachine) => Promise<string | undefined>;
export declare const pauseVM: (vm: V1VirtualMachine) => Promise<string | undefined>;
export declare const unpauseVM: (vm: V1VirtualMachine) => Promise<string | undefined>;
export declare const addPersistentVolume: (vm: V1VirtualMachine, body: V1AddVolumeOptions) => Promise<string | undefined>;
export declare const removeVolume: (vm: V1VirtualMachine, body: V1RemoveVolumeOptions) => Promise<string | undefined>;
export declare const migrateVM: (vm: V1VirtualMachine) => Promise<void>;
export declare const cancelMigration: (vmim: V1VirtualMachineInstanceMigration) => Promise<void>;
export declare const deleteVM: (vm: V1VirtualMachine) => Promise<void>;
