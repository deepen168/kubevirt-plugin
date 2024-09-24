import { V1beta1DataVolume } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { IoK8sApiCoreV1PersistentVolumeClaim } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { UploadDataProps } from '@kubevirt-utils/hooks/useCDIUpload/useCDIUpload';
import { V1DiskFormState } from './types';
export declare const reorderBootDisk: (vm: V1VirtualMachine, diskName: string, isBootDisk: boolean, initialBootDisk: boolean) => V1VirtualMachine;
export declare const uploadDataVolume: (vm: V1VirtualMachine, uploadData: ({ dataVolume, file }: UploadDataProps) => Promise<void>, data: V1DiskFormState) => Promise<V1beta1DataVolume>;
export declare const editDisk: (data: V1DiskFormState, diskName: string, vm: V1VirtualMachine) => V1VirtualMachine;
export declare const addDisk: (data: V1DiskFormState, vm: V1VirtualMachine) => V1VirtualMachine;
declare type SubmitInput = {
    data: V1DiskFormState;
    editDiskName: string;
    onSubmit: (updatedVM: V1VirtualMachine) => Promise<V1VirtualMachine | void>;
    pvc?: IoK8sApiCoreV1PersistentVolumeClaim;
    vm: V1VirtualMachine;
};
export declare const submit: ({ data, editDiskName, onSubmit, pvc, vm }: SubmitInput) => Promise<any>;
export {};
