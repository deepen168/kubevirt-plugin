import { K8sModel } from '@openshift-console/dynamic-plugin-sdk';
import { ClusterServiceVersionKind } from './types';
export declare const buildUrlForCSVSubscription: (model: K8sModel, name?: string, namespace?: string) => string;
export declare const isNewBadgeNeeded: (installedCSV: ClusterServiceVersionKind) => boolean;
