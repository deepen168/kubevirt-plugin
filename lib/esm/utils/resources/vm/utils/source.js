import { PersistentVolumeClaimModel } from '@kubevirt-ui/kubevirt-api/console';
import DataSourceModel from '@kubevirt-ui/kubevirt-api/console/models/DataSourceModel';
import { ROOTDISK } from '@kubevirt-utils/constants/constants';
import { getName } from '@kubevirt-utils/resources/shared';
import { BOOT_SOURCE, BOOT_SOURCE_LABELS, DATA_SOURCE_CRONJOB_LABEL, } from '@kubevirt-utils/resources/template';
import { getDataVolumeTemplates } from '@kubevirt-utils/resources/vm';
import { getBootDisk, getVolumes } from './selectors';
/**
 * A function to get the data source from a vm and its name and namespace
 * @param {V1VirtualMachine} vm - the vm to get the data source from.
 * @returns {V1beta1DataVolumeSourcePVC | V1beta1DataVolumeSourceRef} - The vms data volume source.
 */
export var getPVCSourceOrSourceRef = function (vm) {
    var _a, _b, _c, _d, _e;
    var bootDisk = getBootDisk(vm);
    var volume = (_a = getVolumes(vm)) === null || _a === void 0 ? void 0 : _a.find(function (vol) { return vol.name === (bootDisk === null || bootDisk === void 0 ? void 0 : bootDisk.name) || vol.name === ROOTDISK; });
    var dataVolumeTemplate = (_b = getDataVolumeTemplates(vm)) === null || _b === void 0 ? void 0 : _b.find(function (dv) { var _a; return getName(dv) === ((_a = volume === null || volume === void 0 ? void 0 : volume.dataVolume) === null || _a === void 0 ? void 0 : _a.name); });
    var sourceRef = (_c = dataVolumeTemplate === null || dataVolumeTemplate === void 0 ? void 0 : dataVolumeTemplate.spec) === null || _c === void 0 ? void 0 : _c.sourceRef;
    var pvc = (_e = (_d = dataVolumeTemplate === null || dataVolumeTemplate === void 0 ? void 0 : dataVolumeTemplate.spec) === null || _d === void 0 ? void 0 : _d.source) === null || _e === void 0 ? void 0 : _e.pvc;
    if (sourceRef && (sourceRef === null || sourceRef === void 0 ? void 0 : sourceRef.kind) === DataSourceModel.kind) {
        return sourceRef;
    }
    if (pvc) {
        return {
            kind: PersistentVolumeClaimModel === null || PersistentVolumeClaimModel === void 0 ? void 0 : PersistentVolumeClaimModel.kind,
            name: pvc === null || pvc === void 0 ? void 0 : pvc.name,
            namespace: pvc === null || pvc === void 0 ? void 0 : pvc.namespace,
        };
    }
    return {};
};
/**
 * a function to get the boot source from a vm and its status
 * @param {V1VirtualMachine} vm - the vm to get the boot source from
 * @returns the vm's boot source and its status
 */
export var getVMBootSourceType = function (vm) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var bootDisk = getBootDisk(vm);
    var volume = (_a = getVolumes(vm)) === null || _a === void 0 ? void 0 : _a.find(function (vol) { return vol.name === (bootDisk === null || bootDisk === void 0 ? void 0 : bootDisk.name); });
    var dataVolumeTemplate = (_c = (_b = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _b === void 0 ? void 0 : _b.dataVolumeTemplates) === null || _c === void 0 ? void 0 : _c.find(function (dv) { var _a, _b; return ((_a = dv.metadata) === null || _a === void 0 ? void 0 : _a.name) === ((_b = volume === null || volume === void 0 ? void 0 : volume.dataVolume) === null || _b === void 0 ? void 0 : _b.name); });
    if ((_d = dataVolumeTemplate === null || dataVolumeTemplate === void 0 ? void 0 : dataVolumeTemplate.spec) === null || _d === void 0 ? void 0 : _d.sourceRef) {
        var sourceRef = (_e = dataVolumeTemplate === null || dataVolumeTemplate === void 0 ? void 0 : dataVolumeTemplate.spec) === null || _e === void 0 ? void 0 : _e.sourceRef;
        if ((sourceRef === null || sourceRef === void 0 ? void 0 : sourceRef.kind) === DataSourceModel.kind) {
            return {
                source: { sourceRef: sourceRef },
                type: BOOT_SOURCE.DATA_SOURCE,
            };
        }
    }
    if ((_f = dataVolumeTemplate === null || dataVolumeTemplate === void 0 ? void 0 : dataVolumeTemplate.spec) === null || _f === void 0 ? void 0 : _f.source) {
        var source = (_g = dataVolumeTemplate === null || dataVolumeTemplate === void 0 ? void 0 : dataVolumeTemplate.spec) === null || _g === void 0 ? void 0 : _g.source;
        if (source === null || source === void 0 ? void 0 : source.http) {
            return {
                source: { http: source === null || source === void 0 ? void 0 : source.http },
                type: BOOT_SOURCE.URL,
            };
        }
        if (source === null || source === void 0 ? void 0 : source.registry) {
            return {
                source: { registry: source === null || source === void 0 ? void 0 : source.registry },
                type: BOOT_SOURCE.REGISTRY,
            };
        }
        if (source === null || source === void 0 ? void 0 : source.pvc) {
            return {
                source: { pvc: source === null || source === void 0 ? void 0 : source.pvc },
                type: BOOT_SOURCE.PVC,
            };
        }
    }
    if (volume === null || volume === void 0 ? void 0 : volume.containerDisk) {
        return {
            source: {
                containerDisk: volume === null || volume === void 0 ? void 0 : volume.containerDisk,
            },
            type: BOOT_SOURCE.CONTAINER_DISK,
        };
    }
    if (volume === null || volume === void 0 ? void 0 : volume.persistentVolumeClaim) {
        return {
            source: {
                pvc: { name: volume === null || volume === void 0 ? void 0 : volume.persistentVolumeClaim.claimName, namespace: (_h = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _h === void 0 ? void 0 : _h.namespace },
            },
            type: BOOT_SOURCE.PVC,
        };
    }
    return { source: {}, type: BOOT_SOURCE.NONE };
};
/**
 * Function to get a human comprehensive label to describe the vm boot source
 * @param {BOOT_SOURCE} bootSourceType - vm boot source type
 * @param {V1beta1DataSource} dataSource - if any, the vm boot data source
 * @returns label representing the boot source type
 */
export var getVMBootSourceLabel = function (bootSourceType, dataSource) {
    var _a, _b;
    if (BOOT_SOURCE.DATA_SOURCE && ((_b = (_a = dataSource === null || dataSource === void 0 ? void 0 : dataSource.metadata) === null || _a === void 0 ? void 0 : _a.labels) === null || _b === void 0 ? void 0 : _b[DATA_SOURCE_CRONJOB_LABEL]))
        return BOOT_SOURCE_LABELS[BOOT_SOURCE.DATA_SOURCE_AUTO_IMPORT] || 'N/A';
    return BOOT_SOURCE_LABELS[bootSourceType] || 'N/A';
};
//# sourceMappingURL=source.js.map