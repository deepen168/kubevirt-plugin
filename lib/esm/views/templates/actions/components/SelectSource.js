import React from 'react';
import CapacityInput from '@kubevirt-utils/components/CapacityInput/CapacityInput';
import { DEFAULT_DISK_SIZE } from '@kubevirt-utils/components/DiskModal/utils/constants';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup, TextInput, ValidatedOptions } from '@patternfly/react-core';
import { SOURCE_TYPES } from '../../utils/constants';
import { PersistentVolumeClaimSelect } from './PersistentVolumeClaimSelect/PersistentVolumeClaimSelect';
import SelectSourceOption from './SelectSourceOption';
import { getGenericSourceCustomization, getPVCSource, getSourceTypeFromDataVolumeSpec, } from './utils';
export var SelectSource = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var httpSourceHelperText = _a.httpSourceHelperText, _o = _a.initialVolumeQuantity, initialVolumeQuantity = _o === void 0 ? DEFAULT_DISK_SIZE : _o, onSourceChange = _a.onSourceChange, source = _a.source, sourceLabel = _a.sourceLabel, sourceOptions = _a.sourceOptions, _p = _a.withSize, withSize = _p === void 0 ? false : _p;
    var t = useKubevirtTranslation().t;
    var selectedSourceType = getSourceTypeFromDataVolumeSpec(source);
    var pvcNameSelected = (_c = (_b = source === null || source === void 0 ? void 0 : source.source) === null || _b === void 0 ? void 0 : _b.pvc) === null || _c === void 0 ? void 0 : _c.name;
    var pvcNamespaceSelected = (_e = (_d = source === null || source === void 0 ? void 0 : source.source) === null || _d === void 0 ? void 0 : _d.pvc) === null || _e === void 0 ? void 0 : _e.namespace;
    var httpURL = (_g = (_f = source === null || source === void 0 ? void 0 : source.source) === null || _f === void 0 ? void 0 : _f.http) === null || _g === void 0 ? void 0 : _g.url;
    var containerImage = (_j = (_h = source === null || source === void 0 ? void 0 : source.source) === null || _h === void 0 ? void 0 : _h.registry) === null || _j === void 0 ? void 0 : _j.url;
    var volumeQuantity = ((_m = (_l = (_k = source === null || source === void 0 ? void 0 : source.storage) === null || _k === void 0 ? void 0 : _k.resources) === null || _l === void 0 ? void 0 : _l.requests) === null || _m === void 0 ? void 0 : _m.storage) || initialVolumeQuantity;
    var onSourceSelected = function (newSourceType, newVolumeQuantity) {
        var selectedVolumeQuantity = newVolumeQuantity || volumeQuantity;
        switch (newSourceType) {
            case SOURCE_TYPES.httpSource:
                return onSourceChange(getGenericSourceCustomization(newSourceType, httpURL, withSize ? selectedVolumeQuantity : null));
            case SOURCE_TYPES.pvcSource:
                return onSourceChange(getPVCSource(pvcNameSelected, pvcNamespaceSelected, withSize ? selectedVolumeQuantity : null));
            case SOURCE_TYPES.registrySource:
                return onSourceChange(getGenericSourceCustomization(newSourceType, containerImage || '', withSize ? selectedVolumeQuantity : null));
            default:
                return;
        }
    };
    var onContainerChange = function (newContainerURL) {
        return onSourceChange(getGenericSourceCustomization(selectedSourceType, newContainerURL || '', withSize ? volumeQuantity : null));
    };
    var onURLChange = function (newUrl) {
        return onSourceChange(getGenericSourceCustomization(selectedSourceType, newUrl, withSize ? volumeQuantity : null));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(SelectSourceOption, { label: sourceLabel, onSelectSource: function (newSourceType) { return onSourceSelected(newSourceType); }, options: sourceOptions, selectedSource: selectedSourceType }),
        selectedSourceType === SOURCE_TYPES.pvcSource && (React.createElement(PersistentVolumeClaimSelect, { selectPVC: function (newPVCNamespace, newPVCName) {
                return onSourceChange(getPVCSource(newPVCName, newPVCNamespace, withSize ? volumeQuantity : null));
            }, projectSelected: pvcNamespaceSelected, pvcNameSelected: pvcNameSelected })),
        selectedSourceType === SOURCE_TYPES.registrySource && (React.createElement(FormGroup, { className: "disk-source-form-group", fieldId: "disk-source-required-".concat(selectedSourceType), isRequired: true, label: t('Container Image') },
            React.createElement(TextInput, { "aria-label": t('Container Image'), onChange: function (_event, newContainerURL) { return onContainerChange(newContainerURL); }, type: "text", value: containerImage }),
            React.createElement(FormGroupHelperText, null, t('Example: {{exampleURL}}', {
                exampleURL: 'quay.io/containerdisks/fedora:latest',
            })))),
        selectedSourceType === SOURCE_TYPES.httpSource && (React.createElement(FormGroup, { className: "disk-source-form-group", fieldId: "disk-source-required-".concat(selectedSourceType), isRequired: true, label: t('Image URL') },
            React.createElement(TextInput, { "aria-label": t('Image URL'), onChange: function (_event, newUrl) { return onURLChange(newUrl); }, type: "text", validated: !httpURL ? ValidatedOptions.error : ValidatedOptions.default, value: httpURL }),
            React.createElement(FormGroupHelperText, null, httpSourceHelperText))),
        withSize && selectedSourceType !== SOURCE_TYPES.defaultSource && (React.createElement(CapacityInput, { label: t('Disk size'), onChange: function (newVolume) { return onSourceSelected(selectedSourceType, newVolume); }, size: volumeQuantity }))));
};
//# sourceMappingURL=SelectSource.js.map