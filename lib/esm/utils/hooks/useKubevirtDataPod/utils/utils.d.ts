import { K8sResourceCommon, WatchK8sResource } from '@openshift-console/dynamic-plugin-sdk';
export declare const registerResourceVersion: (key: string, rs: string) => void;
export declare const getResourceVersion: (key: string) => any;
export declare const constructURL: (watchOptions: WatchK8sResource, query?: string) => string;
export declare const compareNameAndNamespace: (obj: K8sResourceCommon, compObj: K8sResourceCommon) => boolean;
