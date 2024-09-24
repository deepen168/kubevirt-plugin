import { V1VirtualMachine, V1Volume } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { SelectOptionObject } from '@patternfly/react-core/deprecated';
import { EnvironmentKind, EnvironmentVariable } from './constants';
export declare const getVMEnvironmentsVariables: (vm: V1VirtualMachine) => EnvironmentVariable[];
export declare const getRandomSerial: (len?: number) => string;
export declare const updateVolumeForKind: (envVolume: V1Volume, resourceName: string, kind: EnvironmentKind) => V1Volume;
export declare const areEnvironmentsChanged: (environments: EnvironmentVariable[], initialEnvironments: EnvironmentVariable[]) => boolean;
export declare class EnvironmentOption implements SelectOptionObject {
    private kind;
    private name;
    toString: () => string;
    constructor(name: string, kind: EnvironmentKind);
    getKind(): EnvironmentKind;
    getName(): string;
}
