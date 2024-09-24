import React from 'react';
import { IoK8sApiBatchV1Job, IoK8sApiCoreV1ConfigMap } from '@kubevirt-ui/kubevirt-api/kubernetes';
declare const CheckupsStorageActions: ({ configMap, isKebab, jobs, }: {
    configMap: IoK8sApiCoreV1ConfigMap;
    isKebab?: boolean | undefined;
    jobs: IoK8sApiBatchV1Job[];
}) => React.JSX.Element;
export default CheckupsStorageActions;
