import { K8sResourceCommon, WatchK8sResource } from '@openshift-console/dynamic-plugin-sdk';
declare type UseKubevirtDataPod = <T extends K8sResourceCommon>(watchOptions: WatchK8sResource, filterOptions?: {
    [key: string]: string;
}) => [T, boolean, Error];
declare const useKubevirtDataPod: UseKubevirtDataPod;
export default useKubevirtDataPod;
