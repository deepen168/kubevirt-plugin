import { IoK8sApiCoreV1ConfigMap } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { WatchK8sResult } from '@openshift-console/dynamic-plugin-sdk';
declare const useSysprepConfigMaps: (namespace: string) => WatchK8sResult<IoK8sApiCoreV1ConfigMap[]>;
export default useSysprepConfigMaps;
