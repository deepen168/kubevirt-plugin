import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { getAnnotation, getLabel } from '@kubevirt-utils/resources/shared';
import { getCPU } from '@kubevirt-utils/resources/vm';
import { ANNOTATIONS } from './annotations';
import { FLAVORS, OS_NAME_TYPES, TEMPLATE_BASE_IMAGE_NAME_PARAMETER, TEMPLATE_DATA_SOURCE_NAME_PARAMETER, TEMPLATE_DEFAULT_VARIANT_LABEL, TEMPLATE_FLAVOR_LABEL, TEMPLATE_WORKLOAD_LABEL, WORKLOADS, } from './constants';
/**
 * A selector that returns the VirtualMachine object of a given template
 * @param {V1Template} template - template
 */
export var getTemplateVirtualMachineObject = function (template) { var _a; return (_a = template === null || template === void 0 ? void 0 : template.objects) === null || _a === void 0 ? void 0 : _a.find(function (obj) { return obj.kind === VirtualMachineModel.kind; }); };
/**
 * returns true if the given template is a default variant
 * @param {V1Template} template - template
 */
export var isDefaultVariantTemplate = function (template) { var _a, _b; return ((_b = (_a = template === null || template === void 0 ? void 0 : template.metadata) === null || _a === void 0 ? void 0 : _a.labels) === null || _b === void 0 ? void 0 : _b[TEMPLATE_DEFAULT_VARIANT_LABEL]) === 'true'; };
/**
 * A selector that returns the os label name of a given template
 * @param {V1Template} template - template
 */
export var getTemplateOSLabelName = function (template) { var _a, _b; return getAnnotation((_b = (_a = getTemplateVirtualMachineObject(template)) === null || _a === void 0 ? void 0 : _a.spec) === null || _b === void 0 ? void 0 : _b.template, ANNOTATIONS.os); };
/**
 * A selector that returns the os label of a given template
 * @param {V1Template} template - template
 */
export var getTemplateOS = function (template) {
    var _a;
    var templateOS = getTemplateOSLabelName(template);
    return ((_a = Object.values(OS_NAME_TYPES).find(function (osName) { return templateOS === null || templateOS === void 0 ? void 0 : templateOS.includes(osName); })) !== null && _a !== void 0 ? _a : OS_NAME_TYPES.other);
};
/**
 * A selector that returns the template provider name of a given template
 * @param {V1Template} template - template
 */
export var getTemplateProviderName = function (template) {
    return getAnnotation(template, ANNOTATIONS.providerDisplayName);
};
/**
 * A selector that returns the support level of a given template
 * @param {V1Template} template - template
 */
export var getTemplateSupportLevel = function (template) {
    return getAnnotation(template, ANNOTATIONS.supportLevel);
};
/**
 * A selector that returns the containerDisks of a given template
 * @param {V1Template} template - template
 * @returns {string[]} array of containerDisks
 */
export var getTemplateContainerDisks = function (template) { var _a; return (_a = getAnnotation(template, ANNOTATIONS.containerDisks)) === null || _a === void 0 ? void 0 : _a.split('\n'); };
/**
 * A selector that returns the import URLs of a given template
 * @param {V1Template} template - template
 * @returns {string[]} array of import URLS
 */
export var getTemplateImportURLs = function (template) { var _a; return (_a = getAnnotation(template, ANNOTATIONS.importURLs)) === null || _a === void 0 ? void 0 : _a.split('\n'); };
/**
 * A selector that returns the flavor of a given template
 * @param {V1Template} template - template
 */
export var getTemplateFlavor = function (template) {
    var _a;
    // eslint-disable-next-line require-jsdoc
    var isFlavorExist = function (flavor) {
        return getLabel(template, "".concat(TEMPLATE_FLAVOR_LABEL, "/").concat(flavor)) === 'true';
    };
    return (_a = Object.values(FLAVORS).find(function (flavor) { return isFlavorExist(flavor); })) !== null && _a !== void 0 ? _a : 'unknown';
};
/**
 * A selector that returns the workload of a given template
 * @param {V1Template} template - template
 */
export var getTemplateWorkload = function (template) {
    var _a;
    // eslint-disable-next-line require-jsdoc
    var isWorkloadExist = function (workload) {
        return getLabel(template, "".concat(TEMPLATE_WORKLOAD_LABEL, "/").concat(workload)) === 'true';
    };
    return (_a = Object.values(WORKLOADS).find(function (flavor) { return isWorkloadExist(flavor); })) !== null && _a !== void 0 ? _a : 'unknown';
};
/**
 * A selector that returns the networks of a given template
 * @param {V1Template} template - template
 */
export var getTemplateNetworks = function (template) {
    var _a, _b, _c, _d, _e;
    return (_e = (_d = (_c = (_b = (_a = getTemplateVirtualMachineObject(template)) === null || _a === void 0 ? void 0 : _a.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.spec) === null || _d === void 0 ? void 0 : _d.networks) !== null && _e !== void 0 ? _e : [];
};
/**
 * A selector that returns the interfaces of a given template
 * @param {V1Template} template - template
 */
export var getTemplateInterfaces = function (template) {
    var _a, _b, _c, _d, _e, _f, _g;
    return ((_g = (_f = (_e = (_d = (_c = (_b = (_a = getTemplateVirtualMachineObject(template)) === null || _a === void 0 ? void 0 : _a.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.spec) === null || _d === void 0 ? void 0 : _d.domain) === null || _e === void 0 ? void 0 : _e.devices) === null || _f === void 0 ? void 0 : _f.interfaces) !== null && _g !== void 0 ? _g : []);
};
/**
 * A selector that returns the disks of a given template
 * @param {V1Template} template - template
 */
export var getTemplateDisks = function (template) {
    var _a, _b, _c, _d, _e, _f, _g;
    return ((_g = (_f = (_e = (_d = (_c = (_b = (_a = getTemplateVirtualMachineObject(template)) === null || _a === void 0 ? void 0 : _a.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.spec) === null || _d === void 0 ? void 0 : _d.domain) === null || _e === void 0 ? void 0 : _e.devices) === null || _f === void 0 ? void 0 : _f.disks) !== null && _g !== void 0 ? _g : []);
};
/**
 * A selector that returns the value of a given template's parameter
 * @param {V1Template} template - template
 * @param {string} parameter - parameter name
 */
export var getTemplateParameterValue = function (template, parameter) {
    var _a, _b, _c;
    return (_c = (_b = (_a = template === null || template === void 0 ? void 0 : template.parameters) === null || _a === void 0 ? void 0 : _a.find(function (param) { return param.name === parameter; })) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : '';
};
/**
 * A selector that returns the documentation URL of a given template
 * @param {V1Template} template - template
 */
export var getTemplateDocumentationURL = function (template) {
    return getAnnotation(template, ANNOTATIONS.documentationURL);
};
/**
 * A selector that returns the name of a given template
 * @param {V1Template} template - template
 */
export var getTemplateName = function (template) { var _a; return getAnnotation(template, ANNOTATIONS.displayName, (_a = template === null || template === void 0 ? void 0 : template.metadata) === null || _a === void 0 ? void 0 : _a.name); };
/**
 * A selector that returns the PVC name of a given template's base image
 * @param {V1Template} template - template
 */
export var getTemplatePVCName = function (template) {
    return getTemplateParameterValue(template, TEMPLATE_BASE_IMAGE_NAME_PARAMETER) ||
        getTemplateParameterValue(template, TEMPLATE_DATA_SOURCE_NAME_PARAMETER);
};
/**
 * A selector that returns the description of a given template
 * @param {V1Template} template - template
 */
export var getTemplateDescription = function (template) {
    return getAnnotation(template, ANNOTATIONS.description);
};
/**
 * A selector that returns the CPU of a given template
 * @param {V1Template} template - template
 */
export var getTemplateVirtualMachineCPU = function (template) {
    return getCPU(getTemplateVirtualMachineObject(template));
};
//# sourceMappingURL=selectors.js.map