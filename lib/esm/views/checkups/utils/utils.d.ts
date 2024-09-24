import { Location } from 'react-router-dom-v5-compat';
import { IoK8sApiBatchV1Job, IoK8sApiCoreV1ConfigMap } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
import { SortByDirection } from '@patternfly/react-table';
export declare const KUBEVIRT_VM_LATENCY_LABEL = "kiagnose/checkup-type";
export declare const STATUS_TIMEOUT = "spec.timeout";
export declare const STATUS_START_TIME_STAMP = "status.startTimestamp";
export declare const STATUS_FAILURE_REASON = "status.failureReason";
export declare const STATUS_SUCCEEDED = "status.succeeded";
export declare const STATUS_COMPILATION_TIME_STAMP = "status.completionTimestamp";
export declare const CONFIGMAP_NAME = "CONFIGMAP_NAME";
export declare const generateWithNumbers: (name: string) => string;
export declare const findObjectByName: <T extends K8sResourceCommon>(arr: T[], name: string) => T;
export declare const columnsSorting: (data: IoK8sApiCoreV1ConfigMap[], sortDirection: SortByDirection, field: string, isNumberCompare?: boolean) => IoK8sApiCoreV1ConfigMap[];
export declare const trimLastHistoryPath: (pathName: Location['pathname']) => string;
export declare const getJobByName: (jobs: IoK8sApiBatchV1Job[], configMapName: string) => IoK8sApiBatchV1Job[];
export declare enum NetworkCheckupsStatus {
    'Done' = "done",
    'Failed' = "failed",
    'Running' = "running"
}
export declare const getJobStatus: (job: IoK8sApiBatchV1Job) => NetworkCheckupsStatus;
export declare const getConfigMapStatus: (configMap: IoK8sApiCoreV1ConfigMap, jobStatus: NetworkCheckupsStatus) => NetworkCheckupsStatus;
