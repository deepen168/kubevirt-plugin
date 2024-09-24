import { getTemplateVirtualMachineObject, TEMPLATE_TYPE_BASE, TEMPLATE_TYPE_LABEL, } from '@kubevirt-utils/resources/template';
import { getCPU } from '@kubevirt-utils/resources/vm';
import { DESCHEDULER_EVICT_LABEL } from '@kubevirt-utils/resources/vmi';
export var isCommonVMTemplate = function (template) { var _a, _b; return ((_b = (_a = template === null || template === void 0 ? void 0 : template.metadata) === null || _a === void 0 ? void 0 : _a.labels) === null || _b === void 0 ? void 0 : _b[TEMPLATE_TYPE_LABEL]) === TEMPLATE_TYPE_BASE; };
export var isDedicatedCPUPlacement = function (template) { var _a; return (_a = getCPU(getTemplateVirtualMachineObject(template))) === null || _a === void 0 ? void 0 : _a.dedicatedCpuPlacement; };
// check if the descheduler is ON
export var isDeschedulerOn = function (template) {
    var _a, _b, _c, _d, _e;
    // check for the descheduler.alpha.kubernetes.io/evict: 'true' annotation
    return ((_e = (_d = (_c = (_b = (_a = getTemplateVirtualMachineObject(template)) === null || _a === void 0 ? void 0 : _a.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.metadata) === null || _d === void 0 ? void 0 : _d.annotations) === null || _e === void 0 ? void 0 : _e[DESCHEDULER_EVICT_LABEL]) === 'true';
};
//# sourceMappingURL=utils.js.map