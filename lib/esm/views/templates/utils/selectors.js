import { getAnnotation } from '@kubevirt-utils/resources/shared';
import { getLabel } from '@kubevirt-utils/resources/shared';
import { getTemplateVirtualMachineObject, WORKLOADS_LABELS, } from '@kubevirt-utils/resources/template';
import { VM_WORKLOAD_ANNOTATION } from '@kubevirt-utils/resources/vm/utils';
import { ANNOTATIONS, LABELS } from './constants';
export var getAffinity = function (template) { var _a, _b, _c, _d; return ((_d = (_c = (_b = (_a = getTemplateVirtualMachineObject(template)) === null || _a === void 0 ? void 0 : _a.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.spec) === null || _d === void 0 ? void 0 : _d.affinity) || {}; };
export var getEvictionStrategy = function (template) { var _a, _b, _c, _d; return (_d = (_c = (_b = (_a = getTemplateVirtualMachineObject(template)) === null || _a === void 0 ? void 0 : _a.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.spec) === null || _d === void 0 ? void 0 : _d.evictionStrategy; };
export var getNodeSelector = function (template) { var _a, _b, _c, _d; return (_d = (_c = (_b = (_a = getTemplateVirtualMachineObject(template)) === null || _a === void 0 ? void 0 : _a.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.spec) === null || _d === void 0 ? void 0 : _d.nodeSelector; };
export var getTemplateProviderName = function (template) {
    return getAnnotation(template, ANNOTATIONS.providerName, null) ||
        getAnnotation(template, ANNOTATIONS.providerDisplayName, null);
};
export var getTemplateWorkload = function (template) {
    var _a, _b, _c, _d, _e;
    return (_e = (_d = (_c = (_b = (_a = getTemplateVirtualMachineObject(template)) === null || _a === void 0 ? void 0 : _a.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.metadata) === null || _d === void 0 ? void 0 : _d.annotations) === null || _e === void 0 ? void 0 : _e[VM_WORKLOAD_ANNOTATION];
};
export var getTolerations = function (template) { var _a, _b, _c, _d; return (_d = (_c = (_b = (_a = getTemplateVirtualMachineObject(template)) === null || _a === void 0 ? void 0 : _a.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.spec) === null || _d === void 0 ? void 0 : _d.tolerations; };
// t('Other')
export var getWorkloadProfile = function (template) {
    return WORKLOADS_LABELS[getTemplateWorkload(template)] || 'Other';
};
export var getVMTemplateBaseName = function (template) {
    var name = getLabel(template, LABELS.name);
    var namespace = getLabel(template, LABELS.namespace);
    return name && namespace ? { name: name, namespace: namespace } : null;
};
//# sourceMappingURL=selectors.js.map