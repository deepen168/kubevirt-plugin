import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
declare type UseVirtualMachineLogData = (args: {
    connect?: boolean;
    pod: K8sResourceCommon;
}) => {
    data: string[];
};
declare const useVirtualMachineLogData: UseVirtualMachineLogData;
export default useVirtualMachineLogData;
