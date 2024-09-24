var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React from 'react';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getName } from '@kubevirt-utils/resources/shared';
import { Bullseye, StackItem } from '@patternfly/react-core';
import { findPVCOwner } from '../utils/helpers';
import DeleteVolumeCheckbox from './DeleteVolumeCheckbox';
var DeleteOwnedResourcesMessage = function (_a) {
    var dataVolumes = _a.dataVolumes, loaded = _a.loaded, pvcs = _a.pvcs, setVolumesToSave = _a.setVolumesToSave, snapshots = _a.snapshots, volumesToSave = _a.volumesToSave;
    var t = useKubevirtTranslation().t;
    if (!loaded) {
        return (React.createElement(Bullseye, null,
            React.createElement(Loading, null)));
    }
    var pvcsWithNoDataVolumes = (pvcs === null || pvcs === void 0 ? void 0 : pvcs.filter(function (pvc) { return !findPVCOwner(pvc, dataVolumes); })) || [];
    var diskCount = (dataVolumes === null || dataVolumes === void 0 ? void 0 : dataVolumes.length) + (pvcsWithNoDataVolumes === null || pvcsWithNoDataVolumes === void 0 ? void 0 : pvcsWithNoDataVolumes.length) || 0;
    var hasSnapshots = (snapshots === null || snapshots === void 0 ? void 0 : snapshots.length) > 0;
    return (React.createElement(React.Fragment, null,
        !!diskCount && (React.createElement(StackItem, null, t('The following resources will be deleted along with this VirtualMachine. Unchecked items will not be deleted.'))),
        __spreadArray(__spreadArray([], (dataVolumes || []), true), pvcsWithNoDataVolumes, true).map(function (resource) { return (React.createElement(DeleteVolumeCheckbox, { key: "".concat(resource.kind, "-").concat(getName(resource)), resource: resource, setVolumesToSave: setVolumesToSave, volumesToSave: volumesToSave })); }),
        hasSnapshots && (React.createElement(StackItem, null,
            React.createElement("strong", null,
                t('Warning'),
                ": "),
            t('All snapshots of this VirtualMachine will be deleted as well.')))));
};
export default DeleteOwnedResourcesMessage;
//# sourceMappingURL=DeleteOwnedResourcesMessage.js.map