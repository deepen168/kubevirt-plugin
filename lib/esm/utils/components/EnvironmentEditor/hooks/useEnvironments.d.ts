import { Updater } from 'use-immer';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { EnvironmentKind, EnvironmentVariable } from '../constants';
declare type UseEnvironmentsType = {
    edited: boolean;
    environments: EnvironmentVariable[];
    error: Error;
    onEnvironmentAdd: () => void;
    onEnvironmentChange: (value: string, serial: string, kind: EnvironmentKind, diskName: string) => void;
    onEnvironmentRemove: (diskName: string) => void;
    setError: (error: Error | undefined) => void;
};
declare const useEnvironments: (vm: V1VirtualMachine, originalVM: V1VirtualMachine, updateVM: Updater<V1VirtualMachine>, onEditChange?: ((edited: boolean) => void) | undefined) => UseEnvironmentsType;
export default useEnvironments;
