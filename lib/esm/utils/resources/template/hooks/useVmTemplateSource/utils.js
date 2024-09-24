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
import { PersistentVolumeClaimModel } from '@kubevirt-ui/kubevirt-api/console';
import DataSourceModel from '@kubevirt-ui/kubevirt-api/console/models/DataSourceModel';
import DataVolumeModel from '@kubevirt-ui/kubevirt-api/console/models/DataVolumeModel';
import { getBootDisk, getVolumes } from '@kubevirt-utils/resources/vm';
import { getVMBootSourceType } from '@kubevirt-utils/resources/vm/utils/source';
import { k8sGet } from '@openshift-console/dynamic-plugin-sdk';
import { poorManProcess } from '../../utils';
import { getTemplateVirtualMachineObject } from '../../utils/selectors';
/**
 * a function to get the boot source from a template and its status
 * @param {V1Template} template - the template to get the boot source from
 * @returns the template's boot source and its status
 */
export var getTemplateBootSourceType = function (template) {
    return getVMBootSourceType(getTemplateVirtualMachineObject(poorManProcess(template)));
};
/**
 * a function to k8sGet a PVC
 * @param name the name of the PVC
 * @param ns  the namespace of the PVC
 * @returns a promise that resolves into the PVC
 */
export var getPVC = function (name, ns) {
    return k8sGet({
        model: PersistentVolumeClaimModel,
        name: name,
        ns: ns,
    });
};
/**
 * a function to k8sGet a DataVolume
 * @param name the name of the DataVolume
 * @param ns  the namespace of the DataVolume
 * @returns a promise that resolves into the DataVolume
 */
export var getDataVolume = function (name, ns) {
    return k8sGet({
        model: DataVolumeModel,
        name: name,
        ns: ns,
    });
};
/**
 * a function to k8sGet a DataSource
 * @param name the name of the DataSource
 * @param ns  the namespace of the DataSource
 * @returns a promise that resolves into the DataSource
 */
export var getDataSource = function (name, ns) {
    return k8sGet({
        model: DataSourceModel,
        name: name,
        ns: ns,
    });
};
/**
 * a function to k8sGet a DataSource
 * @param name the name of the DataSource
 * @param ns  the namespace of the DataSource
 * @returns a promise that resolves into the DataSource
 */
export var getDataSourcePVC = function (name, ns) {
    return getDataSource(name, ns)
        .then(function (data) { var _a, _b; return (_b = (_a = data === null || data === void 0 ? void 0 : data.spec) === null || _a === void 0 ? void 0 : _a.source) === null || _b === void 0 ? void 0 : _b.pvc; })
        .then(function (pvc) { return getPVC(pvc.name, pvc.namespace); });
};
/**
 * a function that returns true if the data source is ready
 * @param dataSource the data source to check if ready
 * @returns true if the data source is ready, false otherwise
 */
export var isDataSourceReady = function (dataSource) { var _a, _b; return (_b = (_a = dataSource === null || dataSource === void 0 ? void 0 : dataSource.status) === null || _a === void 0 ? void 0 : _a.conditions) === null || _b === void 0 ? void 0 : _b.some(function (c) { return c.type === 'Ready' && c.status === 'True'; }); };
/**
 * a function that returns true if the data source is cloning in progress
 * @param dataSource the data source to check if cloning
 * @returns true if the data source is in cloning state, false otherwise
 */
export var isDataSourceCloning = function (dataSource) {
    var _a, _b;
    return (_b = (_a = dataSource === null || dataSource === void 0 ? void 0 : dataSource.status) === null || _a === void 0 ? void 0 : _a.conditions) === null || _b === void 0 ? void 0 : _b.some(function (c) {
        return c.type === 'Ready' &&
            c.status === 'False' &&
            [
                'CloneInProgress',
                'CloneScheduled',
                'Pending',
                'PVCBound',
                'SnapshotForSmartCloneInProgress',
            ].includes(c === null || c === void 0 ? void 0 : c.reason);
    });
};
export var isDataSourceUploading = function (dataSource) {
    var _a, _b;
    return (_b = (_a = dataSource === null || dataSource === void 0 ? void 0 : dataSource.status) === null || _a === void 0 ? void 0 : _a.conditions) === null || _b === void 0 ? void 0 : _b.some(function (c) { return c.type === 'Ready' && c.status === 'False' && (c === null || c === void 0 ? void 0 : c.reason) === 'UploadScheduled'; });
};
/**
 * update template's boot source storage class
 * @param template the template to get the boot source from
 * @param storageClassName the storage class name to use
 * @returns - an updated template with storage class name set
 */
export var produceTemplateBootSourceStorageClass = function (template, storageClassName) {
    return produce(template, function (templateDraft) {
        var _a, _b, _c, _d, _e;
        if (storageClassName) {
            var vm = getTemplateVirtualMachineObject(templateDraft);
            var bootDisk_1 = getBootDisk(vm);
            var volume_1 = (_a = getVolumes(vm)) === null || _a === void 0 ? void 0 : _a.find(function (vol) { return vol.name === (bootDisk_1 === null || bootDisk_1 === void 0 ? void 0 : bootDisk_1.name); });
            var otherDataVolumeTemplates = (_c = (_b = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _b === void 0 ? void 0 : _b.dataVolumeTemplates) === null || _c === void 0 ? void 0 : _c.filter(function (dv) { var _a, _b; return ((_a = dv.metadata) === null || _a === void 0 ? void 0 : _a.name) !== ((_b = volume_1 === null || volume_1 === void 0 ? void 0 : volume_1.dataVolume) === null || _b === void 0 ? void 0 : _b.name); });
            var dataVolumeTemplate = (_e = (_d = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _d === void 0 ? void 0 : _d.dataVolumeTemplates) === null || _e === void 0 ? void 0 : _e.find(function (dv) { var _a, _b; return ((_a = dv.metadata) === null || _a === void 0 ? void 0 : _a.name) === ((_b = volume_1 === null || volume_1 === void 0 ? void 0 : volume_1.dataVolume) === null || _b === void 0 ? void 0 : _b.name); });
            dataVolumeTemplate.spec.storage.storageClassName = storageClassName;
            vm.spec.dataVolumeTemplates = __spreadArray(__spreadArray([], otherDataVolumeTemplates, true), [dataVolumeTemplate], false);
        }
    });
};
//# sourceMappingURL=utils.js.map