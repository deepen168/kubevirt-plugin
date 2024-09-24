import { K8sModel, K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
/**
 * create multiple resources from a list of dynamic objects
 * @param resources - resources to create
 * @param models - k8s models
 * @param namespace - namespace to create resources in
 * @returns promise of created resources
 */
export declare const createMultipleResources: (resources: K8sResourceCommon[], models: {
    [key: string]: K8sModel;
}, namespace?: string) => Promise<K8sResourceCommon[]>;
export declare const isRHELTemplate: (template: V1Template) => boolean;
