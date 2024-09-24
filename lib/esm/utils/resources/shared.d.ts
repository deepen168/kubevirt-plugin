import { V1beta1DataImportCron, V1beta1DataSource } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { V1alpha1Condition, V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { AccessReviewResourceAttributes, K8sModel, K8sResourceCommon, K8sVerb, Operator, OwnerReference, WatchK8sResults } from '@openshift-console/dynamic-plugin-sdk';
/**
 * function for getting an entity's annotation
 * @param entity - entity to get annotation from
 * @param annotationName - name of the annotation to get
 * @param defaultValue - default value to return if annotation is not found
 * @returns the annotation value or defaultValue if not found
 */
export declare const getAnnotation: (entity: K8sResourceCommon, annotationName: string, defaultValue?: string) => string;
/**
 * function for getting an entity's label
 * @param {K8sResourceCommon} entity - entity to get label from
 * @param {string} label - name of the label to get
 * @param {string} defaultValue - default value to return if label is not found
 * @returns the label value or defaultValue if not found
 */
export declare const getLabel: (entity: K8sResourceCommon, label: string, defaultValue?: string) => string;
declare type ResourceUrlProps = {
    activeNamespace?: string;
    model: K8sModel;
    resource?: K8sResourceCommon;
};
/**
 * function for getting a resource URL
 * @param {ResourceUrlProps} urlProps - object with model, resource to get the URL from (optional) and active namespace/project name (optional)
 * @returns {string} the URL for the resource
 */
export declare const getResourceUrl: (urlProps: ResourceUrlProps) => string;
/**
 * function for getting a condition's reason
 * @param condition - condition to check
 * @returns condition's reason
 */
export declare const getConditionReason: (condition: V1alpha1Condition) => string;
/**
 * function for checking if a condition is true
 * @param condition - condition to check
 * @returns true if condition is true, false otherwise
 */
export declare const isConditionStatusTrue: (condition: V1alpha1Condition) => boolean;
/**
 * A selector for a resource's conditions
 * @param entity - entity to get condition from
 * @returns array of conditions
 */
export declare const getStatusConditions: (entity: any) => V1alpha1Condition[];
/**
 * A selector for a resource's conditions based on type
 * @param entity - entity to get condition from
 * @param type - type of the condition
 * @returns condition based on type
 */
export declare const getStatusConditionsByType: (entity: any, type: string) => V1alpha1Condition;
/**
 * function for creating a resource's owner reference from a resource
 * @param {K8sResourceCommon} owner resource to create an owner reference from
 * @param opts optional addinional options
 * @param {boolean} opts.blockOwnerDeletion http://kubevirt.io/api-reference/v0.51.0/definitions.html#_k8s_io_apimachinery_pkg_apis_meta_v1_ownerreference
 * @param {boolean} opts.controller http://kubevirt.io/api-reference/v0.51.0/definitions.html#_k8s_io_apimachinery_pkg_apis_meta_v1_ownerreference
 * @returns a resource's owner reference
 */
export declare const buildOwnerReference: (owner: K8sResourceCommon, opts?: {
    blockOwnerDeletion?: boolean;
    controller?: boolean;
}) => OwnerReference;
/**
 * function to compare two OwnerReference objects
 * @param {OwnerReference} obj first object to compare
 * @param {OwnerReference} otherObj second object to compare
 * @returns a boolean indicating if the objects are equal
 */
export declare const compareOwnerReferences: (obj: OwnerReference, otherObj: OwnerReference) => boolean;
/**
 * function to build AccessReviewResourceAttributes from a resource
 * @param model - k8s model
 * @param obj - resource
 * @param verb - verb
 * @param subresource - subresource
 * @returns AccessReviewResourceAttributes
 */
export declare const asAccessReview: (model: K8sModel, obj: K8sResourceCommon, verb: K8sVerb, subresource?: string) => AccessReviewResourceAttributes;
/**
 * Provides apiVersion for a k8s model.
 * @param model k8s model
 * @returns The apiVersion for the model i.e `group/version`.
 * */
export declare const getAPIVersionForModel: (model: K8sModel) => string;
/**
 * Get vm printable status
 * @date 7/6/2022 - 11:23:32 AM
 *
 * @param {V1VirtualMachine} vm - vm to get status from
 * @returns {*}
 */
export declare const getVMStatus: (vm: V1VirtualMachine) => string | undefined;
export declare const getVMSnapshottingStatus: (vm: V1VirtualMachine) => string | undefined;
export declare const getVMRestoringStatus: (vm: V1VirtualMachine) => string | undefined;
/**
 * Get allowed resource for project
 * @date 7/6/2022 - 11:23:32 AM
 *
 * @param {string[]} projectNames - project names
 * @param {K8sModel} model - k8s model
 * @returns {*}
 */
export declare const getAllowedResources: (projectNames: string[], model: K8sModel) => {
    [k: string]: {
        groupVersionKind: {
            version: string;
            kind: string;
            group: string | undefined;
        };
        isList: boolean;
        namespace: string;
        namespaced: boolean;
    };
};
/**
 * Get allowed resources data
 * @date 7/6/2022 - 11:23:32 AM
 *
 * @param {WatchK8sResults<{
    [key: string]: K8sResourceCommon[];
  }>} resources - resources
 * @param {K8sModel} model - k8s model
 * @returns {{ data: any; loaded: any; loadError: any; }}
 */
export declare const getAllowedResourceData: (resources: WatchK8sResults<{
    [key: string]: K8sResourceCommon[];
}>, model: K8sModel) => {
    data: any[];
    loaded: boolean;
    loadError: string;
};
/**
 * Get allowed templates resources
 * @date 7/6/2022 - 11:23:32 AM
 *
 * @param {string[]} projectNames - project names
 * @returns {*}
 */
export declare const getAllowedTemplateResources: (projectNames: string[]) => {
    [k: string]: {
        groupVersionKind: {
            version: string;
            kind: string;
            group: string | undefined;
        };
        isList: boolean;
        namespace: string;
        selector: {
            matchExpressions: {
                key: string;
                operator: Operator;
            }[];
        };
    };
};
/**
 *
 * @param resource k8s resource
 * @returns resource's name
 */
export declare const getName: <A extends K8sResourceCommon = K8sResourceCommon>(resource: A) => string | undefined;
/**
 *
 * @param resource k8s resource
 * @returns resource's namespace
 */
export declare const getNamespace: <A extends K8sResourceCommon = K8sResourceCommon>(resource: A) => string | undefined;
/**
 * convertResourceArrayToMap is a function that takes in an array of
 * K8sResourceCommon objects and an optional boolean value.
 * It returns an object with the resourceKeyName as the key,
 * and the K8sResourceCommon object as the value.
 * If isNamespaced is true, then the resourceKeyName will be a combination of the namespace and name
 * of the K8sResourceCommon object. (for example: objName[namespace][name])
 * Otherwise, it will just be the name of the K8sResourceCommon object. (for example: objName[name])
 * @param {A extends K8sResourceCommon} resources - resources array
 * @param {boolean} isNamespaced - (optional) - a flag to indicate if the resource is namespace-scoped
 */
export declare const convertResourceArrayToMap: <A extends K8sResourceCommon = K8sResourceCommon>(resources: A[], isNamespaced?: boolean) => {
    [resourceKeyName: string]: A;
};
/**
 * function to get all V1beta1DataSource objects with condition type 'Ready'and status to be 'True'
 * @param {V1beta1DataSource[]} dataSources list of DataSources to be filtered
 * @returns list of available/ready DataSources
 */
export declare const getAvailableDataSources: (dataSources: V1beta1DataSource[]) => V1beta1DataSource[];
export declare const isDataImportCronProgressing: (dataImportCron: V1beta1DataImportCron) => boolean;
/**
 * function to get all V1beta1DataSource objects with condition type 'Ready'and status 'True'
 * and/or also those with 'False' status but only 'CloneScheduled' or 'CloneInProgress' reason (cloning of the DS in progress)
 * @param {V1beta1DataSource[]} dataSources list of DataSources to be filtered
 * @param {V1beta1DataImportCron[]} dataImportCrons list of DataImportCrons related to DataSources
 * @returns list of available/ready/cloning DataSources
 */
export declare const getReadyOrCloningOrUploadingDataSources: (dataSources: V1beta1DataSource[], dataImportCrons: V1beta1DataImportCron[]) => V1beta1DataSource[];
export {};
