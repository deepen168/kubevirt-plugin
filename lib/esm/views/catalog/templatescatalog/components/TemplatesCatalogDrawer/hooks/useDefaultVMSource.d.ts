import { V1beta1DataVolumeSpec, V1ContainerDiskSource, V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare const useDefaultVMSource: (vm: V1VirtualMachine) => {
    currentDiskSource: V1ContainerDiskSource | V1beta1DataVolumeSpec | undefined;
    isDefaultDiskSource: any;
    updateDefaultDiskSource: (generatedVM: V1VirtualMachine) => void;
};
export default useDefaultVMSource;
