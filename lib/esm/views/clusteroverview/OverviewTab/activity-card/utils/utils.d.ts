import { FirehoseResource, WatchK8sResource } from '@openshift-console/dynamic-plugin-sdk';
export declare const eventTypes: string[];
export declare const asUniqueResource: (resource: FirehoseResource, prefix: number | string) => FirehoseResource;
export declare const asWatchK8sResource: (resource: FirehoseResource) => WatchK8sResource;
