import { V1beta1VirtualMachineSnapshot } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare type UseSnapshotData = {
    error: any;
    loaded: boolean;
    restoresMap: any;
    snapshots: V1beta1VirtualMachineSnapshot[];
};
declare const useSnapshotData: (vmName: string, namespace: string) => UseSnapshotData;
export default useSnapshotData;
