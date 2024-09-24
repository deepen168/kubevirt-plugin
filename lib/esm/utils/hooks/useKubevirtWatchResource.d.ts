import { K8sResourceCommon, WatchK8sResource } from '@openshift-console/dynamic-plugin-sdk';
declare type Result<R extends K8sResourceCommon | K8sResourceCommon[]> = [R, boolean, Error];
declare type UseKubevirtWatchResource = <T extends K8sResourceCommon | K8sResourceCommon[]>(watchOptions: WatchK8sResource, filterOptions?: {
    [key: string]: string;
}) => Result<T>;
declare const useKubevirtWatchResource: UseKubevirtWatchResource;
export default useKubevirtWatchResource;
