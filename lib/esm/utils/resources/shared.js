import { modelToGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import { ALL_NAMESPACES_SESSION_KEY } from '@kubevirt-utils/hooks/constants';
import { TemplateModel } from '@kubevirt-utils/models';
import { Operator, } from '@openshift-console/dynamic-plugin-sdk';
import { isDataSourceReady } from '../../views/datasources/utils';
import { isEmpty } from './../utils/utils';
import { getDataImportCronFromDataSource } from './bootableresources/helpers';
import { isDataSourceCloning, isDataSourceUploading, } from './template/hooks/useVmTemplateSource/utils';
import { TEMPLATE_TYPE_LABEL } from './template';
/**
 * function for getting an entity's annotation
 * @param entity - entity to get annotation from
 * @param annotationName - name of the annotation to get
 * @param defaultValue - default value to return if annotation is not found
 * @returns the annotation value or defaultValue if not found
 */
export var getAnnotation = function (entity, annotationName, defaultValue) { var _a, _b, _c; return (_c = (_b = (_a = entity === null || entity === void 0 ? void 0 : entity.metadata) === null || _a === void 0 ? void 0 : _a.annotations) === null || _b === void 0 ? void 0 : _b[annotationName]) !== null && _c !== void 0 ? _c : defaultValue; };
/**
 * function for getting an entity's label
 * @param {K8sResourceCommon} entity - entity to get label from
 * @param {string} label - name of the label to get
 * @param {string} defaultValue - default value to return if label is not found
 * @returns the label value or defaultValue if not found
 */
export var getLabel = function (entity, label, defaultValue) { var _a, _b, _c; return (_c = (_b = (_a = entity === null || entity === void 0 ? void 0 : entity.metadata) === null || _a === void 0 ? void 0 : _a.labels) === null || _b === void 0 ? void 0 : _b[label]) !== null && _c !== void 0 ? _c : defaultValue; };
/**
 * function for getting a resource URL
 * @param {ResourceUrlProps} urlProps - object with model, resource to get the URL from (optional) and active namespace/project name (optional)
 * @returns {string} the URL for the resource
 */
export var getResourceUrl = function (urlProps) {
    var _a, _b;
    var activeNamespace = urlProps.activeNamespace, model = urlProps.model, resource = urlProps.resource;
    if (!model)
        return null;
    var crd = model.crd, namespaced = model.namespaced, plural = model.plural;
    var namespace = ((_a = resource === null || resource === void 0 ? void 0 : resource.metadata) === null || _a === void 0 ? void 0 : _a.namespace) ||
        (activeNamespace !== ALL_NAMESPACES_SESSION_KEY && activeNamespace);
    var namespaceUrl = namespace ? "ns/".concat(namespace) : 'all-namespaces';
    var ref = crd ? "".concat(model.apiGroup || 'core', "~").concat(model.apiVersion, "~").concat(model.kind) : plural || '';
    var name = ((_b = resource === null || resource === void 0 ? void 0 : resource.metadata) === null || _b === void 0 ? void 0 : _b.name) || '';
    return "/k8s/".concat(namespaced ? namespaceUrl : 'cluster', "/").concat(ref, "/").concat(name);
};
/**
 * function for getting a condition's reason
 * @param condition - condition to check
 * @returns condition's reason
 */
export var getConditionReason = function (condition) { return condition === null || condition === void 0 ? void 0 : condition.reason; };
/**
 * function for checking if a condition is true
 * @param condition - condition to check
 * @returns true if condition is true, false otherwise
 */
export var isConditionStatusTrue = function (condition) {
    return (condition === null || condition === void 0 ? void 0 : condition.status) === 'True';
};
/**
 * A selector for a resource's conditions
 * @param entity - entity to get condition from
 * @returns array of conditions
 */
export var getStatusConditions = function (entity) { var _a, _b; return (_b = (_a = entity === null || entity === void 0 ? void 0 : entity.status) === null || _a === void 0 ? void 0 : _a.conditions) !== null && _b !== void 0 ? _b : []; };
/**
 * A selector for a resource's conditions based on type
 * @param entity - entity to get condition from
 * @param type - type of the condition
 * @returns condition based on type
 */
export var getStatusConditionsByType = function (entity, type) { var _a; return (_a = getStatusConditions(entity)) === null || _a === void 0 ? void 0 : _a.find(function (condition) { return (condition === null || condition === void 0 ? void 0 : condition.type) === type; }); };
/**
 * function for creating a resource's owner reference from a resource
 * @param {K8sResourceCommon} owner resource to create an owner reference from
 * @param opts optional addinional options
 * @param {boolean} opts.blockOwnerDeletion http://kubevirt.io/api-reference/v0.51.0/definitions.html#_k8s_io_apimachinery_pkg_apis_meta_v1_ownerreference
 * @param {boolean} opts.controller http://kubevirt.io/api-reference/v0.51.0/definitions.html#_k8s_io_apimachinery_pkg_apis_meta_v1_ownerreference
 * @returns a resource's owner reference
 */
export var buildOwnerReference = function (owner, opts) {
    var _a, _b;
    if (opts === void 0) { opts = { blockOwnerDeletion: true }; }
    return ({
        apiVersion: owner === null || owner === void 0 ? void 0 : owner.apiVersion,
        blockOwnerDeletion: opts && opts.blockOwnerDeletion,
        controller: opts && opts.controller,
        kind: owner === null || owner === void 0 ? void 0 : owner.kind,
        name: (_a = owner === null || owner === void 0 ? void 0 : owner.metadata) === null || _a === void 0 ? void 0 : _a.name,
        uid: (_b = owner === null || owner === void 0 ? void 0 : owner.metadata) === null || _b === void 0 ? void 0 : _b.uid,
    });
};
/**
 * function to compare two OwnerReference objects
 * @param {OwnerReference} obj first object to compare
 * @param {OwnerReference} otherObj second object to compare
 * @returns a boolean indicating if the objects are equal
 */
export var compareOwnerReferences = function (obj, otherObj) {
    if (obj === otherObj) {
        return true;
    }
    if (!obj || !otherObj) {
        return false;
    }
    return ((obj === null || obj === void 0 ? void 0 : obj.uid) === (otherObj === null || otherObj === void 0 ? void 0 : otherObj.uid) ||
        (obj === null || obj === void 0 ? void 0 : obj.name) === (otherObj === null || otherObj === void 0 ? void 0 : otherObj.name) ||
        (obj === null || obj === void 0 ? void 0 : obj.apiVersion) === (otherObj === null || otherObj === void 0 ? void 0 : otherObj.apiVersion) ||
        (obj === null || obj === void 0 ? void 0 : obj.kind) === (otherObj === null || otherObj === void 0 ? void 0 : otherObj.kind));
};
/**
 * function to build AccessReviewResourceAttributes from a resource
 * @param model - k8s model
 * @param obj - resource
 * @param verb - verb
 * @param subresource - subresource
 * @returns AccessReviewResourceAttributes
 */
export var asAccessReview = function (model, obj, verb, subresource) {
    var _a, _b;
    if (!obj) {
        return null;
    }
    return {
        group: model.apiGroup,
        name: (_a = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _a === void 0 ? void 0 : _a.name,
        namespace: (_b = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
        resource: model.plural,
        subresource: subresource,
        verb: verb,
    };
};
/**
 * Provides apiVersion for a k8s model.
 * @param model k8s model
 * @returns The apiVersion for the model i.e `group/version`.
 * */
export var getAPIVersionForModel = function (model) {
    return !(model === null || model === void 0 ? void 0 : model.apiGroup) ? model.apiVersion : "".concat(model.apiGroup, "/").concat(model.apiVersion);
};
/**
 * Get vm printable status
 * @date 7/6/2022 - 11:23:32 AM
 *
 * @param {V1VirtualMachine} vm - vm to get status from
 * @returns {*}
 */
export var getVMStatus = function (vm) { var _a; return (_a = vm === null || vm === void 0 ? void 0 : vm.status) === null || _a === void 0 ? void 0 : _a.printableStatus; };
export var getVMSnapshottingStatus = function (vm) { var _a; return (_a = vm === null || vm === void 0 ? void 0 : vm.status) === null || _a === void 0 ? void 0 : _a.snapshotInProgress; };
export var getVMRestoringStatus = function (vm) { var _a; return (_a = vm === null || vm === void 0 ? void 0 : vm.status) === null || _a === void 0 ? void 0 : _a.restoreInProgress; };
/**
 * Get allowed resource for project
 * @date 7/6/2022 - 11:23:32 AM
 *
 * @param {string[]} projectNames - project names
 * @param {K8sModel} model - k8s model
 * @returns {*}
 */
export var getAllowedResources = function (projectNames, model) {
    return Object.fromEntries((projectNames || []).map(function (projName) { return [
        "".concat(projName, "/").concat(model.plural),
        {
            groupVersionKind: modelToGroupVersionKind(model),
            isList: true,
            namespace: projName,
            namespaced: true,
        },
    ]; }));
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
export var getAllowedResourceData = function (resources, model) {
    var _a, _b, _c;
    var resourcesArray = Object.entries(resources)
        .map(function (_a) {
        var key = _a[0], _b = _a[1], data = _b.data, loaded = _b.loaded, loadError = _b.loadError;
        if (loaded && (key === null || key === void 0 ? void 0 : key.includes(model.plural)) && !isEmpty(data)) {
            return { data: data, loaded: loaded, loadError: loadError };
        }
    })
        .filter(Boolean);
    var resourceData = (resourcesArray || []).map(function (_a) {
        var data = _a.data;
        return data;
    }).flat();
    var resourceLoaded = (_a = (resourcesArray || [])
        .map(function (_a) {
        var loaded = _a.loaded;
        return loaded;
    })) === null || _a === void 0 ? void 0 : _a.every(function (vmLoaded) { return vmLoaded; });
    var resourceLoadError = (_c = (_b = (resourcesArray || [])
        .map(function (_a) {
        var loadError = _a.loadError;
        return loadError;
    })) === null || _b === void 0 ? void 0 : _b.filter(Boolean)) === null || _c === void 0 ? void 0 : _c.join('');
    return { data: resourceData, loaded: resourceLoaded, loadError: resourceLoadError };
};
/**
 * Get allowed templates resources
 * @date 7/6/2022 - 11:23:32 AM
 *
 * @param {string[]} projectNames - project names
 * @returns {*}
 */
export var getAllowedTemplateResources = function (projectNames) {
    var TemplateModelGroupVersionKind = modelToGroupVersionKind(TemplateModel);
    return Object.fromEntries((projectNames || []).map(function (projName) { return [
        "".concat(projName, "/").concat(TemplateModel.plural),
        {
            groupVersionKind: TemplateModelGroupVersionKind,
            isList: true,
            namespace: projName,
            selector: {
                matchExpressions: [
                    {
                        key: TEMPLATE_TYPE_LABEL,
                        operator: Operator.Exists,
                    },
                ],
            },
        },
    ]; }));
};
/**
 *
 * @param resource k8s resource
 * @returns resource's name
 */
export var getName = function (resource) { var _a; return (_a = resource === null || resource === void 0 ? void 0 : resource.metadata) === null || _a === void 0 ? void 0 : _a.name; };
/**
 *
 * @param resource k8s resource
 * @returns resource's namespace
 */
export var getNamespace = function (resource) { var _a; return (_a = resource === null || resource === void 0 ? void 0 : resource.metadata) === null || _a === void 0 ? void 0 : _a.namespace; };
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
export var convertResourceArrayToMap = function (resources, isNamespaced) {
    return (resources || []).reduce(function (map, resource) {
        var _a = (resource === null || resource === void 0 ? void 0 : resource.metadata) || {}, name = _a.name, namespace = _a.namespace;
        if (isNamespaced) {
            if (!map[namespace])
                map[namespace] = {};
            map[namespace][name] = resource;
            return map;
        }
        map[name] = resource;
        return map;
    }, {});
};
/**
 * function to get all V1beta1DataSource objects with condition type 'Ready'and status to be 'True'
 * @param {V1beta1DataSource[]} dataSources list of DataSources to be filtered
 * @returns list of available/ready DataSources
 */
export var getAvailableDataSources = function (dataSources) {
    return dataSources === null || dataSources === void 0 ? void 0 : dataSources.filter(function (dataSource) { return isDataSourceReady(dataSource); });
};
export var isDataImportCronProgressing = function (dataImportCron) {
    var _a, _b, _c;
    return ((_c = (_b = (_a = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.status) === null || _a === void 0 ? void 0 : _a.conditions) === null || _b === void 0 ? void 0 : _b.find(function (condition) { return condition.type === 'UpToDate'; })) === null || _c === void 0 ? void 0 : _c.reason) ===
        'ImportProgressing';
};
/**
 * function to get all V1beta1DataSource objects with condition type 'Ready'and status 'True'
 * and/or also those with 'False' status but only 'CloneScheduled' or 'CloneInProgress' reason (cloning of the DS in progress)
 * @param {V1beta1DataSource[]} dataSources list of DataSources to be filtered
 * @param {V1beta1DataImportCron[]} dataImportCrons list of DataImportCrons related to DataSources
 * @returns list of available/ready/cloning DataSources
 */
export var getReadyOrCloningOrUploadingDataSources = function (dataSources, dataImportCrons) {
    return dataSources === null || dataSources === void 0 ? void 0 : dataSources.filter(function (dataSource) {
        var dataImportCron = getDataImportCronFromDataSource(dataImportCrons, dataSource);
        return (isDataSourceReady(dataSource) ||
            isDataSourceCloning(dataSource) ||
            isDataSourceUploading(dataSource) ||
            isDataImportCronProgressing(dataImportCron));
    });
};
//# sourceMappingURL=shared.js.map