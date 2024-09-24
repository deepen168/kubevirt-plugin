import produce from 'immer';
import { DEFAULT_NAMESPACE } from '@kubevirt-utils/constants/constants';
import { isCommonTemplate, isDeprecatedTemplate, OS_NAME_TYPES, } from '@kubevirt-utils/resources/template';
import { getTemplateName, getTemplateOS, getTemplateWorkload, isDefaultVariantTemplate, } from '@kubevirt-utils/resources/template/utils/selectors';
import { getCPUSockets, getMemory } from '@kubevirt-utils/resources/vm';
import { ensurePath } from '@kubevirt-utils/utils/utils';
var isUserTemplate = function (template) {
    return !isDefaultVariantTemplate(template) && !isCommonTemplate(template);
};
export var filterTemplates = function (templates, filters) {
    return (templates
        .filter(function (tmp) {
        var _a, _b, _c, _d, _e;
        var textFilterLowerCase = filters === null || filters === void 0 ? void 0 : filters.query.toLowerCase();
        var workload = getTemplateWorkload(tmp);
        var textFilter = !textFilterLowerCase ||
            getTemplateName(tmp).toLowerCase().includes(textFilterLowerCase) ||
            ((_b = (_a = tmp === null || tmp === void 0 ? void 0 : tmp.metadata) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.includes(textFilterLowerCase));
        var defaultVariantFilter = (!(filters === null || filters === void 0 ? void 0 : filters.onlyDefault) && !hasNoDefaultUserAllFilters(filters)) ||
            isDefaultVariantTemplate(tmp);
        var userFilter = !filters.onlyUser || isUserTemplate(tmp);
        var workloadFilter = ((_c = filters === null || filters === void 0 ? void 0 : filters.workload) === null || _c === void 0 ? void 0 : _c.size) <= 0 || filters.workload.has(workload);
        var osNameFilter = ((_d = filters === null || filters === void 0 ? void 0 : filters.osName) === null || _d === void 0 ? void 0 : _d.size) <= 0 || ((_e = filters === null || filters === void 0 ? void 0 : filters.osName) === null || _e === void 0 ? void 0 : _e.has(getTemplateOS(tmp)));
        var hideDeprecatedTemplatesFilter = !(filters === null || filters === void 0 ? void 0 : filters.hideDeprecatedTemplates) || !isDeprecatedTemplate(tmp);
        return (defaultVariantFilter &&
            userFilter &&
            textFilter &&
            workloadFilter &&
            osNameFilter &&
            hideDeprecatedTemplatesFilter);
    })
        // show RHEL templates first, then alphabetically
        .sort(function (a, b) {
        var _a, _b;
        if (getTemplateOS(a) === OS_NAME_TYPES.rhel) {
            return -1;
        }
        if (getTemplateOS(b) === OS_NAME_TYPES.rhel) {
            return 1;
        }
        var aName = getTemplateName(a) || ((_a = a === null || a === void 0 ? void 0 : a.metadata) === null || _a === void 0 ? void 0 : _a.name);
        var bName = getTemplateName(b) || ((_b = b === null || b === void 0 ? void 0 : b.metadata) === null || _b === void 0 ? void 0 : _b.name);
        return aName === null || aName === void 0 ? void 0 : aName.localeCompare(bName);
    }));
};
export var updateVMCPUMemory = function (ns, updateVM, setUpdatedVM) {
    return function (vm) {
        var updatedVM = produce(vm, function (vmDraft) {
            ensurePath(vmDraft, [
                'spec.template.spec.domain.cpu',
                'spec.template.spec.domain.memory.guest',
            ]);
            vmDraft.metadata.namespace = ns || DEFAULT_NAMESPACE;
            vmDraft.spec.template.spec.domain.cpu.sockets = getCPUSockets(vm);
            vmDraft.spec.template.spec.domain.memory.guest = getMemory(vm);
        });
        setUpdatedVM(updatedVM);
        return updateVM(updatedVM);
    };
};
export var hasNoDefaultUserAllFilters = function (filters) {
    return !(filters === null || filters === void 0 ? void 0 : filters.allItems) && !(filters === null || filters === void 0 ? void 0 : filters.onlyDefault) && !(filters === null || filters === void 0 ? void 0 : filters.onlyUser);
}; // none of the filters are set - when first time in
//# sourceMappingURL=helpers.js.map