import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { PrometheusResult } from '@openshift-console/dynamic-plugin-sdk';
declare type UseNetworkData = (vmi: V1VirtualMachineInstance, nic: string) => {
    data: {
        in: PrometheusResult[];
        out: PrometheusResult[];
        total: PrometheusResult[];
    };
    links: {
        [key: string]: string;
    };
};
declare const useNetworkData: UseNetworkData;
export default useNetworkData;
