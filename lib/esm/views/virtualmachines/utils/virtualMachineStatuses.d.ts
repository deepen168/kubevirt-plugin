import { ComponentClass, FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const printableVMStatus: {
    Migrating: string;
    Paused: string;
    Provisioning: string;
    Running: string;
    Starting: string;
    Stopped: string;
    Stopping: string;
    Terminating: string;
    Unknown: string;
    WaitingForVolumeBinding: string;
};
export declare const errorPrintableVMStatus: {
    CrashLoopBackOff: string;
    DataVolumeError: string;
    ErrImagePull: string;
    ErrorDataVolumeNotFound: string;
    ErrorPvcNotFound: string;
    ErrorUnschedulable: string;
    ImagePullBackOff: string;
};
export declare const isErrorPrintableStatus: (printableStatus: string) => boolean;
export declare const getVMStatusIcon: (status: string) => ComponentClass | FC;
export declare const isStopped: (vm: V1VirtualMachine) => boolean;
export declare const isPaused: (vm: V1VirtualMachine) => boolean;
export declare const isRestoring: (vm: V1VirtualMachine) => boolean;
export declare const isSnapshotting: (vm: V1VirtualMachine) => boolean;
