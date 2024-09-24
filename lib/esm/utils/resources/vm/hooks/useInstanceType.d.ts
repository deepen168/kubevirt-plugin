import { V1beta1VirtualMachineInstancetype, V1InstancetypeMatcher } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type UseInstanceType = (instanceTypeMatcher: V1InstancetypeMatcher) => {
    instanceType: V1beta1VirtualMachineInstancetype;
    instanceTypeLoaded: boolean;
    instanceTypeLoadError: Error;
};
declare const useInstanceType: UseInstanceType;
export default useInstanceType;
