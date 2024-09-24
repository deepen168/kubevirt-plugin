var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { getTemplateName, isCommonTemplate, isDeprecatedTemplate, TEMPLATE_DEFAULT_VARIANT_LABEL, TEMPLATE_WORKLOAD_LABEL, } from '@kubevirt-utils/resources/template';
import { findKeySuffixValue } from '@kubevirt-utils/resources/vm/utils/operation-system/operationSystem';
import { get } from '@kubevirt-utils/utils/utils';
import { TEMPLATE_CUSTOMIZED_ANNOTATION } from './constants';
export var getLabels = function (entity, defaultValue) {
    return get(entity, 'metadata.labels', defaultValue);
};
export var getLoadedData = function (result, defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    return (result && result.loaded && !result.loadError ? result.data : defaultValue);
};
export var getWorkloadProfile = function (vm) {
    return findKeySuffixValue(getLabels(vm), TEMPLATE_WORKLOAD_LABEL);
};
export var filterTemplates = function (templates) {
    var userTemplateItems = templates
        .filter(function (t) { return !isCommonTemplate(t) && !isDeprecatedTemplate(t); })
        .map(function (t) { return ({
        isCommon: false,
        metadata: {
            name: t.metadata.name,
            namespace: t.metadata.namespace,
            uid: t.metadata.uid,
        },
        variants: [t],
    }); });
    var commonTemplateItems = templates
        .filter(function (t) { return isCommonTemplate(t) && !isDeprecatedTemplate(t); })
        .reduce(function (acc, t) {
        var _a;
        var name = getTemplateName(t);
        if (acc[name]) {
            var isRecommended = ((_a = t.metadata.labels) === null || _a === void 0 ? void 0 : _a[TEMPLATE_DEFAULT_VARIANT_LABEL]) === 'true';
            if (isRecommended) {
                acc[name].metadata = {
                    name: t.metadata.name,
                    namespace: t.metadata.namespace,
                    uid: t.metadata.uid,
                };
                acc[name].variants.unshift(t);
            }
            else {
                acc[name].variants.push(t);
            }
        }
        else {
            acc[name] = {
                isCommon: true,
                metadata: {
                    name: t.metadata.name,
                    namespace: t.metadata.namespace,
                    uid: t.metadata.uid,
                },
                variants: [t],
            };
        }
        return acc;
    }, {});
    Object.keys(commonTemplateItems).forEach(function (key) {
        var recommendedProfile = getWorkloadProfile(commonTemplateItems[key].variants[0]);
        commonTemplateItems[key].variants = commonTemplateItems[key].variants.filter(function (t) { return getWorkloadProfile(t) === recommendedProfile; });
    });
    return __spreadArray(__spreadArray([], userTemplateItems, true), Object.values(commonTemplateItems), true);
};
export var flattenTemplates = function (_a) {
    var vms = _a.vms, vmTemplates = _a.vmTemplates;
    var templates = getLoadedData(vmTemplates, []);
    return __spreadArray(__spreadArray([], getLoadedData(vms, []).map(function (vm) {
        var template;
        try {
            template = JSON.parse(vm.metadata.annotations[TEMPLATE_CUSTOMIZED_ANNOTATION]);
        }
        catch (_a) {
            return null;
        }
        return {
            customizeTemplate: {
                template: template,
                vm: vm,
            },
            metadata: vm.metadata,
        };
    }), true), filterTemplates(__spreadArray([], templates, true)).map(function (template) { return ({
        metadata: template.variants[0].metadata,
        template: template,
    }); }), true).filter(function (template) { return template; });
};
//# sourceMappingURL=flattenTemplates.js.map