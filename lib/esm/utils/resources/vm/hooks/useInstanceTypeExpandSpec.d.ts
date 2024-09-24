import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type UseInstanceTypeExpandSpec = (vm: V1VirtualMachine) => [
    insstanceTypeExpandedSpec: V1VirtualMachine,
    loadingExpandedSpec: boolean,
    errorExpandedSpec: Error
];
declare const useInstanceTypeExpandSpec: UseInstanceTypeExpandSpec;
export default useInstanceTypeExpandSpec;
