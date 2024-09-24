import { IoK8sApiCoreV1ConfigMap } from '@kubevirt-ui/kubevirt-api/kubernetes';
export declare const parseNestedJSON: <T>(str: string) => T;
export declare const patchUserConfigMap: (userConfigMap: IoK8sApiCoreV1ConfigMap, userName: string, data: {
    [key: string]: any;
}) => Promise<IoK8sApiCoreV1ConfigMap>;
