var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import DataVolumeModel from '@kubevirt-ui/kubevirt-api/console/models/DataVolumeModel';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { getLabel } from '@kubevirt-utils/resources/shared';
import { TEMPLATE_BASE_IMAGE_NAME_PARAMETER, TEMPLATE_BASE_IMAGE_NAMESPACE_PARAMETER, TEMPLATE_DATA_SOURCE_NAME_PARAMETER, TEMPLATE_DATA_SOURCE_NAMESPACE_PARAMETER, } from '@kubevirt-utils/resources/template';
import { getDataVolumeTemplates } from '@kubevirt-utils/resources/vm';
import { multipliers } from '@kubevirt-utils/utils/units';
import { getAPIVersionForModel, } from '@openshift-console/dynamic-plugin-sdk';
import { TEMPLATE_VERSION_LABEL } from './../../../utils/resources/template/utils/constants';
import { CDI_CLONE_TOKEN_ANNOTAION, CDI_KUBEVIRT_IO, CDI_PVC_PHASE_RUNNING, CDI_UPLOAD_POD_ANNOTATION, CDI_UPLOAD_POD_NAME_ANNOTATION, STORAGE_IMPORT_POD_LABEL, TEMPLATE_OS_LABEL, TEMPLATE_OS_NAME_ANNOTATION, VM_TEMPLATE_NAME_PARAMETER, } from './consts';
import { compareVersions, removeOSDups, stringValueUnitSplit } from './utils';
export var getLabels = function (entity, defaultValue) { var _a; return ((_a = entity === null || entity === void 0 ? void 0 : entity.metadata) === null || _a === void 0 ? void 0 : _a.labels) || defaultValue; };
export var getAnnotations = function (vm, defaultValue) { return (vm === null || vm === void 0 ? void 0 : vm.metadata.annotations) || defaultValue; };
var getAnnotation = function (pvc, annotationName, defaultValue) { var _a, _b; return ((_b = (_a = pvc === null || pvc === void 0 ? void 0 : pvc.metadata) === null || _a === void 0 ? void 0 : _a.annotations) === null || _b === void 0 ? void 0 : _b[annotationName]) || defaultValue; };
var getStorageSize = function (value) {
    return value === null || value === void 0 ? void 0 : value.requests.storage;
};
var getParameterValue = function (obj, name, defaultValue) {
    var _a, _b;
    if (defaultValue === void 0) { defaultValue = null; }
    return ((_b = (_a = obj === null || obj === void 0 ? void 0 : obj.parameters) === null || _a === void 0 ? void 0 : _a.find(function (parameter) { return parameter.name === name; })) === null || _b === void 0 ? void 0 : _b.value) || defaultValue;
};
var getPVCDataVolumeResources = function (dataVolume) { var _a, _b; return (_b = (_a = dataVolume === null || dataVolume === void 0 ? void 0 : dataVolume.spec) === null || _a === void 0 ? void 0 : _a.pvc) === null || _b === void 0 ? void 0 : _b.resources; };
var getDataVolumeResources = function (dataVolume) { var _a, _b; return ((_b = (_a = dataVolume === null || dataVolume === void 0 ? void 0 : dataVolume.spec) === null || _a === void 0 ? void 0 : _a.storage) === null || _b === void 0 ? void 0 : _b.resources) || getPVCDataVolumeResources(dataVolume); };
export var getDataVolumeStorageSize = function (dataVolume) {
    return getStorageSize(getDataVolumeResources(dataVolume));
};
export var getPVCNamespace = function (obj) {
    return getParameterValue(obj, TEMPLATE_BASE_IMAGE_NAMESPACE_PARAMETER) ||
        getParameterValue(obj, TEMPLATE_DATA_SOURCE_NAMESPACE_PARAMETER);
};
export var getPVCName = function (obj) {
    return getParameterValue(obj, TEMPLATE_BASE_IMAGE_NAME_PARAMETER) ||
        getParameterValue(obj, TEMPLATE_DATA_SOURCE_NAME_PARAMETER);
};
export var getPvcResources = function (pvc) { var _a; return (_a = pvc === null || pvc === void 0 ? void 0 : pvc.spec) === null || _a === void 0 ? void 0 : _a.resources; };
export var getPvcStorageSize = function (pvc) {
    return getStorageSize(getPvcResources(pvc));
};
export var getPvcAccessModes = function (pvc) { var _a; return (_a = pvc === null || pvc === void 0 ? void 0 : pvc.spec) === null || _a === void 0 ? void 0 : _a.accessModes; };
export var getPvcVolumeMode = function (pvc) { var _a; return (_a = pvc === null || pvc === void 0 ? void 0 : pvc.spec) === null || _a === void 0 ? void 0 : _a.volumeMode; };
export var getPvcStorageClassName = function (pvc) { var _a; return (_a = pvc === null || pvc === void 0 ? void 0 : pvc.spec) === null || _a === void 0 ? void 0 : _a.storageClassName; };
export var getPvcImportPodName = function (pvc) {
    return getAnnotation(pvc, STORAGE_IMPORT_POD_LABEL);
};
// upload pvc selectors
export var getPvcUploadPodName = function (pvc) {
    return getAnnotation(pvc, CDI_UPLOAD_POD_NAME_ANNOTATION);
};
export var getPvcPhase = function (pvc) {
    return getAnnotation(pvc, CDI_UPLOAD_POD_ANNOTATION);
};
export var getPvcCloneToken = function (pvc) {
    return getAnnotation(pvc, CDI_CLONE_TOKEN_ANNOTAION);
};
export var isPvcUploading = function (pvc) {
    return !getPvcCloneToken(pvc) && getPvcUploadPodName(pvc) && getPvcPhase(pvc) === CDI_PVC_PHASE_RUNNING;
};
export var isPvcCloning = function (pvc) {
    return !!getPvcCloneToken(pvc) && getPvcPhase(pvc) === CDI_PVC_PHASE_RUNNING;
};
export var isPvcBoundToCDI = function (pvc) {
    var _a, _b;
    return (_b = (_a = pvc === null || pvc === void 0 ? void 0 : pvc.metadata) === null || _a === void 0 ? void 0 : _a.ownerReferences) === null || _b === void 0 ? void 0 : _b.some(function (or) {
        var _a;
        return or.apiVersion.startsWith(CDI_KUBEVIRT_IO) &&
            or.kind === DataVolumeModel.kind &&
            or.name === ((_a = pvc === null || pvc === void 0 ? void 0 : pvc.metadata) === null || _a === void 0 ? void 0 : _a.name);
    });
};
export var getName = function (value) { var _a; return (_a = value === null || value === void 0 ? void 0 : value.metadata) === null || _a === void 0 ? void 0 : _a.name; };
export var getNamespace = function (value) { var _a; return (_a = value === null || value === void 0 ? void 0 : value.metadata) === null || _a === void 0 ? void 0 : _a.namespace; };
export var getKubevirtModelAvailableAPIVersion = function (model) {
    return getAPIVersionForModel(model);
};
export var getVM = function (vmTemplate) { var _a; return (_a = vmTemplate === null || vmTemplate === void 0 ? void 0 : vmTemplate.objects) === null || _a === void 0 ? void 0 : _a.find(function (obj) { return (obj === null || obj === void 0 ? void 0 : obj.kind) === (VirtualMachineModel === null || VirtualMachineModel === void 0 ? void 0 : VirtualMachineModel.kind); }); };
export var getTemplatesLabelValues = function (templates, label) {
    var labelValues = [];
    (templates || []).forEach(function (template) {
        var labels = Object.keys(getLabels(template, {})).filter(function (l) { return l.startsWith(label); });
        labels.forEach(function (l) {
            var labelParts = l.split('/');
            if (labelParts.length > 1) {
                var labelName = labelParts[labelParts.length - 1];
                if (labelValues.indexOf(labelName) === -1) {
                    labelValues.push(labelName);
                }
            }
        });
    });
    return labelValues;
};
export var getGiBUploadPVCSizeByImage = function (sizeInBytes) {
    var sizeGi = sizeInBytes / multipliers.Gi;
    if (sizeGi < 0.5)
        return 1;
    return Math.ceil(sizeGi) * 2;
};
export var getTemplateOperatingSystems = function (templates) {
    var osIds = getTemplatesLabelValues(templates, TEMPLATE_OS_LABEL);
    var sortedTemplates = __spreadArray([], templates, true).sort(function (a, b) {
        var aVersion = getLabel(a, TEMPLATE_VERSION_LABEL);
        var bVersion = getLabel(b, TEMPLATE_VERSION_LABEL);
        return -1 * compareVersions(aVersion, bVersion);
    });
    return removeOSDups(osIds.map(function (osId) {
        var _a;
        var nameAnnotation = "".concat(TEMPLATE_OS_NAME_ANNOTATION, "/").concat(osId);
        var template = sortedTemplates === null || sortedTemplates === void 0 ? void 0 : sortedTemplates.find(function (t) { var _a; return !!((_a = Object.keys(getAnnotations(t, {}))) === null || _a === void 0 ? void 0 : _a.find(function (annotation) { return annotation === nameAnnotation; })); });
        var vm = getVM(template);
        var dvTemplates = getDataVolumeTemplates(vm);
        var dv = dvTemplates === null || dvTemplates === void 0 ? void 0 : dvTemplates.find(function (dvt) { var _a; return ((_a = dvt === null || dvt === void 0 ? void 0 : dvt.metadata) === null || _a === void 0 ? void 0 : _a.name) === VM_TEMPLATE_NAME_PARAMETER; });
        return {
            baseImageName: getPVCName(template),
            baseImageNamespace: getPVCNamespace(template),
            baseImageRecomendedSize: dv && stringValueUnitSplit(getDataVolumeStorageSize(dv)),
            id: osId,
            isSourceRef: !!((_a = dv === null || dv === void 0 ? void 0 : dv.spec) === null || _a === void 0 ? void 0 : _a.sourceRef),
            name: getAnnotation(template, nameAnnotation),
        };
    }));
};
//# sourceMappingURL=selectors.js.map