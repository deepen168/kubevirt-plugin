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
import { PersistentVolumeClaimModel } from '@kubevirt-ui/kubevirt-api/console';
import DataVolumeModel from '@kubevirt-ui/kubevirt-api/console/models/DataVolumeModel';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getName } from '@kubevirt-utils/resources/shared';
import { Checkbox, StackItem } from '@patternfly/react-core';
import { sameVolume } from '../utils/helpers';
var DeleteVolumeCheckbox = function (_a) {
    var resource = _a.resource, setVolumesToSave = _a.setVolumesToSave, volumesToSave = _a.volumesToSave;
    var t = useKubevirtTranslation().t;
    var resourceName = getName(resource);
    var saveVolume = function () { return setVolumesToSave(function (prevVolumes) { return __spreadArray(__spreadArray([], prevVolumes, true), [resource], false); }); };
    var deleteVolume = function () {
        return setVolumesToSave(function (prevVolumes) {
            return prevVolumes.filter(function (volume) { return !sameVolume(volume, resource); });
        });
    };
    return (React.createElement(StackItem, null,
        React.createElement(Checkbox, { label: t('Delete disk {{resourceName}} ({{kindAbbr}})', {
                kindAbbr: resource.kind === PersistentVolumeClaimModel.kind
                    ? PersistentVolumeClaimModel.abbr
                    : DataVolumeModel.abbr,
                resourceName: resourceName,
            }), id: "".concat(resource.kind, "-").concat(resourceName), isChecked: !volumesToSave.find(function (volume) { return sameVolume(volume, resource); }), onChange: function (_, checked) { return (checked ? deleteVolume() : saveVolume()); } })));
};
export default DeleteVolumeCheckbox;
//# sourceMappingURL=DeleteVolumeCheckbox.js.map