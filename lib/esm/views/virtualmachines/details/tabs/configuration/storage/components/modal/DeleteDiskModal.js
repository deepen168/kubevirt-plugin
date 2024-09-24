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
import React, { useMemo, useState } from 'react';
import DataVolumeModel from '@kubevirt-ui/kubevirt-api/console/models/DataVolumeModel';
import ConfirmActionMessage from '@kubevirt-utils/components/ConfirmActionMessage/ConfirmActionMessage';
import { getRemoveHotplugPromise, produceVMDisks, } from '@kubevirt-utils/components/DiskModal/utils/helpers';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { buildOwnerReference, compareOwnerReferences } from '@kubevirt-utils/resources/shared';
import { getDataVolumeTemplates, getDisks, getVolumes } from '@kubevirt-utils/resources/vm';
import { k8sDelete, k8sUpdate } from '@openshift-console/dynamic-plugin-sdk';
import { ButtonVariant, Checkbox, Stack, StackItem } from '@patternfly/react-core';
import { updateDisks } from '../../../details/utils/utils';
import useVolumeOwnedResource from './hooks/useVolumeOwnedResource';
var DeleteDiskModal = function (_a) {
    var isHotPluginVolume = _a.isHotPluginVolume, isOpen = _a.isOpen, onClose = _a.onClose, vm = _a.vm, volume = _a.volume;
    var t = useKubevirtTranslation().t;
    var _b = useState(false), deleteOwnedResource = _b[0], setDeleteOwnedResource = _b[1];
    var diskName = volume === null || volume === void 0 ? void 0 : volume.name;
    var _c = useVolumeOwnedResource(vm, volume), loadingError = _c.error, loaded = _c.loaded, volumeResource = _c.volumeResource, volumeResourceModel = _c.volumeResourceModel, volumeResourceName = _c.volumeResourceName;
    var updatedVirtualMachine = useMemo(function () {
        var _a, _b, _c;
        var updatedDisks = (_a = (getDisks(vm) || [])) === null || _a === void 0 ? void 0 : _a.filter(function (_a) {
            var name = _a.name;
            return name !== diskName;
        });
        var updatedVolumes = (_b = (getVolumes(vm) || [])) === null || _b === void 0 ? void 0 : _b.filter(function (_a) {
            var name = _a.name;
            return name !== diskName;
        });
        var updatedDataVolumeTemplates = (_c = (getDataVolumeTemplates(vm) || [])) === null || _c === void 0 ? void 0 : _c.filter(function (dvt) { var _a; return ((_a = dvt === null || dvt === void 0 ? void 0 : dvt.metadata) === null || _a === void 0 ? void 0 : _a.name) !== volumeResourceName; });
        var updatedVM = produceVMDisks(vm, function (vmDraft) {
            vmDraft.spec.template.spec.domain.devices.disks = updatedDisks;
            vmDraft.spec.template.spec.volumes = updatedVolumes;
            vmDraft.spec.dataVolumeTemplates = updatedDataVolumeTemplates;
        });
        return updatedVM;
    }, [vm, diskName, volumeResourceName]);
    var onSubmit = function (updatedVM) {
        var deletePromise = isHotPluginVolume
            ? getRemoveHotplugPromise(vm, diskName)
            : updateDisks(updatedVM);
        return deletePromise.then(function () {
            var _a, _b, _c, _d;
            if (volumeResource) {
                if (deleteOwnedResource) {
                    // we need to delete the owned resource
                    return k8sDelete({
                        json: undefined,
                        model: volumeResourceModel,
                        requestInit: undefined,
                        resource: volumeResource,
                    });
                }
                // we don't need to delete the owned resource
                // so we remove the resource's ownerReference from the owned resource
                var vmOwnerRef_1 = buildOwnerReference(updatedVM);
                var updatedVolumeOwnerReferences = (_b = (_a = volumeResource === null || volumeResource === void 0 ? void 0 : volumeResource.metadata) === null || _a === void 0 ? void 0 : _a.ownerReferences) === null || _b === void 0 ? void 0 : _b.filter(function (ref) {
                    return !compareOwnerReferences(ref, vmOwnerRef_1);
                });
                var updatedResourceVolume = __assign({}, volumeResource);
                updatedResourceVolume.metadata.ownerReferences = updatedVolumeOwnerReferences;
                return k8sUpdate({
                    data: updatedResourceVolume,
                    model: volumeResourceModel,
                    name: (_c = updatedResourceVolume === null || updatedResourceVolume === void 0 ? void 0 : updatedResourceVolume.metadata) === null || _c === void 0 ? void 0 : _c.name,
                    ns: (_d = updatedResourceVolume === null || updatedResourceVolume === void 0 ? void 0 : updatedResourceVolume.metadata) === null || _d === void 0 ? void 0 : _d.namespace,
                });
            }
        });
    };
    return (React.createElement(TabModal, { headerText: t('Detach disk?'), isOpen: isOpen, modalError: loadingError, obj: updatedVirtualMachine, onClose: onClose, onSubmit: onSubmit, submitBtnText: t('Detach'), submitBtnVariant: ButtonVariant.danger },
        React.createElement(Stack, { hasGutter: true },
            React.createElement(StackItem, null,
                React.createElement(ConfirmActionMessage, { obj: {
                        metadata: { name: diskName },
                    }, action: "detach" })),
            loaded && (React.createElement(StackItem, null, volumeResource && (React.createElement(Checkbox, { label: t('Delete {{volumeResourceName}} {{modelLabel}}', {
                    modelLabel: volumeResourceModel === DataVolumeModel
                        ? "".concat(volumeResourceModel.label, " and PVC")
                        : volumeResourceModel.label,
                    volumeResourceName: volumeResourceName,
                }), id: "delete-owned-resource", isChecked: deleteOwnedResource, onChange: function (_event, val) { return setDeleteOwnedResource(val); } })))),
            !loaded && !loadingError && React.createElement(Loading, null))));
};
export default DeleteDiskModal;
//# sourceMappingURL=DeleteDiskModal.js.map