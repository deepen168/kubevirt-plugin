var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import produce from 'immer';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { getAnnotation } from '@kubevirt-utils/resources/shared';
import { generatePrettyName } from '@kubevirt-utils/utils/utils';
import { ANNOTATIONS } from './annotations';
import { GENERATE_VM_PRETTY_NAME_ANNOTATION, TEMPLATE_TYPE_BASE, TEMPLATE_TYPE_LABEL, } from './constants';
import { getTemplatePVCName } from './selectors';
// Only used for replacing parameters in the template, do not use for anything else
// eslint-disable-next-line require-jsdoc
export var poorManProcess = function (template) {
    var _a, _b;
    if (!template)
        return null;
    var templateString = JSON.stringify(template);
    (_b = (_a = template === null || template === void 0 ? void 0 : template.parameters) === null || _a === void 0 ? void 0 : _a.filter(function (p) { return p.value; })) === null || _b === void 0 ? void 0 : _b.forEach(function (p) {
        templateString = templateString.replaceAll("${".concat(p === null || p === void 0 ? void 0 : p.name, "}"), p === null || p === void 0 ? void 0 : p.value);
    });
    return JSON.parse(templateString);
};
export var isCommonTemplate = function (template) { var _a, _b; return ((_b = (_a = template === null || template === void 0 ? void 0 : template.metadata) === null || _a === void 0 ? void 0 : _a.labels) === null || _b === void 0 ? void 0 : _b[TEMPLATE_TYPE_LABEL]) === TEMPLATE_TYPE_BASE; };
export var isDeprecatedTemplate = function (template) {
    return getAnnotation(template, ANNOTATIONS.deprecated) === 'true';
};
export var replaceTemplateVM = function (template, vm) {
    var _a;
    var vmIndex = (_a = template.objects) === null || _a === void 0 ? void 0 : _a.findIndex(function (object) { return object.kind === VirtualMachineModel.kind; });
    return produce(template, function (draftTemplate) {
        draftTemplate.objects.splice(vmIndex, 1, vm);
    });
};
/**
 * A function for generating a unique vm name
 * @param {V1Template} template - template
 * @returns a unique vm name
 */
export var generateVMName = function (template) {
    var _a;
    return generatePrettyName(getTemplatePVCName(template) || ((_a = template === null || template === void 0 ? void 0 : template.metadata) === null || _a === void 0 ? void 0 : _a.name));
};
export var generateVMNamePrettyParam = function (template) {
    if (getAnnotation(template, GENERATE_VM_PRETTY_NAME_ANNOTATION)) {
        return { description: 'VM name', name: 'NAME', value: generateVMName(template) };
    }
};
export var generateParamsWithPrettyName = function (template) {
    var _a, _b;
    if (template === null || template === void 0 ? void 0 : template.parameters) {
        var _c = (_a = template === null || template === void 0 ? void 0 : template.parameters) === null || _a === void 0 ? void 0 : _a.reduce(function (acc, param) {
            return ((param === null || param === void 0 ? void 0 : param.name) === 'NAME' ? acc.unshift(param) : acc.push(param)) && acc;
        }, []), nameParam = _c[0], restParams = _c.slice(1);
        return __spreadArray(__spreadArray([], restParams, true), [(_b = generateVMNamePrettyParam(template)) !== null && _b !== void 0 ? _b : nameParam], false);
    }
    return [];
};
//# sourceMappingURL=helpers.js.map