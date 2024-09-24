import { PersistentVolumeClaimModel } from '@kubevirt-ui/kubevirt-api/console';
import DataVolumeModel from '@kubevirt-ui/kubevirt-api/console/models/DataVolumeModel';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { compareOwnerReferences, getName, getNamespace } from '@kubevirt-utils/resources/shared';
import { getDataVolumeTemplates } from '@kubevirt-utils/resources/vm';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
export var updateVolumeResources = function (resources, vmOwnerRef) {
    return (resources || []).map(function (resource) {
        var _a, _b;
        var resourceFilteredOwnerReference = (_b = (_a = resource === null || resource === void 0 ? void 0 : resource.metadata) === null || _a === void 0 ? void 0 : _a.ownerReferences) === null || _b === void 0 ? void 0 : _b.filter(function (resourceRef) { return !compareOwnerReferences(resourceRef, vmOwnerRef); });
        return k8sPatch({
            data: [
                {
                    op: 'replace',
                    path: '/metadata/ownerReferences',
                    value: resourceFilteredOwnerReference,
                },
            ],
            model: resource.kind === PersistentVolumeClaimModel.kind
                ? PersistentVolumeClaimModel
                : DataVolumeModel,
            resource: resource,
        });
    });
};
export var findPVCOwner = function (pvc, resources) {
    return resources.find(function (resource) { var _a, _b; return (_b = (_a = pvc === null || pvc === void 0 ? void 0 : pvc.metadata) === null || _a === void 0 ? void 0 : _a.ownerReferences) === null || _b === void 0 ? void 0 : _b.find(function (owner) { return owner.uid === resource.metadata.uid; }); });
};
export var removeDataVolumeTemplatesToVM = function (vm, dataVolumesToSave) {
    var dataVolumeTemplates = getDataVolumeTemplates(vm);
    var dvIndexes = dataVolumesToSave
        .map(function (dataVolume) {
        return dataVolumeTemplates.findIndex(function (template) { return getName(template) === getName(dataVolume); });
    })
        .filter(function (index) { return index !== -1; });
    if (isEmpty(dvIndexes))
        return;
    return k8sPatch({
        data: dvIndexes.map(function (index) { return ({
            op: 'remove',
            path: "/spec/dataVolumeTemplates/".concat(index),
        }); }),
        model: VirtualMachineModel,
        resource: vm,
    });
};
export var sameVolume = function (volumeA, volumeB) {
    return volumeA.kind === volumeB.kind &&
        getName(volumeA) === getName(volumeB) &&
        getNamespace(volumeA) === getNamespace(volumeB);
};
//# sourceMappingURL=helpers.js.map