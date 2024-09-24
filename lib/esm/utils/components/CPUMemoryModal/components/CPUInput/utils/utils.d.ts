import { V1CPU } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare enum CPUInputType {
    editTopologyManually = "editTopologyManually",
    editVCPU = "editVCPU"
}
export declare enum CPUComponent {
    cores = "cores",
    sockets = "sockets",
    threads = "threads"
}
export declare const getUpdatedCPU: (cpu: V1CPU, newValue: number, fieldChanged: CPUComponent) => V1CPU;
export declare const convertTopologyToVCPUs: (cpu: V1CPU) => number;
export declare const formatVCPUsAsSockets: (cpu: V1CPU) => V1CPU;
