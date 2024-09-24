import { FC } from 'react';
import { K8sActivityProps, K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
export declare const DiskImportActivity: FC<K8sActivityProps<K8sResourceCommon & {
    data?: {
        [key: string]: any;
    };
    spec?: {
        [key: string]: any;
    };
    status?: {
        [key: string]: any;
    };
}>>;
