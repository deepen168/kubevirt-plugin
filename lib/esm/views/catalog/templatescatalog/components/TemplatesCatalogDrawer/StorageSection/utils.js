var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { produceVMDisks } from '@catalog/utils/WizardVMContext';
import DataVolumeModel from '@kubevirt-ui/kubevirt-api/console/models/DataVolumeModel';
import { ROOTDISK } from '@kubevirt-utils/constants/constants';
import { CDI_BIND_REQUESTED_ANNOTATION } from '@kubevirt-utils/hooks/useCDIUpload/consts';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getTemplateContainerDisks } from '@kubevirt-utils/resources/template';
import { getDisks, getVolumes } from '@kubevirt-utils/resources/vm';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { getRootDataVolume } from '../utils';
export var getRegistryHelperText = function (template) {
    var containerDisks = getTemplateContainerDisks(template);
    if (!isEmpty(containerDisks))
        return t('Enter a container image (for example: {{containerDisk}})', {
            containerDisk: containerDisks[0],
        });
};
export var getDiskSource = function (vm, diskName) {
    var _a, _b, _c, _d;
    if (!diskName)
        return;
    var disk = (_a = getDisks(vm)) === null || _a === void 0 ? void 0 : _a.find(function (d) { return d.name === diskName; });
    var volume = (_b = getVolumes(vm)) === null || _b === void 0 ? void 0 : _b.find(function (v) { return v.name === (disk === null || disk === void 0 ? void 0 : disk.name); });
    if (!disk || !volume)
        return;
    if (volume.containerDisk) {
        return volume.containerDisk;
    }
    if (volume.dataVolume) {
        var dataVolumeTemplate = (_d = (_c = vm.spec) === null || _c === void 0 ? void 0 : _c.dataVolumeTemplates) === null || _d === void 0 ? void 0 : _d.find(function (template) { var _a; return ((_a = template.metadata) === null || _a === void 0 ? void 0 : _a.name) === volume.dataVolume.name; });
        return dataVolumeTemplate === null || dataVolumeTemplate === void 0 ? void 0 : dataVolumeTemplate.spec;
    }
};
var emptySourceDataVolume = {
    apiVersion: "".concat(DataVolumeModel.apiGroup, "/").concat(DataVolumeModel.apiVersion),
    kind: DataVolumeModel.kind,
    metadata: {
        name: "dv-".concat(ROOTDISK),
    },
    spec: {},
};
var createDataVolumeWithSource = function (customSource) { return (__assign(__assign({}, emptySourceDataVolume), { spec: customSource })); };
export var overrideVirtualMachineDataVolumeSpec = function (virtualMachine, customSource) {
    return produceVMDisks(virtualMachine, function (draftVM) {
        var _a;
        var _b, _c, _d, _e;
        var _f;
        var rootDataVolume = getRootDataVolume(draftVM);
        if (isEmpty(customSource))
            return;
        if (isEmpty(rootDataVolume)) {
            draftVM.spec.template.spec.volumes = getVolumes(draftVM).filter(function (v) { return v.name !== ROOTDISK; });
            draftVM.spec.template.spec.volumes.push({
                dataVolume: {
                    name: "dv-".concat(ROOTDISK),
                },
                name: ROOTDISK,
            });
            (_b = (_f = draftVM.spec).dataVolumeTemplates) !== null && _b !== void 0 ? _b : (_f.dataVolumeTemplates = []);
            draftVM.spec.dataVolumeTemplates.push(createDataVolumeWithSource(customSource));
            return;
        }
        rootDataVolume.spec = customSource;
        if (((_c = customSource === null || customSource === void 0 ? void 0 : customSource.source) === null || _c === void 0 ? void 0 : _c.blank) || ((_d = customSource === null || customSource === void 0 ? void 0 : customSource.source) === null || _d === void 0 ? void 0 : _d.upload)) {
            rootDataVolume.metadata.annotations = __assign(__assign({}, (((_e = rootDataVolume === null || rootDataVolume === void 0 ? void 0 : rootDataVolume.metadata) === null || _e === void 0 ? void 0 : _e.annotations) || {})), (_a = {}, _a[CDI_BIND_REQUESTED_ANNOTATION] = 'true', _a));
        }
    });
};
//# sourceMappingURL=utils.js.map